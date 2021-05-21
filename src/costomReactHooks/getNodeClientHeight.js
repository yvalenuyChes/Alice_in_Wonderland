/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export function getNode(node) {
	const [documentNode, setDocumentNode] = useState('')
	useEffect(() => {
		setDocumentNode(document.querySelector(node))
	}, [])
	return documentNode
}


export function getNodeClientHeight(node) {
	const [documentNode, setDocumentNode] = useState('')
	let height = 0
	useEffect(() => {
		setDocumentNode(document.querySelector(node))
	}, [])
	height = documentNode.offsetHeight
	return height
}