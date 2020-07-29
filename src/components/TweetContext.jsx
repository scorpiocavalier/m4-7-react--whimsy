import React, { useState, createContext } from "react"
import avatarSrc from "../assets/carmen-sandiego.png"
import moment from 'moment'

export const TweetContext = createContext(null)

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes]       = useState(460)
  const [numOfRetweets, setNumOfRetweets] = useState(65)
  const [isRetweeted, setIsRetweeted]     = useState(false)
  const [isLiked, setIsLiked]             = useState(false)

  const dateFormat = 'h:mm a - MMMM Do, YYYY'
  const date = moment().format(dateFormat)

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        avatarSrc,
        date,
        numOfLikes,
        numOfRetweets
      }}
    >
      {children}
    </TweetContext.Provider>
  )
}