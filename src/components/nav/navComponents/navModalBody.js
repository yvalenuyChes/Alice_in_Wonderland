/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Tabs from '../../tabs/tabs'

function ModalBody() {
	return (
		<>
			<div
			// className={classes.popup__body}
			>
				<div
				// className={classes.popup__content}
				>
					<span
						role="button"
						className="popup__close"
					// onClick={toggleModalWindow}
					/>
					<div className="popup__title">Добро пожаловать</div>
					<div className="popup__main" />
					<Tabs />
				</div>
			</div>
		</>
	)


}
export default ModalBody