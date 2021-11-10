import Head from 'next/head'
import Header from '../src/containers/Header'
import MainPage from '../layout/mainPage'
import CountrieBlock from '../src/containers/CountriesBlock'
import OrderTicket from '../src/containers/OrderTicket'
import Advantages from '../src/containers/AdvantagesBlock'
import Footer from '../src/containers/Footer'
import { isAuth } from '../actions/auth'




export default function Main() {


	return (
		<MainPage>
			<Head>
				<title>Alice in Wonderland</title>
			</Head>
				<Header />
				<CountrieBlock />
				<div>
				{isAuth() ? <OrderTicket/> : null}
				</div>
				<Advantages />
				<Footer />
		</MainPage>
	)
}