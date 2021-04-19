/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../src/styles/nullstyle.scss'
// eslint-disable-next-line import/no-unresolved
import '../src/styles/scene.css'


export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}