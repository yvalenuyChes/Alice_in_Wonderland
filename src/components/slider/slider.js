/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick'
import classes from '../../styles/slider/sliderStyles.module.scss'
import SliderForm from './sliderForm'

export default function SliderBlock() {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: classes.slider__wrapper,
		draggable: true
	}

	return (
		<div className={classes.slider}>
			<Slider {...settings}>
				<SliderForm />
			</Slider>
		</div>
	)
}