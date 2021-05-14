
const initialState = {
	popupOpen: false
}

export default function rootReduser(state = initialState, action) {

	switch (action.type) {
		case 'OPEN_MODAL_WINDOW':
			return {
				popupOpen: true
			}
		case 'CLOSE_MODAL_WINDOW':
			return {
				popupOpen: false
			}
		default:
			return state
	}
}

