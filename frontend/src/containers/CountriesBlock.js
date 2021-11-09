import CountrieBlockGallery from '../components/countrieBlockComponents/countrieBlockGallery'

export default function CountrieBlock() {
	return (
		<section className="main_content" id="main__content">
			<div className="main_content__container">
				<div className="main_content__text">
					<div className="main_content__buttPerpose button">
						<a
							href="/countries"
						>Предложения</a>
					</div>
					<div
						className="main_content__subtitle"
					>
						Увидь то, что не увидишь из своего окна,
						<br />
						почувствуй солёные брызги водопада,
						<br /> сравни архитектуру запада и востока,
						<br /> окунись в традиции незнакомых стран
					</div>
				</div>
				<CountrieBlockGallery />
			</div>
		</section>
	)
}