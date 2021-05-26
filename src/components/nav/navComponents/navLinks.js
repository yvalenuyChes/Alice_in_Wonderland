/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from 'react-redux'
import Link from 'next/link'

export function MainPageTransitions() {

	const dispatch = useDispatch()

	return (
		<ul className="navMobileList">
			<li
				className="navMobileLink"
				onClick={() => dispatch({ type: 'TOGGLE_NAV' })}>
				<Link
					href='/#header'>
					<a>Главная</a >
				</Link>
			</li>
			<li
				className="navMobileLink"
				onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
			>
				<Link
					href='/#toor_order'>
					<a>Заказ билета</a >
				</Link>
			</li>
			<li
				className="navMobileLink"
				onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
			>
				<Link
					href='/#advantages'>
					<a>Преимущества фирмы</a >
				</Link>
			</li>
			<li
				className="navMobileLink"
				onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
			>
				<Link
					href='/#footer'>
					<a>Дополнительная информация</a >
				</Link>
			</li>
		</ul>

	)
}

export function KanadaPageTransitions() {

	const dispatch = useDispatch()

	return (
		<ul>
			<li
				className="navMobileLink"
				onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
			>
				<Link
					href='/kanada/'>
					<a>Канада</a >
				</Link>
			</li>
			<li
				className="navMobileLink"
				onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
			>
				<Link
					href='/kanada/#kanada_kitchen'>
					<a>Кухня</a >
				</Link>
			</li>
			<li
				className="navMobileLink"
				onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
			>
				<Link
					href='/kanada/#kanada_interesting_places'>
					<a>Достопримечательности</a >
				</Link>
			</li>
		</ul>
	)
}