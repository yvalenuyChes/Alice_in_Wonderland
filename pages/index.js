import Head from 'next/head'
import Header from '../src/containers/Header'
import MainPage from '../layout/mainPage'
import CountrieBlock from '../src/containers/CountriesBlock'

export default function Hello() {

	return (
		<MainPage>
			<Head>
				<title>Alice in Wonderland</title>
			</Head>
			<div>
				<Header />
				<CountrieBlock />
			</div>
		</MainPage>
	)
}