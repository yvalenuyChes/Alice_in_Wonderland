import MainContentImg from './mainContentImg'
import classes from '../../styles/countrieBlockStyles/countrieBlockGallery.module.scss'


import niderlandsImg from '../../img/countries/nider.png'
import maldives from '../../img/countries/mal.png'
import vengria from '../../img/countries/vengr.png'
import mramCanyon from '../../img/countries/mram.png'
import newYork from '../../img/countries/NY.png'
import kanada from '../../img/countries/kanada.png'
import { KANADA_TEXT, MALDIVES_TEXT, MRAM_KANYON_TEXT, NIRERLAND_TEXT, NY_TEXT, VENGRIA_TEXT } from './countrieBlockText'

export default function CountrieBlockGallery() {
	return (
		<div>
			<MainContentImg
				imgSrc={niderlandsImg}
				title="Нидерланды"
				content__text_subtitle={NIRERLAND_TEXT}
			/>
			<div className={classes.flexWrapper}>
				<MainContentImg
					imgSrc={maldives}
					title="Мальдивы"
					content__text_subtitle={MALDIVES_TEXT}
				/>
				<MainContentImg
					imgSrc={vengria}
					title="Венгрия"
					content__text_subtitle={VENGRIA_TEXT}
				/>
			</div>
			<MainContentImg
				imgSrc={mramCanyon}
				title="Мраморный каньон"
				content__text_subtitle={MRAM_KANYON_TEXT}
			/>
			<div className={classes.flexWrapper}>
				<MainContentImg
					imgSrc={newYork}
					title="Нью Йорк"
					content__text_subtitle={NY_TEXT}
				/>
				<MainContentImg
					imgSrc={kanada}
					title="Канада"
					content__text_subtitle={KANADA_TEXT}
				/>
			</div>
		</div>)
}