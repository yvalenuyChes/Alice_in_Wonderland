import Nav from '../containers/nav'

// eslint-disable-next-line react/prop-types
export default function MainPage({ children }) {
	return (
		<>
			<Nav />
			<main>
				{children}
			</main>
		</>
	)
}
