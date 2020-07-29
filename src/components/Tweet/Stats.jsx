import React, { useContext } from "react"
import { TweetContext } from '../TweetContext'
import styled from "styled-components"

export default () => {
  const { numOfLikes, numOfRetweets } = useContext(TweetContext)
  return (
    <StatsWrapper>
      <Content>
        <BoldText>{numOfRetweets}</BoldText>
        {`Retweets`}
      </Content>
      <Content>
        <BoldText>{numOfLikes}</BoldText>
        {`Likes`}
      </Content>
    </StatsWrapper>
  )
}

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin-right: 10px;
`

const BoldText = styled.span`
  font-weight: 700;
  margin-right: 5px;
`
