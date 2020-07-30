import React, { useContext } from "react"
import styled from "styled-components"
import TweetContext from "../TweetContext"
import LikeButton from "../LikeButton"
import Action from "./Action"
import TweetActionIcon from "./TweetActionIcon"

export default () => {
  const { isRetweeted, handleToggleLike, handleToggleRetweets } = useContext(
    TweetContext
  )

  return (
    <Wrapper>
      {/* REPLY */}
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>

      {/* RETWEET */}
      <Action color="rgb(23, 191, 99)" size={40} onClick={handleToggleRetweets}>
        <TweetActionIcon
          kind="retweet"
          color={isRetweeted ? "rgb(23, 191, 99)" : undefined}
        />
      </Action>

      {/* LIKE */}
      <Action color="rgb(224, 36, 94)" size={40} onClick={handleToggleLike}>
        <LikeButton />
      </Action>

      {/* SHARE */}
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`
