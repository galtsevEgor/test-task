import { useState, useEffect } from 'react'
import axios from 'axios'

export interface Event {
  id: string
  year: number
  description: string
}

const fetchEvents = async () => {
  try {
    const response = await axios.get('http://localhost:5000/events')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    return {}
  }
}

const useMainPageState = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('')
  const [eventsData, setEventsData] = useState<Event[]>([])

  useEffect(() => {
    const loadCategoriesAndEvents = async () => {
      const data = await fetchEvents()
      const categoryNames = Object.keys(data)
      setCategories(categoryNames)
      if (categoryNames.length > 0) {
        setActiveCategory(categoryNames[0])
        setEventsData(data[categoryNames[0]])
      }
    }
    loadCategoriesAndEvents()
  }, [])

  const handleCategoryChange = (category: string) => setActiveCategory(category)

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(activeCategory)
    const nextIndex = (currentIndex + 1) % categories.length
    setActiveCategory(categories[nextIndex])
  }

  const handlePreviousCategory = () => {
    const currentIndex = categories.indexOf(activeCategory)
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length
    setActiveCategory(categories[prevIndex])
  }

  return {
    categories,
    activeCategory,
    eventsData,
    setEventsData, 
    handleCategoryChange,
    handleNextCategory,
    handlePreviousCategory,
  }
}

export default useMainPageState


