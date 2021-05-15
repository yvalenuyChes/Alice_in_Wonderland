/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Provider } from 'react-redux'
import { useStore } from '../src/redux/rootReducer'
import '../src/styles/_style.scss'
import '../src/styles/scene.css'
import '../src/styles/countrieBlockStyles/mainContentImg.css'
import '../src/styles/footerStyles/socialLinks.css'
import '../src/styles/inputStyles/inputStyles.css'
import '../src/styles/slider/sliderToggleButtons.css'
import '../src/styles/tabsStyles/tabStyle.css'
import '../src/styles/accordionStyles/accordionStyles.css'



export default function MyApp({ Component, pageProps }) {

	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}