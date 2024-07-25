import React from 'react'
import { Counter, CategoryNavButton } from '../TimeIntervalBlock.styles'

interface CounterCompProps {
  activeCategoryIndex: number
  categoriesLength: number
  handlePreviousCategory: () => void
  handleNextCategory: () => void
}

const CounterComp: React.FC<CounterCompProps> = ({
  activeCategoryIndex,
  categoriesLength,
  handlePreviousCategory,
  handleNextCategory,
}) => {
  return (
    <Counter>
      <p>
        {activeCategoryIndex.toString().padStart(2, '0')}/
        {categoriesLength.toString().padStart(2, '0')}
      </p>

      <CategoryNavButton
        disabled={activeCategoryIndex === 1}
        onClick={handlePreviousCategory}
      >
        ❮
      </CategoryNavButton>
      <CategoryNavButton
        disabled={activeCategoryIndex === categoriesLength}
        onClick={handleNextCategory}
      >
        ❯
      </CategoryNavButton>
    </Counter>
  )
}

export default CounterComp
