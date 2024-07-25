import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules'
import { CustomButton, H2, SliderContainer } from '../TimeIntervalBlock.styles'
import useIsMobile from '../../../hooks/useMobile'

interface Event {
	id: string
	year: number
	description: string
}

interface SliderCompProps {
	eventsData: Event[]
  activeCategory: string
}

const SliderComp: React.FC<SliderCompProps> = ({ eventsData, activeCategory }) => {
	const swiperRef = useRef<any>(null)
	const isMobile = useIsMobile(920)

	const handleNextSlide = () => {
		swiperRef.current?.swiper.slideNext()
	}

	const handlePreviousSlide = () => {
		swiperRef.current?.swiper.slidePrev()
	}

	return (
      <SliderContainer className='slider-container'>
        {isMobile && <H2 className='active-category'>{activeCategory}</H2>}
			<Swiper
        className="mySwiper"
				ref={swiperRef}
				modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
        spaceBetween={40} 
				slidesPerView={isMobile ? 1.7 : 3}
				pagination={isMobile ? { clickable: true } : false}
        freeMode={true}
				navigation={{
					prevEl: '.custom-prev',
					nextEl: '.custom-next',
				}}
			>
				{eventsData.map((event) => (
					<SwiperSlide key={event.id}>
						<span>{event.year}</span>
						<p>{event.description}</p>
					</SwiperSlide>
				))}
			</Swiper>
			{!isMobile && (
				<>
					<CustomButton
						className='custom-prev swiper-button-prev'
						onClick={handlePreviousSlide}
					>
						❮
					</CustomButton>
					<CustomButton
						className='custom-next swiper-button-next'
						onClick={handleNextSlide}
					>
						❯
					</CustomButton>
				</>
			)}
		</SliderContainer>
	)
}

export default SliderComp
