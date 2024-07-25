import { useEffect } from 'react'
import { gsap } from 'gsap'

const useCircleAnimation = (activeCategory: string, categories: string[], setEventsData: (data: any) => void) => {
  useEffect(() => {
    if (activeCategory) {
      const index = categories.indexOf(activeCategory) + 1
      const totalPoints = categories.length
      const newRotation = (360 / totalPoints) * index
      const wrapRotation = gsap.utils.wrap(-180, 180)

      const loadEvents = async () => {
        try {
          const response = await fetch('http://localhost:5000/events')
          const data = await response.json()
          if (activeCategory) {
            setEventsData(data[activeCategory])
          }
        } catch (error) {
          console.error('Error fetching events:', error)
        }
      }

      const tl = gsap.timeline()

      gsap.to('.circle-point', {
        rotation: wrapRotation(newRotation),
        duration: 1,
        ease: 'back',
      })

      gsap
        .to('.slider-container', {
          opacity: 0,
          duration: 0.3,
          ease: 'power1.inOut',
        })
      gsap
        .to('.active-category', {
          opacity: 0,
          duration: 0.3,
          ease: 'power1.inOut',
        })
        .then(() => loadEvents())

      tl.to('.circle-dates', {
        rotation: wrapRotation(-newRotation),
        duration: 1,
        ease: 'power1.inOut',
      })

      tl.to('.category-label', {
        opacity: 1,
        duration: 0.5,
        ease: 'power1.inOut',
      })

      tl.to('.active-category', {
        opacity: 1,
        duration: 0.3,
        ease: 'power1.inOut',
      })

      tl.to('.slider-container', {
        opacity: 1,
        duration: 0.3,
        ease: 'power1.inOut',
      })
    }
  }, [activeCategory, categories, setEventsData])
}

export default useCircleAnimation
