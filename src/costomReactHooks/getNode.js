/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"


export default function getNode(node) {
	const [documentNode, setDocumentNode] = useState('')
	useEffect(() => {
		setDocumentNode(document.querySelector(node))
		return () => setDocumentNode('')
	}, [documentNode])
	return documentNode
}