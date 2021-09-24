import React, { useState } from "react"
import useFirestore from "../../hooks/useFirestore"
import ChallengeCard from "../challenges/ChallengeCard"
import SolutionSummary from "../solutions/SolutionSummary"
import SkeletonSolutionSummaryCard from "../skeletons/SkeletonSolutionSummaryCard"

const Tabs = ({ userID }) => {
  const [openTab, setOpenTab] = useState(1)
  const { docs = [], loading } = useFirestore("solutions", null, userID, openTab)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="-mb-px xs:mb-4 sm:mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-gradient-to-br from-purple-500 to-indigo-500"
                    : "text-purple-500 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-rocket text-base mr-1"></i> In-Progress Projects
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-gradient-to-br from-purple-500 to-indigo-500"
                    : "text-purple-500 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Completed Projects
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center">
                    {!loading ? (
                      docs.length ? (
                        docs.map((challenge) => {
                          return (
                            <ChallengeCard
                              key={challenge.id}
                              challenge={challenge}
                              btnTitle="Submit Solution"
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
                      [1, 2, 3, 4, 5, 6].map((n) => (
                        <SkeletonSolutionSummaryCard key={n} />
                      ))
                    )}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                    {!loading ? (
                      docs.length ? (
                        docs.map((solution) => {
                          return <SolutionSummary key={solution.id} solution={solution} />
                        })
                      ) : (
                        <h1 className="text-center sm:col-span-2 lg:col-span-3 text-white text-lg">
                          You haven&apos;t submitted any solution
                          <span className="ml-1" role="img" aria-label="sad">
                            😔
                          </span>
                        </h1>
                      )
                    ) : (
                      [1, 2, 3, 4, 5, 6].map((n) => (
                        <SkeletonSolutionSummaryCard key={n} />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs
