import Head from 'next/head'
import Header from '../src/containers/Header'
import MainPage from '../layout/mainPage'
import CountrieBlock from '../src/containers/CountriesBlock'
// import OrderTicket from '../src/containers/OrderTicket'
import Advantages from '../src/containers/AdvantagesBlock'
import Footer from '../src/containers/Footer'


export default function Main() {

	// console.log(req.body)

	return (
		<MainPage>
			<Head>
				<title>Alice in Wonderland</title>
			</Head>
			<div>
				<Header />
				<CountrieBlock />
				<Advantages />
				<Footer />
			</div>
		</MainPage>
	)
}