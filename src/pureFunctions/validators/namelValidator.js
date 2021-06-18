/* eslint-disable valid-typeof */
export default function nameValidator(value) {
	let errorMessage = ''
	switch (value) {
		case (typeof value) !== String:
			errorMessage = 'Поле должно содержать только буквы'
			return errorMessage
		case value.length > 2:
			errorMessage = 'Ваше имя не может быть меньше 2х символов'
			return errorMessage
		case value.length < 15:
			errorMessage = 'Ваше имя не может быть больше 15 символов'
			return errorMessage
		default:
			return errorMessage
	}
}