import Tabs from '../tabs/tabs'

export default function modalBody() {
	return <>
		<div className="popup__content">
			<span
			// className={"popup__close" + ' ' + "close__popup"}
			// onClick={handleClose}
			/>
			<div className="popup__title">Добро пожаловать</div>
			<div className="popup__main" />
			<Tabs />
		</div>
	</>
}