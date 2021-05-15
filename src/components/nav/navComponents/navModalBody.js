/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux'
import Tabs from '../../tabs/tabs'
import classes from '../../../styles/modalBody/modalBody.module.scss'

function ModalBody() {

	const dispatch = useDispatch()

	return (
		<>
			<div
				className={classes.popup__body}
			>
				<div
					className={classes.popup__content}
				>
					<span
						role="button"
						className={classes.popup__close}
						onClick={() => dispatch({ type: 'CLOSE_MODAL_WINDOW' })}
					/>
					<div className={classes.popup__title}>Добро пожаловать</div>
					<div className={classes.popup__main} />
					<Tabs />
				</div>
			</div>
		</>
	)


}
export default ModalBody