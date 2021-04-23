/* eslint-disable react/prop-types */
import classes from '../../styles/slider/sliderForm.module.scss'
import { submitHendler } from '../../pureFunctions/submitHandler'
import InputSlider from '../input/input'

export default function SliderForm(
	{
		sliderTitle,
		sliderFon
	}
) {
	return (
		<form
			className={`${classes.slider__item} ${sliderFon}`}
			onSubmit={submitHendler}
		>
			<div className={classes.container}>
				<h2 className={classes.slider__title}>{sliderTitle}</h2>
				<div className={classes.selectCountrie}>
					<h3>Выберете место прибытия</h3>
					<select>
						<option value="Нидерланды">Нидерланды</option>
						<option value="Мальдивы">Мальдивы</option>
						<option value="Венгрия">Венгрия</option>
						<option value="Мрамрный каньон">Мрамрный каньон</option>
						<option value="Нью-Йорк">Нью-Йорк</option>
						<option value="Канада">Канада</option>
					</select>
				</div>
				<div className={classes.orderToorBlock}>
					<InputSlider
						type="text"
						label="Откуда отправляетесь"
					/>
					<InputSlider
						type="text"
						label="Отбытие"
					/>
					<InputSlider
						type="text"
						label="Когда вернетесь"
					/>
				</div>
				<div className={classes.orderToorBlock}>
					<InputSlider
						type="text"
						label="Сколько взрослых"
					/>
					<InputSlider
						type="text"
						label="Сколько детей"
					/>
				</div>
				<div className={`${classes.tabButton} ${classes.orderButton}`}>
					<button
						type="button"
					// onClick={orderTicketHendlerBus}
					>Заказать билет</button>
				</div>
			</div>
		</form>
	)
}