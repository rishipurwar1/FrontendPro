import React, { useState } from "react"
import moment from "moment"

const SolutionComments = ({ docs }) => {
  const initcomments = [
    {
      author: "Shwet Khatri",
      photoURL: "https://randomuser.me/api/portraits/lego/5.jpg",
      createdAt: docs[0].createdAt,
      mainText:
        "The application is awesome, can you guide me more about learning path for creating this solution ?",
      likes: 0,
      subcomments: [
        {
          author: "Rishi Pawar",
          photoURL: "https://randomuser.me/api/portraits/lego/1.jpg",
          createdAt: docs[0].createdAt,
          subText: "Sure , You need to learn how to fetch a rest API using AJAX",
          likes: 0,
        },
        {
          author: "Meet Patel",
          photoURL: "https://randomuser.me/api/portraits/lego/2.jpg",
          createdAt: docs[0].createdAt,
          subText: "Hey , you can use async await as well for that",
          likes: 0,
        },
      ],
    },
    {
      author: "Chirag Sharma",
      photoURL: "https://randomuser.me/api/portraits/lego/4.jpg",
      createdAt: docs[0].createdAt,
      mainText: "Can I get some resources for learning Asynchronous Javascript ?",
      likes: 0,
      subcomments: [
        {
          author: "Jitendra Patel",
          photoURL: "https://randomuser.me/api/portraits/lego/3.jpg",
          createdAt: docs[0].createdAt,
          subText:
            "Yes you can search best courses on udemy or can learn from best content on Youtube.",
          likes: 0,
        },
      ],
    },
  ]

  const [allcomments, setAllComments] = useState(initcomments)
  const [mainText, setMainText] = useState("")
  const [subText, setSubText] = useState("")
  const [editText, setEditText] = useState("")
  const [subactive, setSubActive] = useState(-1)
  const [editactive, setEditActive] = useState({
    commentidx: -1,
    subcommentidx: -1,
  })

  const handleAddMainOnSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()

      const newcomment = {
        author: "Niyati Gandhi",
        photoURL: "https://randomuser.me/api/portraits/lego/9.jpg",
        createdAt: docs[0].createdAt,
        mainText: mainText,
        likes: 0,
        subComments: [],
      }

      setAllComments([newcomment, ...allcomments])
      setMainText("")
    }
  }

  const addLikeToComment = (commentidx) => {
    setAllComments(
      allcomments.map((comment, index) =>
        index === commentidx ? { ...comment, likes: comment.likes + 1 } : comment
      )
    )
  }

  const addLikeToSubComment = (commentidx, subcommentidx) => {
    setAllComments(
      allcomments.map((comment, index) =>
        index === commentidx
          ? {
              ...comment,
              subcomments: comment.subcomments.map((subcomment, subidx) =>
                subidx === subcommentidx
                  ? { ...subcomment, likes: subcomment.likes + 1 }
                  : subcomment
              ),
            }
          : comment
      )
    )
  }

  const addSubComment = (commentidx) => {
    const newsubcomment = {
      author: "Mitesh Patel",
      photoURL: "https://randomuser.me/api/portraits/lego/7.jpg",
      createdAt: docs[0].createdAt,
      subText: subText,
      likes: 0,
    }

    setAllComments(
      allcomments.map((comment, index) =>
        index === commentidx
          ? { ...comment, subcomments: [newsubcomment, ...(comment.subcomments || [])] }
          : comment
      )
    )
    setSubActive(-1)
    setSubText("")
  }

  const handleAddSubOnSubmit = (e, commentidx) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()

      const newsubcomment = {
        author: "Mitesh Patel",
        photoURL: "https://randomuser.me/api/portraits/lego/7.jpg",
        createdAt: docs[0].createdAt,
        subText: e.target.value,
        likes: 0,
      }

      setAllComments(
        allcomments.map((comment, index) =>
          index === commentidx
            ? { ...comment, subcomments: [newsubcomment, ...(comment.subcomments || [])] }
            : comment
        )
      )
      setSubActive(-1)
    }
  }

  const startSubEdit = (commentidx, subcommentidx) => {
    editactive.commentidx === commentidx && editactive.subcommentidx === subcommentidx
      ? setEditActive({ commentidx: -1, subcommentidx: -1 })
      : setEditActive({ commentidx, subcommentidx })
  }

  const editSubComment = (commentidx, subcommentidx, editText) => {
    setAllComments(
      allcomments.map((comment, index) =>
        index === commentidx
          ? {
              ...comment,
              subcomments: comment.subcomments.map((subcomment, subidx) =>
                subidx === subcommentidx
                  ? { ...subcomment, subText: editText }
                  : subcomment
              ),
            }
          : comment
      )
    )
    setEditActive({ commentidx: -1, subcommentidx: -1 })
  }

  const handleEditSubOnSubmit = (e, commentidx, subcommentidx) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()

      setAllComments(
        allcomments.map((comment, index) =>
          index === commentidx
            ? {
                ...comment,
                subcomments: comment.subcomments.map((subcomment, subidx) =>
                  subidx === subcommentidx
                    ? { ...subcomment, subText: e.target.value }
                    : subcomment
                ),
              }
            : comment
        )
      )
      setEditActive({ commentidx: -1, subcommentidx: -1 })
    }
  }

  const deleteSubComment = (commentidx, subcommentidx) => {
    setAllComments(
      allcomments.map((comment, index) =>
        index === commentidx
          ? {
              ...comment,
              subcomments: comment.subcomments.filter(
                (subcomment, subidx) => subidx !== subcommentidx
              ),
            }
          : comment
      )
    )
  }

  return (
    <div>
      <div className="relative my-4">
        <input
          className="block w-full h-auto bg-purple-700 text-white text-base xs:p-4 xs:pl-12 md:p-5 md:pl-16 
                               font-heading shadow-md rounded-xl focus:outline-none"
          placeholder="Leave a constructive comment"
          value={mainText}
          onChange={(e) => setMainText(e.target.value)}
          onKeyDown={(e) => handleAddMainOnSubmit(e)}
        />
        <i className="fas fa-comment fa-lg text-white absolute xs:top-5 xs:left-4 md:top-6 md:left-8"></i>
      </div>
      <div className="relative w-full bg-purple-700 text-white text-base shadow-md rounded-xl xs:p-4 md:p-8">
        <p className="text-white font-bold text-lg text-base">2 Comments</p>

        {allcomments.map((maincomment, commentidx) => (
          <div key={commentidx}>
            <div className="flex items-center mt-6 w-full justify-between">
              <div className="flex items-center text-base">
                <img
                  className="rounded-full mr-1 w-12 border-purple-500 border-2"
                  src={maincomment.photoURL}
                  alt="user profile"
                />
                <div className="flex flex-col pl-1">
                  <span className="text-navItem text-sm text-gray-100">
                    {maincomment.author}
                  </span>
                  <span className="text-navItem text-xs text-gray-300">
                    {moment(maincomment.createdAt.toDate()).startOf("day").fromNow()}
                  </span>
                </div>
              </div>
              <div
                className="flex text-base justify-between border-2 border-black shadow-lg items-center rounded-full xs:w-16 md:w-20 px-3 py-1
                                            cursor-pointer hover:border-gray-300 hover:shadow-lg"
                onClick={() => addLikeToComment(commentidx)}
              >
                <i className="fas fa-heart text-red-600"></i>
                <p className="text-white font-semibold">{maincomment.likes}</p>
              </div>
            </div>
            <div className="flex items-center w-full py-3 md:pl-14 justify-between">
              <p className="text-base text-white">{maincomment.mainText}</p>
              <p
                className="font-semibold cursor-pointer text-base"
                onClick={() => {
                  subactive !== commentidx ? setSubActive(commentidx) : setSubActive(-1)
                }}
              >
                <i className="fas fa-reply"></i> Reply
              </p>
            </div>
            {subactive === commentidx && (
              <div className="pl-14">
                <div className="flex items-center text-base relative ">
                  <img
                    className="rounded-full mr-1 w-12 border-purple-500 border-2"
                    src="https://randomuser.me/api/portraits/lego/7.jpg"
                    alt="user profile"
                  />
                  <textarea
                    className="block w-full h-auto bg-white text-purple-700 text-base mt-6 pr-6 xs:p-3 md:p-4
                                                    font-heading shadow-md rounded-xl focus:outline-none"
                    placeholder="Type your reply here ..."
                    onChange={(e) => setSubText(e.target.value)}
                    onKeyDown={(e) => handleAddSubOnSubmit(e, commentidx)}
                  />
                  <i
                    className="fas fa-paper-plane text-purple-700 absolute right-5 top-10 cursor-pointer"
                    onClick={() => addSubComment(commentidx)}
                  ></i>
                </div>
              </div>
            )}
            {maincomment.subcomments &&
              maincomment.subcomments.map((subcomment, subcommentidx) => (
                <div className="xs:pl-7 md:pl-14" key={subcommentidx}>
                  <div className="flex items-center mt-6 w-full justify-between">
                    <div className="flex items-center text-base">
                      <img
                        className="rounded-full mr-1 w-12 border-purple-500 border-2"
                        src={subcomment.photoURL}
                        alt="user profile"
                      />
                      <div className="flex flex-col pl-1">
                        <span className="text-navItem text-sm text-gray-100">
                          {subcomment.author}
                        </span>
                        <span className="text-navItem text-xs text-gray-300">
                          {moment(subcomment.createdAt.toDate()).startOf("day").fromNow()}
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      <div
                        className="flex text-base justify-between border-2 border-black shadow-lg items-center rounded-full xs:w-14 md:w-16 px-3 py-1 mr-2
                                                        cursor-pointer hover:border-2 hover:border-gray-300"
                        onClick={() => addLikeToSubComment(commentidx, subcommentidx)}
                      >
                        <i className="fas fa-heart text-red-600 mr-1"></i>
                        <p className="text-white font-semibold">{subcomment.likes}</p>
                      </div>
                      <div
                        className="flex text-base justify-between border-2 border-black shadow-lg items-center rounded-full xs:w-8 px-2 py-1 mr-2
                                                        cursor-pointer hover:border-gray-300"
                        onClick={() => startSubEdit(commentidx, subcommentidx)}
                      >
                        <i className="fas fa-edit text-white"></i>
                      </div>
                      <div
                        className="flex text-base justify-between border-2 border-black shadow-lg items-center rounded-full xs:w-8 px-2 py-1
                                                        cursor-pointer hover:border-gray-300"
                        onClick={() => deleteSubComment(commentidx, subcommentidx)}
                      >
                        <i className="fas fa-trash text-white"></i>
                      </div>
                    </div>
                  </div>
                  {editactive.commentidx === commentidx &&
                  editactive.subcommentidx === subcommentidx ? (
                    <div className="flex items-center text-base relative ">
                      <textarea
                        className="block w-full h-auto bg-white text-purple-700 text-base mt-6 xs:p-3 md:p-4
                                                    font-heading shadow-md rounded-xl focus:outline-none"
                        placeholder="Type your reply here ..."
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) =>
                          handleEditSubOnSubmit(e, commentidx, subcommentidx)
                        }
                      >
                        {subcomment.subText}
                      </textarea>
                      <i
                        className="fas fa-paper-plane text-purple-700 absolute right-5 top-10 cursor-pointer"
                        onClick={() =>
                          editSubComment(commentidx, subcommentidx, editText)
                        }
                      ></i>
                    </div>
                  ) : (
                    <div className="flex items-center w-full py-3 md:pl-14 justify-between">
                      <p className="text-base text-white">{subcomment.subText}</p>
                    </div>
                  )}
                </div>
              ))}
            <hr className="my-6" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SolutionComments
