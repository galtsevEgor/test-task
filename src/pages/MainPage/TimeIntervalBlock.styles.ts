import styled, { css } from 'styled-components'

type CirclePointProps = {
	angle: number
	active: boolean
}

export const Container = styled.div`
	max-width: 1440px;
	border-left: 2px solid #42567a15;
	border-right: 2px solid #42567a15;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	height: 100vh;
	position: relative;
	font-family: 'PT Sans', sans-serif;
	color: #42567a;

	@media (max-width: 920px) {
		border: 0;
	}

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: #42567a20;
		top: 46.25%;
		left: 0;
		transform: translateY(-50%);
	}
	&::after {
		content: '';
		position: absolute;
		width: 1px;
		height: 100%;
		background-color: #42567a20;
		left: 50%;
		transform: translateX(-50%);
		z-index: 5;
	}

	@media (max-width: 920px) {
		&::after, &::before {
			display: none;
		}
	}
`

export const CircleContainer = styled.div`
	position: relative;
	width: 530px;
	height: 530px;
	border-radius: 50%;
	border: 1px solid #42567a60;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 170px;
	margin-bottom: 20px;
	z-index: 10;
`

export const CircleDates = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const CirclePoint = styled.div<CirclePointProps>`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ active }) => (active ? '56px' : '5px')};
	height: ${({ active }) => (active ? '56px' : '5px')};
	color: ${({ active }) => (active ? '#42567A' : 'transparent')};
	background-color: ${({ active }) => (active ? '#fff' : '#42567A')};
	border: ${({ active }) =>
		active ? '1px solid rgba(48, 62, 88, 0.5)' : 'none'};
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		width: 56px;
		height: 56px;
		background-color: #fff;
		color: #42567a;
		border: 1px solid rgba(48, 62, 88, 0.5);
		content: attr(data-index);
		z-index: 1;
	}

	${({ angle }) => css`
		transform: rotate(${angle}deg) translate(265px) rotate(-${angle}deg);
	`}
`

export const CategoryLabel = styled.div`
	position: absolute;
	left: 72px;
	white-space: nowrap;
	color: #42567a;
	font-size: 20px;
	font-weight: 700;
	opacity: 0;
`

export const CenterYear = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const YearText = styled.span`
	position: absolute;
	font-size: 190px; 
	font-weight: 700;
	color: #5d5fef;
	cursor: default;
	margin-top: -62vh; 

	@media (max-width: 920px) {
		position: relative;
		font-size: 17vw; 
		margin-top: 25vh;
	}

	.first-year {
		color: #5d5fef;
	}

	span {
		color: #ef5da8;
		margin-left: -10px;
	}
`

export const H1 = styled.div`
	position: absolute;
	top: 20px;
	left: 0px;
	font-size: 56px;
	line-height: 60px;
	font-weight: 700;
	border-left: 5px solid;
	border-image-source: linear-gradient(0deg, #ef5da8, #3877ee);
	border-image-slice: 1;
	padding-left: 50px;
	margin-top: 120px;
	cursor: default;
	@media (max-width: 920px) {
		font-size: 6vw;
		line-height: 6vw;
		padding-left: 20px;
		margin-top: 60px;
		border: 0;
	}
`
export const H2 = styled.div`
		position: absolute;
		top: -40px;
		font-size: 20px;
		font-weight: 700;
		opacity: 0;
`

export const ActiveCategory = styled.div`
	position: absolute;
	bottom: -30px;
	background-color: #fff;
	padding: 5px 10px;
	border: 1px solid #000;
	border-radius: 5px;
`

export const SliderContainer = styled.div`
	width: 90%;
	margin-top: 96px;
	position: relative;
  opacity: 0;

	.swiper-slide {
		font-family: 'PT Sans', sans-serif;
		font-weight: 400;
	}

	.swiper-slide span {
		font-weight: 700;
		color: #3877ee;
	}

	.swiper-pagination {
		margin-bottom: -12px;
		left: 50%;
		transform: translateX(-50%);
		align-items: center;
	}

	@media (max-width: 920px ) {
		width: 100%;
		position: relative;
  	display: flex;
  	justify-content: flex-start;
		padding-top: 20px ;
		margin-left: 20px ;
		border-top: 2px solid #42567a20;
	}
`

export const CustomButton = styled.div`
	position: absolute;
	top: 50%;
	font-size: 15px;
	z-index: 10;
	width: 40px;
	height: 40px;
	background-color: #fff;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	content: '';

	&::after {
		display: none;
	}

	&.swiper-button-prev {
		left: -50px;
	}

	&.swiper-button-next {
		right: -50px;
	}

	&.swiper-button-disabled {
		display: none;
	}
`

export const Counter = styled.div`
  position: absolute;
  bottom: 210px;
  left: 80px;
	font-size: 14px;
	font-weight: 400;
	text-align: center;
	color: #333;
	z-index: 10;

  p {
    text-align: left;
    margin-bottom: 20px;
  }

	@media (max-width: 920px) {
		margin: 0;
		bottom: 0;
		left: 20px;
		bottom: 4vh;
		
		p {
    text-align: left;
    margin-bottom: 0;
  }}
`

export const CategoryNavButton = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-right: 20px;
  font-size: 16px;
  &:hover {
    background: #f0f0f0;
  }
  &:disabled{
    opacity: 0,3;
  }
	@media (max-width: 920px) {
		font-size: 8px;
		width: 25px;
  	height: 25px;
	}
`;
