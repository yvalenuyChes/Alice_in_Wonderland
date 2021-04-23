/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick'
import classes from '../../styles/slider/sliderStyles.module.scss'
import SliderForm from './sliderForm'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function SliderBlock() {
	const settings = {
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: classes.slider__wrapper,
		draggable: true
	}

	return (
		<div className={classes.slider}>
			<Slider {...settings}>
				<SliderForm
					sliderTitle="Автобус"
					sliderFon={classes.slider__busBackground}
				/>
				<SliderForm
					sliderTitle="Поезд"
					sliderFon={classes.slider__trainBackground}
				/>
				<SliderForm
					sliderTitle="Самолет"
					sliderFon={classes.slider__planeBackground}
				/>
			</Slider>
		</div>
	)
}