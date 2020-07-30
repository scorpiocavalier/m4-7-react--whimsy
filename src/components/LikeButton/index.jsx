import React, { useContext } from "react"
import TweetContext from "../TweetContext"
import styled from "styled-components"
import ScaleIn from "./ScaleIn"
import Heart from "./Heart"
import PoppingCircle from "./PoppingCircle"

// const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"]

const LikeButton = ({ size = 40 }) => {
  const heartSize = size * 0.6
  const { isLiked } = useContext(TweetContext)

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked ? (
        <>
          <ScaleIn>
            <Heart width={heartSize} />
          </ScaleIn>
          {/* <PoppingCircle size={size} color="#E790F7" /> */}
        </>
      ) : (
        <Heart width={heartSize} />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LikeButton
