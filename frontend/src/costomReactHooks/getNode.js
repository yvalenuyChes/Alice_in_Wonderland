/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"


export default function getNode(selectionNode, node) {
	const [documentNode, setDocumentNode] = useState('')
	useEffect(() => {
		const selector = document.querySelector(selectionNode)
		setDocumentNode(selector.querySelector(node))
		return () => setDocumentNode('')
	}, [documentNode])
	return documentNode
}