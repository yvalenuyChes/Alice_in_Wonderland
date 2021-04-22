import MainContentImg from './mainContentImg'
import classes from '../../styles/countrieBlockStyles/countrieBlockGallery.module.scss'


import niderlandsImg from '../../img/countries/nider.png'
import maldivesImg from '../../img/countries/mal.png'
import vengriaImg from '../../img/countries/vengr.png'
import mramCanyonImg from '../../img/countries/mram.png'
import newYorkImg from '../../img/countries/NY.png'
import kanadaImg from '../../img/countries/kanada.png'
import { KANADA_TEXT, MALDIVES_TEXT, MRAM_KANYON_TEXT, NIRERLAND_TEXT, NY_TEXT, VENGRIA_TEXT } from './countrieBlockText'

export default function CountrieBlockGallery() {
	return (
		<div className={classes.imgGallary}>
			<div className={classes.niderlands}>
				<MainContentImg
					imgSrc={niderlandsImg}
					title="Нидерланды"
					content__text_subtitle={NIRERLAND_TEXT}
				/>
			</div>
			<div className={classes.maldives}>
				<MainContentImg
					imgSrc={maldivesImg}
					title="Мальдивы"
					content__text_subtitle={MALDIVES_TEXT}
				/>
			</div>
			<div className={classes.vengria}>
				<MainContentImg
					imgSrc={vengriaImg}
					title="Венгрия"
					content__text_subtitle={VENGRIA_TEXT}
				/>
			</div>
			<div className={classes.mram}>
				<MainContentImg
					imgSrc={mramCanyonImg}
					title="Мраморный каньон"
					content__text_subtitle={MRAM_KANYON_TEXT}
				/>
			</div>
			<div className={classes.newYork}>
				<MainContentImg
					imgSrc={newYorkImg}
					title="Нью Йорк"
					content__text_subtitle={NY_TEXT}
				/>
			</div>
			<div className={classes.kanada}>
				<MainContentImg
					imgSrc={kanadaImg}
					title="Канада"
					content__text_subtitle={KANADA_TEXT}
				/>
			</div>
		</div>
	)
}