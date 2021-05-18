/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import NavForPhonesBody from './navForPhonesBody'



export default function NavForPhones() {

	const navOpen = useSelector(state => state.navOpen)
	const dispatch = useDispatch()


	const classesForButton = classNames({
		nav__button: true,
		active: navOpen
	})

	useEffect(() => {
		if (navOpen) {
			document.body.classList.add('bodyLock')
		} else {
			document.body.classList.remove('bodyLock')
		}
	}, [navOpen])

	return (
		<>
			<div
				className={classesForButton}
				onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
				role="button"
				tabIndex={0}
			>
				<span />
			</div>
			<NavForPhonesBody />
		</>
	)
}