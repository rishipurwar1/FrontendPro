import { useState } from "react"

import { useCollection } from "../../hooks/useCollection"
import SkeletonCard from "../skeletons/SkeletonCard"
import Icons from "../SvgIcons/Icons"
import notFound from "../../assets/illustrations/not-found.png"

import Card from "./Card"
import Image from "next/image"

const Tabs = ({ userID }) => {
  const [openTab, setOpenTab] = useState(1)
  const { documents, isLoading } = useCollection(
    "solutions",
    null,
    null,
    ["createdAt", "desc"],
    userID,
    openTab,
    null
  )

  return (
    <div>
      <ul
        className="flex flex-wrap justify-center items-baseline text-sm font-medium text-center border-b border-gray-700 text-gray-400 pt-3 list-none"
        role="tablist"
      >
        <li className="mr-2">
          <a
            className={`inline-flex p-4 text-base rounded-t-lg font-semibold border-b-2 ${
              openTab === 1
                ? "text-blue-600 border-blue-600 bg-gray-800"
                : "hover:bg-gray-800 hover:text-gray-300 border-transparent sm:border-gray-800"
            }`}
            onClick={(e) => {
              e.preventDefault()
              setOpenTab(1)
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            <span>
              <Icons.Rocket className="mr-2 -ml-1" />
            </span>
            <span>In-Progress Challenges</span>
          </a>
        </li>
        <li>
          <a
            className={`inline-flex p-4 text-base rounded-t-lg font-semibold border-b-2 ${
              openTab === 2
                ? "text-blue-600 border-blue-600 bg-gray-800"
                : "hover:bg-gray-800 hover:text-gray-300 border-transparent sm:border-gray-800"
            }`}
            onClick={(e) => {
              e.preventDefault()
              setOpenTab(2)
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            <span>
              <Icons.Certificate className="mr-2 -ml-1" />
            </span>
            <span>Completed Challenges</span>
          </a>
        </li>
      </ul>
      {isLoading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center p-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <SkeletonCard key={n} />
          ))}
        </div>
      )}
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded">
        <div className="flex-auto p-6">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center">
                {documents.length > 0 ? (
                  documents.map((challenge) => {
                    return (
                      <Card key={challenge.id} card={challenge} isChallenge isSolution />
                    )
                  })
                ) : (
                  <div className="col-span-full">
                    <p className="text-center sm:col-span-2 lg:col-span-3 text-white text-lg max-w-xl">
                      Looks like you haven&apos;t started any frontend challenges yet.
                      Keep exploring and challenging yourself to improve your skills!
                      <span className="ml-1" role="img" aria-label="sad">
                        😔
                      </span>
                    </p>
                    <Image
                      src={notFound}
                      width={500}
                      height={500}
                      alt="no solutions found"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                {documents.length > 0 ? (
                  documents.map((solution) => (
                    <Card key={solution.id} card={solution} isSolution />
                  ))
                ) : (
                  <div className="col-span-full">
                    <p className="text-center sm:col-span-2 lg:col-span-3 text-white text-lg max-w-xl">
                      Looks like you haven&apos;t submitted any frontend challenge
                      solutions yet. Keep working on your skills and come back to showcase
                      your impressive work!
                      <span className="ml-1" role="img" aria-label="sad">
                        😔
                      </span>
                    </p>
                    <Image
                      src={notFound}
                      width={500}
                      height={500}
                      alt="no solutions found"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
