import React, { createContext } from "react"
import avatarSrc from "../assets/carmen-sandiego.png"
import moment from 'moment'

export const TweetContext = createContext(null)

export const TweetProvider = ({ children }) => {
  const dateFormat = 'h:mm a - MMMM Do, YYYY'
  const date = moment().format(dateFormat)
  
  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
        avatarSrc,
        date
      }}
    >
      {children}
    </TweetContext.Provider>
  )
}