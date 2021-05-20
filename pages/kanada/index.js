import MainPage from "../../layout/mainPage";
import useWindowWidth from '../../src/costomReactHooks/getWindowWidth'

export default function KanadaPage() {

	const pageWidth = useWindowWidth

	return (
		<MainPage>
			<section className={classes.wrapper}>

				<Parralax_Kanada />
				<div className={classes.content}>
					<div className={classes.content__body}>
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
												<Kanada_img
													sendClass={classes.kitchenFirstImage}
													title="Традиционный гуляш"
													subtitle="Канадский вариант гуляша – это прекрасный выбор мясного блюда, которое отлично украсит любой гарнир: будь ли это картошка, или же банальные макароны. Гуляш по-канадски готовится очень просто и довольно быстро."
												/>
												<Kanada_img
													sendClass={classes.kitchenSecondImage}
													title="Канадский завтрак"
													subtitle="Этот традиционный канадский завтрак встречается во всех ценовых категориях, от забегаловок до элитных ресторанов. Качество приготовления, разумеется, зависит от категории ресторана, но не его базовый набор."
												/>
												<Kanada_img
													sendClass={classes.kitchenThirdImage}
													title="Кленовый сироп"
													subtitle="Кленовый сироп получил широкое применение в национальной американской и канадской кухне. Здесь его подают в качестве сладкого дополнения к мороженому, оладьям, блинам и вафлям."
												/>
											</section>
											: <section className={classes.wrapperCards}>
												<KanadaCard
													idCard={classes.firstCardItem}
													title={'Традиционный гуляш'}
													subtitle={'Канадский вариант гуляша – это прекрасный выбор мясного блюда, которое отлично украсит любой гарнир'}
												/>
												<KanadaCard
													idCard={classes.secondCardItem}
													title={'Канадский завтрак'}
													subtitle={'Этот традиционный канадский завтрак встречается во всех ценовых категориях, от забегаловок до элитных ресторанов. Качество приготовления, разумеется, зависит от категории ресторана, но не его базовый набор.'}
												/>
												<KanadaCard
													idCard={classes.thirdCardItem}
													title={'Кленовый сироп'}
													subtitle={'Кленовый сироп получил широкое применение в национальной американской и канадской кухне. Здесь его подают в качестве сладкого дополнения к мороженому, оладьям, блинам и вафлям.'}
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
												<Kanada_img
													sendClass={classes.interestingfirstImage}
													title="Ниагарский водопад"
													subtitle="Находится на границе двух стран: Канады и США. Та часть, которая расположена на канадской территории имеет форму подковы. Часто этот водопад так и называют. Его считают самым мощным в Северной Америке."
												/>
												<Kanada_img
													sendClass={classes.interestingSecondImage}
													title="Парламентский холм (Оттава)"
													subtitle=".Находится на южном берегу реки в Оттаве и является сердцем города. Это символ национального возрождения. Представляет собой архитектурный комплекс, в котором заседают высшие органы власти страны."
												/>
												<Kanada_img
													sendClass={classes.interestingThirdImage}
													title="Парк Стэнли (Ванкувер)"
													subtitle="Расположен на полуострове. Омывается водами Английского залива, Ванкуверской гавани. Парк граничит с деловым центром Ванкувера. Открыт он был в 1888 году, назван в честь 6-го генерал-губернатора Канады."
												/>
											</section>
											: <section className={classes.wrapperCards}>
												<KanadaCard
													idCard={classes.fourthCardItem}
													title={'Ниагарский водопад'}
													subtitle={'Находится на границе двух стран: Канады и США. Та часть, которая расположена на канадской территории имеет форму подковы. Часто этот водопад так и называют. Его считают самым мощным в Северной Америке.'}
												/>
												<KanadaCard
													idCard={classes.fifthCardItem}
													title={'Парламентский холм (Оттава)'}
													subtitle={'Находится на южном берегу реки в Оттаве и является сердцем города. Это символ национального возрождения. Представляет собой архитектурный комплекс, в котором заседают высшие органы власти страны.'}
												/>
												<KanadaCard
													idCard={classes.sixthCardItem}
													title={'Парк Стэнли (Ванкувер)'}
													subtitle={'Расположен на полуострове. Омывается водами Английского залива, Ванкуверской гавани. Парк граничит с деловым центром Ванкувера. Открыт он был в 1888 году, назван в честь 6-го генерал-губернатора Канады.'}
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
