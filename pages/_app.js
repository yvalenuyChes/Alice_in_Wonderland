/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReduser from '../src/redux/rootReducer'
import '../src/styles/_style.scss'
import '../src/styles/scene.css'
import '../src/styles/countrieBlockStyles/mainContentImg.css'
import '../src/styles/footerStyles/socialLinks.css'
import '../src/styles/inputStyles/inputStyles.css'
import '../src/styles/slider/sliderToggleButtons.css'
import '../src/styles/modalBody/modalBody.css'
import '../src/styles/tabsStyles/tabStyle.css'
import '../src/styles/accordionStyles/accordionStyles.css'

const store = createStore(rootReduser)

export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}