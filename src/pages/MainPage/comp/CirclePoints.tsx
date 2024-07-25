import React from 'react'
import { CirclePoint, CategoryLabel } from '../TimeIntervalBlock.styles'

interface CirclePointsProps {
  categories: string[]
  activeCategory: string
  handleCategoryChange: (category: string) => void
}

const CirclePoints: React.FC<CirclePointsProps> = ({
  categories,
  activeCategory,
  handleCategoryChange,
}) => {
  const totalPoints = categories.length
  return (
    <>
      {categories.map((category, index) => {
        const angle = (index / totalPoints) * 360
        return (
          <CirclePoint
            key={category}
            angle={angle}
            data-index={index}
            active={category === activeCategory}
            onClick={() => handleCategoryChange(category)}
            className='circle-point'
          >
            {index + 1}
            {category === activeCategory && (
              <CategoryLabel className='category-label'>{category}</CategoryLabel>
            )}
          </CirclePoint>
        )
      })}
    </>
  )
}

export default CirclePoints
