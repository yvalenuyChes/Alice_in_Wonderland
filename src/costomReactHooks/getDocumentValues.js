/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'

export function getDocumentScroll() {
	const [documentScroll, setScroll] = useState(0)
	useEffect(() => {
		setScroll(window.scrollY)
	}, [])
	return documentScroll
}

export function getNodeOffsetHight(node) {
	const [nodeOffsetHeight, setNodeOffsetHeight] = useState(0)
	useEffect(() => {
		setNodeOffsetHeight(node.offsetHeight)
	}, [])
	return nodeOffsetHeight

}