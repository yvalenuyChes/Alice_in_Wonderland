/* eslint-disable react/prop-types */
import classes from '../../styles/slider/sliderForm.module.scss'
import Input from '../input/input'

export default function TrainTicketForm(
	{
		sliderTitle,
		sliderBackground
	}
) {
	return (
		<form
			className={`${classes.slider__item} ${sliderBackground}`}
			method="POST"
			action="/order_train_ticket"
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
				<div>
					<div className={classes.orderToorBlock}>
						<Input
							type="text"
							label="Откуда отправляетесь"
							name="departure_point_train"
						/>
						<Input
							type="text"
							label="Отбытие"
							name="departure_date_train"
						/>
						<Input
							type="text"
							label="Когда вернетесь"
							name="return_date_train"
						/>
					</div>
					<div className={classes.orderToorBlock}>
						<Input
							type="text"
							label="Сколько взрослых"
							name="adult_count_train"
						/>
						<Input
							type="text"
							label="Сколько детей"
							name="children_count_train"
						/>
					</div>
				</div>
				<div className={`${classes.tabButton} ${classes.orderButton}`}>
					<button type="submit">Заказать билет</button>
				</div>
			</div>
		</form>
	)
}