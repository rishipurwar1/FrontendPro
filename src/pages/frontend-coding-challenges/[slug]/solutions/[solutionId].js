import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import moment from "moment"

import ChallengeHeader from "../../../../components/challenges/ChallengeHeader"
import Avatar from "../../../../components/reusable/Avatar"
import Button from "../../../../components/reusable/Button"
import ButtonLink from "../../../../components/reusable/ButtonLink"
import ConfettiWrapper from "../../../../components/reusable/ConfettiWrapper"
import Modal from "../../../../components/reusable/Modal"
import EmojiSection from "../../../../components/solutions/EmojiSection"
import ShowWebsite from "../../../../components/solutions/ShowWebsite"
import SolutionComments from "../../../../components/solutions/SolutionComments"
import Icons from "../../../../components/SvgIcons/Icons"
import { getDocument } from "../../../../firebase/firestore"
// custom hooks
import { useAuthContext } from "../../../../hooks/useAuthContext"
import { useFirestore } from "../../../../hooks/useFirestore"

export async function getServerSideProps({ query }) {
  const { solutionId } = query
  const solution = await getDocument("solutions", solutionId)

  return {
    props: {
      solution,
    },
  }
}

const Solution = ({ solution }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { solutionId, slug } = router.query
  const isSubmit = router.query?.submit
  const { user } = useAuthContext()
  const { deleteDocument, response } = useFirestore("solutions")

  const handleDelete = async () => {
    await deleteDocument(solutionId)
    setIsOpen(false)
    router.push("/")
  }

  const title = `FrontendPro Solution - ${solution.title}`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        {isSubmit && <ConfettiWrapper />}
        <ChallengeHeader doc={solution} button />
        <section className="rounded-lg bg-gray-900 border border-gray-700">
          <div className="flex justify-between items-center border-b border-gray-700 text-gray-400 px-6 py-4">
            <div className="flex items-center">
              <Avatar photoURL={solution.photoURL} className="ring-gray-700" />
              <div className="flex flex-col ml-3">
                <span className="text-navItem text-sm text-gray-300">
                  {solution.author}
                </span>
                <span className="text-navItem text-xs text-gray-400">
                  {moment(solution.createdAt).fromNow()}
                </span>
              </div>
            </div>
            {user && user.uid === solution.userID && (
              <div className="flex">
                <ButtonLink
                  to={`/frontend-coding-challenges/${slug}/edit/${solution.id}`}
                  size="square"
                  variant="outline"
                  className="text-gray-400 hover:text-white mr-2"
                >
                  <Icons.Edit size={18} />
                </ButtonLink>
                <Button
                  size="square"
                  variant="outline"
                  className="text-gray-400 hover:text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Icons.Delete size={18} />
                </Button>
              </div>
            )}
          </div>
          <div className="p-6">
            <ShowWebsite
              url={solution?.liveWebsiteUrl}
              github={solution?.githubUrl}
              title={solution?.title}
              isPlayground={solution?.isPlayground}
            />
            <div className="grid grid-col-1 md:grid-cols-[1fr_160px] items-start gap-x-5 mt-10">
              <SolutionComments />
              <EmojiSection />
            </div>
          </div>
        </section>
      </main>
      {isOpen && (
        <Modal
          body={
            <>
              <Icons.Delete className="text-gray-500 mb-3.5 mx-auto" size={44} />
              <p className="mb-4 text-gray-500 dark:text-gray-300">
                Are you sure you want to delete this solution?
              </p>
            </>
          }
          footer={
            <>
              <Button variant="outline" size="medium" onClick={() => setIsOpen(false)}>
                No, cancel
              </Button>
              <Button
                variant="danger"
                size="medium"
                onClick={handleDelete}
                loading={response.isPending}
              >
                Yes, I&apos;m sure
              </Button>
            </>
          }
          setIsOpen={setIsOpen}
          id={solution.id}
        />
      )}
    </>
  )
}

export default Solution
