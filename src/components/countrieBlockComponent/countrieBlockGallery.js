import MainContentImg from './mainContentImg'

import niderlandsImg from '../../img/countries/nider.png'
import maldives from '../../img/countries/mal.png'
import vengria from '../../img/countries/vengr.png'
import mramCanyon from '../../img/countries/mram.png'
import newYork from '../../img/countries/NY.png'
import kanada from '../../img/countries/kanada.png'

export default function CountrieBlockGallery() {
	return (
		<div>
			<MainContentImg
				imgSrc={niderlandsImg}
				title="Нидерланды"
				content__text_subtitle="text1"
			/>
			<MainContentImg
				imgSrc={maldives}
				title="Мальдивы"
				content__text_subtitle="text2"
			/>
			<MainContentImg
				imgSrc={vengria}
				title="Венгрия"
				content__text_subtitle="text3"
			/>
			<MainContentImg
				imgSrc={mramCanyon}
				title="Мраморный каньон"
				content__text_subtitle="text4"
			/>
			<MainContentImg
				imgSrc={newYork}
				title="Нью Йорк"
				content__text_subtitle="text5"
			/>
			<MainContentImg
				imgSrc={kanada}
				title="Канада"
				content__text_subtitle="text6"
			/>
		</div>)
}