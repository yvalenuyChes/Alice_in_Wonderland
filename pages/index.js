import Head from 'next/head'
import Header from '../components/header'
import MainPage from '../layout/mainPage'

export default function Hello() {

	return (
		<MainPage>
			<Head>
				<title>Alice in Wonderland</title>
			</Head>
			<div>
				<Header />
				<p className="paragraf">Halloooooo</p>
			</div>
		</MainPage>
	)
}