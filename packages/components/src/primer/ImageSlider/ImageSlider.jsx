// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
import { useEffect, useRef } from 'react'
import { propTypes, defaultProps } from './ImageSlider.prop'
import { images } from './ImageSlider.images'
import styles from './ImageSlider.scss'

export function ImageSlider() {
  let isDown = false
  let startX
  let scrollLeft
  const sliderRef = useRef(0)
  const canvasRef = useRef(0)

  function handleEnd() {
    isDown = false
  }

  function handleStart(e) {
    isDown = true
    startX = e.pageX || e.touches[0].pageX - sliderRef.current.offsetLeft
    scrollLeft = sliderRef.current.scrollLeft
  }

  function handleMove(e) {
    if (!isDown) return
    const x = e.pageX || e.touches[0].pageX - sliderRef.current.offsetLeft
    const dist = x - startX
    sliderRef.current.scrollLeft = scrollLeft - dist
  }

  function addSliderEventListeners() {
    sliderRef.current.addEventListener('mousedown', handleStart, { passive: true })
    sliderRef.current.addEventListener('touchstart', handleStart, { passive: true })
    sliderRef.current.addEventListener('mousemove', handleMove, { passive: true })
    sliderRef.current.addEventListener('touchmove', handleMove, { passive: true })
    sliderRef.current.addEventListener('mouseleave', handleEnd, { passive: true })
    sliderRef.current.addEventListener('mouseup', handleEnd, { passive: true })
    sliderRef.current.addEventListener('touchend', handleEnd, { passive: true })
  }

  function getCanvasContext() {
    return canvasRef.current.getContext('2d')
  }

  function drawCanvasImages({ canvasContext }) {
    images.forEach(({ url, left, top, width, height }) => {
      const image = new Image()
      image.src = url
      image.onload = () => canvasContext.drawImage(image, left, top, width, height)
    })
  }

  useEffect(() => {
    addSliderEventListeners()
    drawCanvasImages({ canvasContext: getCanvasContext() })
  })

  return (
    <div ref={sliderRef} className={styles.items}>
      <canvas width="3050" height="400" ref={canvasRef} className={styles.canvas} />
    </div>
  )
}

ImageSlider.propTypes = propTypes

ImageSlider.defaultProps = defaultProps
