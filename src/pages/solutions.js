import Head from "next/head"

import Card from "../components/reusable/Card"
import Header from "../components/reusable/Header"
import ButtonLink from "../components/reusable/ButtonLink"
import { getDocuments } from "../firebase/firestore"
import Icons from "../components/SvgIcons/Icons"

const Solutions = ({ solutions, pagination }) => {
  const { currentPage, hasNextPage, hasPrevPage } = pagination || {}

  return (
    <>
      <Head>
        <title>FrontendPro - Solutions</title>
      </Head>
      <main>
        <Header
          title="Explore Solutions"
          description="Find solutions to frontend coding challenges submitted by fellow developers. Get inspired, learn new techniques and improve your skills. 🚀"
        />
        <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
            {solutions?.map((solution) => {
              return <Card key={solution.id} card={solution} isSolution />
            })}
          </div>

          <div className="mt-8 flex items-center justify-center space-x-4">
            {/* Previous button */}
            {hasPrevPage ? (
              <ButtonLink
                to={
                  currentPage === 2 ? "/solutions" : `/solutions?page=${currentPage - 1}`
                }
                variant="outline"
                size="normal"
              >
                <Icons.ArrowLeft className="mr-2" />
                Previous
              </ButtonLink>
            ) : (
              <span className="inline-flex justify-center items-center rounded-lg px-3 py-2 font-medium text-sm border border-gray-700 text-gray-400 opacity-50 cursor-not-allowed">
                <Icons.ArrowLeft className="mr-2" />
                Previous
              </span>
            )}

            {/* Next button */}
            {hasNextPage ? (
              <ButtonLink
                to={`/solutions?page=${(currentPage || 1) + 1}`}
                variant="outline"
                size="normal"
              >
                Next
                <Icons.ArrowRight className="ml-2" />
              </ButtonLink>
            ) : (
              <span className="inline-flex justify-center items-center rounded-lg px-3 py-2 font-medium text-sm border border-gray-700 text-gray-400 opacity-50 cursor-not-allowed">
                Next
                <Icons.ArrowRight className="ml-2" />
              </span>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default Solutions

export async function getServerSideProps(context) {
  const PAGE_SIZE = 9

  const pageParam = context.query?.page || "1"

  let currentPage = +pageParam

  const endIndex = currentPage * PAGE_SIZE
  // Fetch just enough documents to determine if there is a next page.
  const limit = endIndex + 1

  const allSolutionsUpToPage = await getDocuments(
    "solutions",
    ["completed", "==", true],
    limit
  )

  const startIndex = (currentPage - 1) * PAGE_SIZE
  const solutions = allSolutionsUpToPage.slice(startIndex, endIndex)

  const hasNextPage = allSolutionsUpToPage.length > endIndex
  const hasPrevPage = currentPage > 1

  return {
    props: {
      solutions,
      pagination: {
        currentPage,
        hasNextPage,
        hasPrevPage,
      },
    },
  }
}
