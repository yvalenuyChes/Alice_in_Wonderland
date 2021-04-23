/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import classNames from 'classnames'
import { useState } from 'react'

export default function InputSlider(
	{
		label,
		type,
	}
) {

	const [value, changeValue] = useState('')
	const [isFocus, changeFocus] = useState(false)

	const onChange = event => {
		changeValue(event.target.value)
	}

	const toggleOnFocusInput = classNames({
		'input__box-order-ticket': true,
		'focus-for-order': isFocus || value !== ''
	})

	return (
		<>
			<div
				className={toggleOnFocusInput}
			>
				<label className="label-order-ticket"> {label} </label>
				<input
					onChange={onChange}
					value={value}
					onFocus={() => changeFocus(prev => !isFocus)}
					onBlur={() => changeFocus(prev => !isFocus)}
					className="input-order-ticket"
					type={type}
					required="true"
				/>
			</div>
		</>
	)
}