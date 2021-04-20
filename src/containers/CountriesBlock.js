import CountrieBlockGallery from '../components/countrieBlockComponents/countrieBlockGallery'
import classes from '../styles/countrieBlockStyles/countrieBlock_container.module.scss'

export default function CountrieBlock() {
	return (
		<section className={classes.main_content} id="main__content">
			<div className={classes.main_content__container}>
				<div className={classes.main_content__text}>
					<div className={`${classes.main_content__buttPerpose} ${classes.classRight} ${classes.animItems} ${classes.overflow} ${classes.button}`}>
						<a
							href="/countries"
						>Предложения</a>
					</div>
					<div
						className={`${classes.content__subtitle} ${classes.classLeft} ${classes.animItems} ${classes.overflow}`}
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