/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function MainContentImg({ limiter, imgSrc, title, content__text_subtitle, value }) {

	const [price, setPrice] = useState()


	const RUB_URL = 'https://www.cbr-xml-daily.ru/daily_json.js'
	async function getRubValue() {
		const dataRub = await axios.get(RUB_URL)
		setPrice(Math.floor(dataRub.data.Valute.USD.Value))
	}

	useEffect(() => {
		getRubValue()
	})

	return (
		<div className={`${"contentCountries__wrapper"} ${limiter}`}>
			<div className="img__wrapper">
				<div className="blockImg">
					<img src={imgSrc} className="img_countries" alt="toorfirmImg" />
					<div className="block_text">
						<h2 className="content__title">{title}</h2>
						<span className='content__price'>Цена за билет: {value * price} руб</span>
						<div className="content__text">
							<div className="content__text_title">Предлагаем Вам посетить...</div>
							<div className="content__text_subtitleClass">{content__text_subtitle}</div>
						</div>
					</div>
					<Link
						href="/toSMTH"
					>
						<a className="countrieDesk">Подробнее о стране</a>
					</Link>
				</div>
			</div>
		</div>
	)
}