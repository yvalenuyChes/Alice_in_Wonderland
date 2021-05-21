import MainPage from "../../layout/mainPage"
import useWindowWidth from '../../src/costomReactHooks/getWindowWidth'
import ParralaxCountries from '../../src/components/countriePageComponents/parralax countries/parralaxKanada'
import SlidingSlider from '../../src/components/countriePageComponents/sliding slider/slider'
import Card from '../../src/components/countriePageComponents/card/card'
import classes from '../../src/styles/countriesStyles/countriePageStyles.module.scss'

export default function KanadaPage() {

	const pageWidth = useWindowWidth()

	return (
		<MainPage>
			<section className={classes.wrapper}>

				<ParralaxCountries />
				<div className="test">
					<div className="content__body">
						<div className={classes.content__header}>
							<h1 className={classes.content__title}>Канада</h1>
							<h2 className={classes.content__subtitle}>Мы покажем удивительный мир канады</h2>
						</div>
						<div className={classes.content__article}>
							<div className={classes.content__main}>
								<div className={classes.row}>
									<div className={classes.col}>
										<h3>Еда</h3>
										{pageWidth > 1000
											? <section className={classes.content_img}>
												<SlidingSlider
													sendClass={classes.kitchenFirstImage}
													title="Традиционный гуляш"
													subtitle=""
												/>
												<SlidingSlider
													sendClass={classes.kitchenSecondImage}
													title="Канадский завтрак"
													subtitle=""
												/>
												<SlidingSlider
													sendClass={classes.kitchenThirdImage}
													title="Кленовый сироп"
													subtitle=""
												/>
											</section>
											: <section className={classes.wrapperCards}>
												<Card
													idCard={classes.firstCardItem}
													title='Традиционный гуляш'
													subtitle=''
												/>
												<Card
													idCard={classes.secondCardItem}
													title='Канадский завтрак'
													subtitle=''
												/>
												<Card
													idCard={classes.thirdCardItem}
													title='Кленовый сироп'
													subtitle=''
												/>
											</section>
										}
									</div>
								</div>
								<div className={classes.row}>
									<div className={classes.col}>
										<h3>Интересные места</h3>
										{pageWidth > 1000
											? <section className={classes.content_img}>
												<SlidingSlider
													sendClass={classes.interestingfirstImage}
													title="Ниагарский водопад"
													subtitle=""
												/>
												<SlidingSlider
													sendClass={classes.interestingSecondImage}
													title="Парламентский холм (Оттава)"
													subtitle=""
												/>
												<SlidingSlider
													sendClass={classes.interestingThirdImage}
													title="Парк Стэнли (Ванкувер)"
													subtitle=""
												/>
											</section>
											: <section className={classes.wrapperCards}>
												<Card
													idCard={classes.fourthCardItem}
													title='Ниагарский водопад'
													subtitle=''
												/>
												<Card
													idCard={classes.fifthCardItem}
													title='Парламентский холм (Оттава)'
													subtitle=''
												/>
												<Card
													idCard={classes.sixthCardItem}
													title='Парк Стэнли (Ванкувер)'
													subtitle=''
												/>
											</section>

										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</MainPage>
	)
}
