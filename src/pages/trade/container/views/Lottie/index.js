import React, { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import animationData from '@/assets/lottie.json'

const Demo = () => {
  const oneEle = useRef(null)

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: oneEle.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: animationData
    })
    return () => {
      animation.destroy()
    }
  }, [])

  return <div>
    <div ref={oneEle} style={{width: '100px', height: '100px'}} ></div>
    test
  </div>
}

export default Demo;
