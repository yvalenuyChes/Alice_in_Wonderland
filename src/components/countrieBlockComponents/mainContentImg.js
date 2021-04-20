/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import Link from 'next/link'


export default function MainContentImg(props) {
	return (
		<div className="contentCountries__wrapper">
			<div className="img__wrapper">
				<div className={props.isLimited}>
					<div className="blockImg">
						<img src={props.imgSrc} className="img_countries" alt="toorfirmImg" />
						<div className="block_text">
							<h2 className="content__title">{props.title}</h2>
							<div className="content__text">
								<div className="content__text_title">Предлагаем Вам посетить...</div>
								<div className="content__text_subtitleClass">{props.content__text_subtitle}</div>
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
		</div>
	)
}