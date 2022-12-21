import React, { useState } from "react"

import { useCollection } from "../../hooks/useCollection"
import SkeletonCard from "../skeletons/SkeletonCard"

import Card from "./Card"

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
    <div className="flex flex-wrap mt-8">
      <div className="w-full">
        <ul className="flex list-none flex-wrap mb-4 flex-row" role="tablist">
          <li className="-mb-px xs:mb-4 sm:mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1 ? "text-white bg-indigo-600" : "text-indigo-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(1)
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              <i className="fas fa-rocket text-base mr-1"></i> In-Progress Challenges
            </a>
          </li>
          <li className="-mb-px last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 2 ? "text-white bg-indigo-600" : "text-indigo-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(2)
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              <i className="fas fa-briefcase text-base mr-1"></i> Completed Challenges
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center">
                  {!isLoading ? (
                    documents.length > 0 ? (
                      documents.map((challenge) => {
                        return (
                          <Card
                            key={challenge.id}
                            card={challenge}
                            isChallenge
                            isSolution
                          />
                        )
                      })
                    ) : (
                      <h1 className="text-center sm:col-span-2 lg:col-span-3 text-white text-lg">
                        You haven&apos;t started any challenge
                        <span className="ml-1" role="img" aria-label="sad">
                          😔
                        </span>
                      </h1>
                    )
                  ) : (
                    [1, 2, 3, 4, 5, 6].map((n) => <SkeletonCard key={n} />)
                  )}
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                  {!isLoading ? (
                    documents.length > 0 ? (
                      documents.map((solution) => (
                        <Card key={solution.id} card={solution} isSolution />
                      ))
                    ) : (
                      <h1 className="text-center sm:col-span-2 lg:col-span-3 text-white text-lg">
                        You haven&apos;t submitted any solution
                        <span className="ml-1" role="img" aria-label="sad">
                          😔
                        </span>
                      </h1>
                    )
                  ) : (
                    [1, 2, 3, 4, 5, 6].map((n) => <SkeletonCard key={n} />)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
