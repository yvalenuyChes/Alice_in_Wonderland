import MainContentImg from './mainContentImg'

import niderlandsImg from '../../img/countries/nider.png'
import maldivesImg from '../../img/countries/mal.png'
import vengriaImg from '../../img/countries/vengr.png'
import mramCanyonImg from '../../img/countries/mram.png'
import newYorkImg from '../../img/countries/NY.png'
import kanadaImg from '../../img/countries/kanada.png'
import { KANADA_TEXT, MALDIVES_TEXT, MRAM_KANYON_TEXT, NIRERLAND_TEXT, NY_TEXT, VENGRIA_TEXT } from './countrieBlockText'

export default function CountrieBlockGallery() {
	return (
		<div className="imgGallary">
			<div className="niderlands">
				<MainContentImg
					limiter="limiter"
					imgSrc={niderlandsImg}
					title="Нидерланды"
					content__text_subtitle={NIRERLAND_TEXT}
					value='3500'
				/>
			</div>
			<div className="maldives">
				<MainContentImg
					imgSrc={maldivesImg}
					title="Мальдивы"
					content__text_subtitle={MALDIVES_TEXT}
					value='4000'
				/>
			</div>
			<div className="vengria">
				<MainContentImg
					imgSrc={vengriaImg}
					title="Венгрия"
					content__text_subtitle={VENGRIA_TEXT}
					value='1500'
				/>
			</div>
			<div className="mram">
				<MainContentImg
					limiter="limiter"
					imgSrc={mramCanyonImg}
					title="Мраморный каньон"
					content__text_subtitle={MRAM_KANYON_TEXT}
					value='200'
				/>
			</div>
			<div className="newYork">
				<MainContentImg
					imgSrc={newYorkImg}
					title="Нью Йорк"
					content__text_subtitle={NY_TEXT}
					value='2000'
				/>
			</div>
			<div className="kanada">
				<MainContentImg
					imgSrc={kanadaImg}
					title="Канада"
					content__text_subtitle={KANADA_TEXT}
					value='1000'
				/>
			</div>
		</div>
	)
}