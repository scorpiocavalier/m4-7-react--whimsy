import React, { useState, createContext } from "react"
import avatarSrc from "../assets/carmen-sandiego.png"
import moment from "moment"

export const TweetContext = createContext(null)

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460)
  const [numOfRetweets, setNumOfRetweets] = useState(65)
  const [isRetweeted, setIsRetweeted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const dateFormat = "h:mm a - MMMM Do, YYYY"
  const date = moment().format(dateFormat)

  const handleToggle = (numOf_, setNumOf_, is_, setIs_) => {
    setNumOf_(numOf_ + (is_ ? -1 : 1))
    setIs_(!is_)
  }

  const handleToggleLike = () =>
    handleToggle(numOfLikes, setNumOfLikes, isLiked, setIsLiked)

  const handleToggleRetweets = () =>
    handleToggle(numOfRetweets, setNumOfRetweets, isRetweeted, setIsRetweeted)

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        isRetweeted,
        isLiked,
        avatarSrc,
        date,
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        handleToggleRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  )
}

export default TweetContext
