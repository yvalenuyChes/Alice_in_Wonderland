import AdvantagesItem from '../components/advantagesSquares/advantagesItem'
import { FIRST_ITEM_TEXT, FOURTH_ITEM_TEXT, SECOND_ITEM_TEXT, THIRD_ITEM_TEXT } from '../components/advantagesSquares/advantagesText'
import classes from '../styles/advantagesBlockStyle/advantagesBlockContainer.module.scss'

import planet from '../img/advantagesImg/planet.svg'
import tip from '../img/advantagesImg/tip.svg'
import hands from '../img/advantagesImg/hands.svg'
import ten from '../img/advantagesImg/number.svg'

export default function Advantages() {

	return (
		<section className={classes.advantagesBlock}>
			<div className={classes.advantagesBlock__title}>
				<h2>Почему именно наша фирма?</h2>
			</div>
			<div className={classes.advantagesBlock__body}>
				<AdvantagesItem
					title="Огромный выбор"
					subtitle={FIRST_ITEM_TEXT}
					img={planet}
				/>
				<AdvantagesItem
					title="Надежность"
					subtitle={SECOND_ITEM_TEXT}
					img={tip}
				/>
				<AdvantagesItem
					title="Работаем для вас"
					subtitle={THIRD_ITEM_TEXT}
					img={hands}
				/>
				<AdvantagesItem
					title="Стабильность"
					subtitle={FOURTH_ITEM_TEXT}
					img={ten}
				/>
			</div>
		</section >
	)
}