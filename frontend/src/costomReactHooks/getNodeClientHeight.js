/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"


export default function getNodeClientHeight(node) {
	const [documentNode, setDocumentNode] = useState('')
	let height = 0
	useEffect(() => {
		setDocumentNode(document.querySelector(node))
	}, [documentNode])
	height = documentNode.offsetHeight
	return height
}