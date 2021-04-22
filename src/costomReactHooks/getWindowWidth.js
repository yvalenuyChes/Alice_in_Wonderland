import { useState, useEffect } from 'react'

function useWindowWidth() {
	const [width, setWidth] = useState(0)
	useEffect(() => {
		setWidth(window.innerWidth)
	}, [])
	return width
}

export default useWindowWidth