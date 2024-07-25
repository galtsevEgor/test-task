import React from 'react'
import {
	Container,
	CircleContainer,
	CircleDates,
	H1,
} from './TimeIntervalBlock.styles'
import CenterYearComponent from './comp/CenterYear'
import SliderComp from './comp/SliderComp'
import useCircleAnimation from '../../hooks/useCircleAnimation'
import useMainPageState from '../../hooks/useMainPageState'
import CounterComp from './comp/CounterComp'
import CirclePoints from './comp/CirclePoints'
import useIsMobile from '../../hooks/useMobile'

const MainPage: React.FC = () => {
	const {
		categories,
		activeCategory,
		eventsData,
		setEventsData,
		handleCategoryChange,
		handleNextCategory,
		handlePreviousCategory,
	} = useMainPageState()

	useCircleAnimation(activeCategory, categories, setEventsData)

	const isMobile = useIsMobile(920)
	const activeCategoryIndex = categories.indexOf(activeCategory) + 1

	return (
		<Container>
			<H1>
				Исторические <br />
				даты
			</H1>

			{!isMobile && (
				<CircleContainer className='circle-container'>
					<CircleDates className='circle-dates'>
						<CirclePoints
							categories={categories}
							activeCategory={activeCategory}
							handleCategoryChange={handleCategoryChange}
						/>
					</CircleDates>
				</CircleContainer>
			)}

			<CenterYearComponent
				eventsData={eventsData}
				activeCategory={activeCategory}
			/>

			<CounterComp
				activeCategoryIndex={activeCategoryIndex}
				categoriesLength={categories.length}
				handlePreviousCategory={handlePreviousCategory}
				handleNextCategory={handleNextCategory}
			/>

			<SliderComp activeCategory={activeCategory} eventsData={eventsData} />
		</Container>
	)
}

export default MainPage
