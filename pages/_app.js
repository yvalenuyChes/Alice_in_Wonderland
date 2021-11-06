/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Provider } from 'react-redux'
import { useStore } from '../src/redux/rootReducer'
import { getSession } from "../setSession/get-session"
import '../src/styles/_style.scss'
import '../src/styles/scene.css'
import '../src/styles/countrieBlockStyles/mainContentImg.css'
import '../src/styles/footerStyles/socialLinks.css'
import '../src/styles/inputStyles/inputStyles.css'
import '../src/styles/slider/sliderToggleButtons.css'
import '../src/styles/tabsStyles/tabStyle.css'
import '../src/styles/accordionStyles/accordionStyles.css'
import '../src/styles/navStyles/stylesForPhones.css'
import '../src/styles/navStyles/navStylesForPhonesBody.css'
import '../src/styles/countrieBlockStyles/countrieBlock_container.css'
import '../src/styles/countrieBlockStyles/countrieBlockGallery.css'
import '../src/styles/countriesStyles/kanadaParrapalax/kanadaParrapalax.css'
import '../src/styles/countriesStyles/cardStyles/cardStyles.css'
import '../src/styles/buttonToTopStyles/buttonToTop.css'
import '../src/styles/personal_officeStyles/personal_office.css'



export async function getServerSideProps({ req, res }) {
	const data = await getSession(req, res)
	console.log(data)
	return {
		props: {
			data
		}
	}
}


export default function MyApp({ Component, pageProps, data }) {



	console.log(data)

	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}