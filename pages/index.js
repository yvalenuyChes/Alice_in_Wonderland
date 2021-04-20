import Head from 'next/head'
import Header from '../src/containers/Header'
import MainPage from '../layout/mainPage'
import CountrieBlock from '../src/containers/CountriesBlock'
import OrderTicket from '../src/containers/OrderTicket'
import Advantages from '../src/containers/AdvantagesBlock'
import Footer from '../src/containers/Footer'


export default function Hello() {

	return (
		<MainPage>
			<Head>
				<title>Alice in Wonderland</title>
			</Head>
			<div>
				<Header />
				<CountrieBlock />
				<OrderTicket />
				<Advantages />
				<Footer />
			</div>
		</MainPage>
	)
}