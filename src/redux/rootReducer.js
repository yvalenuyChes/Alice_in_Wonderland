/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'

let store

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

function initStore(preloadedState = initialState) {
	return createStore(
		rootReduser,
		preloadedState,
		applyMiddleware()
	)
}

export const initializeStore = (preloadedState) => {
	let _store = store ?? initStore(preloadedState)

	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		})
		// Reset the current store
		store = undefined
	}

	if (typeof window === 'undefined') return _store

	if (!store) store = _store

	return _store
}

export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}

