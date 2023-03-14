import { useState } from "react"
import Head from "next/head"

// Components
import ChallengeHeader from "../../components/challenges/ChallengeHeader"
import SignedOutLinks from "../../components/layouts/SignedOutLinks"
import Accordion from "../../components/reusable/Accordion"
import Button from "../../components/reusable/Button"
import ContributorProfile from "../../components/reusable/ContributorProfile"
import DownloadButton from "../../components/reusable/DownloadButton"
import DropDown from "../../components/reusable/DropDown"
import Modal from "../../components/reusable/Modal"
import StartCodingButton from "../../components/reusable/StartCodingButton"
import Icons from "../../components/SvgIcons/Icons"
import { getDocument, getDocuments } from "../../firebase/firestore"
import { useAuthContext } from "../../hooks/useAuthContext"

const Challenge = ({ challenge }) => {
  const { user } = useAuthContext()
  const [figmaURL, setFigmaURL] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const title = `FrontendPro Challenge - ${challenge.title}`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mb-6 md:mb-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
        <ChallengeHeader doc={challenge} />
        <div className="overflow-hidden relative">
          <iframe
            className="iframe-embed border-gray-50 w-full -mb-12"
            src={`https://www.figma.com/embed?embed_host=share&url=${
              figmaURL === 0
                ? challenge.figmaURLs.desktop || challenge.figmaURLs.mobile
                : challenge.figmaURLs.mobile
            }`}
            title={`screen-${figmaURL}`}
            loading="lazy"
            allowFullScreen
          ></iframe>
          {challenge.figmaURLs.desktop && (
            <DropDown setFigmaURL={(index) => setFigmaURL(index)} />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-x-12">
          <div className="text-white">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold pb-2 text-indigo-600">
                About the Challenge
              </h2>
              <p className="text-gray-300">{challenge.description}</p>
              <p className="text-gray-300 pt-4">
                You can use as many (or as few) tools, libraries, and frameworks as
                you&apos;d like. If you&apos;re trying to learn something new, this might
                be a great way to push yourself.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-3xl md:text-4xl font-extrabold pb-2 text-indigo-600">
                Challenge Requirements
              </h3>
              <ul className="text-gray-300 list-disc pl-5">
                {challenge.requirements.map((requirement, index) => (
                  <li key={index} className="mb-2">
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <h2 className="text-3xl md:text-4xl font-extrabold pb-2 text-indigo-600">
                Taking your Project to the Next Level
              </h2>
              <ul className="text-gray-300 list-disc pl-5">
                {challenge?.bonus &&
                  challenge?.bonus.map((bonus, index) => (
                    <li key={index} className="mb-2">
                      {bonus}
                    </li>
                  ))}
                <li>
                  Use a framework like React, Vue, or Svelte. Or, if you&apos;re feeling
                  particularly adventurous, try writing everything in Vanilla JavaScript.
                </li>
              </ul>
            </div>
            {challenge?.resources && (
              <div className="mt-10">
                <h2 className="text-3xl md:text-4xl font-extrabold pb-2 text-indigo-600">
                  Resources
                </h2>
                <ul className="text-gray-300 list-disc pl-5">
                  {challenge?.resources.map((resource, index) => (
                    <li key={index}>
                      {" "}
                      <a
                        href={resource.link}
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="text-white xs:mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-extrabold pb-1 text-indigo-600">
              What you&apos;ll Learn?
            </h2>
            <p className="text-gray-300 pb-2">{`${challenge.learning} So what are you waiting for?`}</p>
            <div className="mt-10">
              <h2 className="text-3xl md:text-4xl font-bold pb-2 text-indigo-600">
                Getting Started
              </h2>
              <ul className="text-gray-300 list-decimal pl-5">
                <li className="mb-2">
                  To get started, download the starter code(zip file).
                </li>
                <li className="mb-2">
                  Take a look around. Look at the project&apos;s Figma file. This is a
                  great way to see how the pieces and parts should look within the
                  browser.
                </li>
                <li className="mb-2">
                  Open the project&apos;s README.md file. It has additional information
                  about the challenge.
                </li>
                <li className="mb-2">
                  Set up version control (we recommend{" "}
                  <a
                    href="https://git-scm.com/downloads"
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git
                  </a>
                  ) and{" "}
                  <a
                    href="https://www.freecodecamp.org/news/git-and-github-for-beginners/"
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    create a GitHub repository
                  </a>{" "}
                  for this challenge.
                </li>
                <li className="mb-2">
                  Customize your project/file architecture to your liking.
                </li>
                <li className="mb-2">
                  Happy coding!{" "}
                  <span role="img" aria-label="Thumbs Up">
                    👍
                  </span>
                </li>
                {/* {challenge.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))} */}
              </ul>
            </div>
            <div className="mt-10">
              <h2 className="text-3xl md:text-4xl font-bold pb-2 text-indigo-600">
                Get Involved with the Community
              </h2>
              <p className="text-gray-300 pb-2">
                Join our{" "}
                <a
                  href="https://discord.com/invite/FYSQUEw6xP"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord community
                </a>{" "}
                and share your solutions with others. Ask questions and get answers from
                the fellow developers, help others and get involved with the community.
              </p>
              <p className="text-gray-300 pb-2 mt-2">
                It&apos;s an amazing place to learn and grow as a developer, and we&apos;d
                love for you to be a part of it!
              </p>
            </div>
            <p className="mb-3">
              So, what are you waiting for? Click on the download button to get started.
            </p>
            <Button
              variant="primary"
              size="large"
              className="font-medium"
              onClick={() => setIsOpen(true)}
            >
              Start Challenge
              <Icons.Rocket size={18} className="ml-2 -mr-1 animate-move" />
            </Button>
            {challenge.contributor && (
              <div className="mt-10">
                <h2 className="text-3xl md:text-4xl font-bold pb-2 text-indigo-600">
                  Contributed By:
                </h2>
                <ContributorProfile contributor={challenge.contributor} />
              </div>
            )}
          </div>
        </div>
        <Accordion />
      </div>
      {!user && isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          body={
            <>
              <span role="img" aria-label="rocket" className="text-3xl">
                🚀
              </span>
              <h2 className="mt-4 mb-2 font-medium text-base text-white">
                Join FrontendPro to start this challenge!
              </h2>
              <p className="mb-4 text-xs text-gray-300">
                Sign up to access all of the challenges and
                <br />
                join our community of coders!
              </p>
            </>
          }
          footer={<SignedOutLinks variant="primary" size="medium" />}
        />
      )}
      {user && isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          body={
            <>
              <span role="img" aria-label="rocket" className="text-3xl">
                🚀
              </span>
              <h2 className="mt-4 mb-2 font-medium text-base text-white">
                How would you like to start this challenge?
              </h2>
              <p className="mb-4 text-xs text-gray-300">
                Start coding this challenge online with our code editor or
                <br />
                download the starter code to work on it locally.
              </p>
            </>
          }
          footer={
            <>
              <StartCodingButton document={challenge} setIsOpen={setIsOpen} />
              <DownloadButton document={challenge} setIsOpen={setIsOpen} />
            </>
          }
        />
      )}
    </>
  )
}

export default Challenge

export async function getStaticPaths() {
  const challenges = await getDocuments("challenges")

  const paths = challenges.map((doc) => {
    return {
      params: { challengeId: doc.id },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.challengeId
  const challenge = await getDocument("challenges", id)

  return {
    props: { challenge },
  }
}
