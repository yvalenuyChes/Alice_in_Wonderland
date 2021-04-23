/* eslint-disable import/prefer-default-export */


export function modalBodyMarkup({ content, title }) {
	return (
		<div className=" popup__body">
			<div className="popup__content">
				<button
					type="button"
					className="popup__close close__popup"
				// onClick={handleOpen}
				/>
				<div className="popup__title">{title}</div>
				<div className="popup__main" />
				{content}
			</div>
		</div>)
}