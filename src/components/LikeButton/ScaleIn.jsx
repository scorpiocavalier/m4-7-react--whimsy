import React from "react"
import { useSpring, animated } from 'react-spring'

export default ({ children }) => {
  const style = useSpring({
    transform: 'scale(1)',
    from: {
      transform: 'scale(0)'
    },
    config: {
      tension: 50,
      friction: 7,
    },
  })

  return <animated.div style={style}>{children}</animated.div>
}

