/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import classNames from 'classnames'
import { useState } from 'react'

export default function InputSlider(
	{
		label,
		type,
		name,
		inputMode,
		value,
		onChange
	}
) {

	// const [valueInput, changeValue] = useState(value)
	const [isFocus, changeFocus] = useState(false)

	// const onChange = event => {
	// 	changeValue(event.target.value)
	// }

	const toggleOnFocusInput = classNames({
		'input__box-order-ticket': true,
		'focus-for-order': isFocus || value !== ''
	})

	return (
		<>
			<div
				className={toggleOnFocusInput}
			>
				<label className="label-order-ticket" htmlFor={name}> {label} </label>
				<input
					inputMode={inputMode}
					id={name}
					name={name}
					onChange={onChange}
					value={value}
					onFocus={() => changeFocus(prev => !isFocus)}
					onBlur={() => changeFocus(prev => !isFocus)}
					className="input-order-ticket"
					type={type}
					required
				/>
			</div>
		</>
	)
}