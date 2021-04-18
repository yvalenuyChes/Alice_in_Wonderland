/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import MainPage from "../layout/mainPage"

export default function ErrorPage() {
	return (
		<MainPage>
			<h1>Страница не найдена</h1>
			<Link href="/"><a>Вернуться</a></Link>
		</MainPage>
	)
}