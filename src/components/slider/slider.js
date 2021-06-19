/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick'
import classes from '../../styles/slider/sliderStyles.module.scss'
import BusTicketForm from './busTicketForm'
import TrainTicketForm from './trainTicketForm'
import PlaneTicketForm from './planeTicketForm'
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
				<BusTicketForm
					sliderTitle="Автобус"
					sliderBackground={classes.slider__busBackground}
				/>
				<TrainTicketForm
					sliderTitle="Поезд"
					sliderBackground={classes.slider__trainBackground}
				/>
				<PlaneTicketForm
					sliderTitle="Самолет"
					sliderBackground={classes.slider__planeBackground}
				/>
			</Slider>
		</div>
	)
}