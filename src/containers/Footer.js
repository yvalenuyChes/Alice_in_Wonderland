import AppLinks from '../components/footerComponents/appBlock'
import TooristsBlock from '../components/footerComponents/blockForToorists'
import InfoLinks from '../components/footerComponents/infoLinks'
import ShortInfoBlock from '../components/footerComponents/shortInfoBlock'
import classes from '../styles/footerStyles/footerStyle.module.scss'
// import useWindowWidth from '../costomReactHooks/getWindowWidth'

export default function Footer() {

	// const width = useGetWindowWidth()

	return (
		<section className={classes.footer}>
			<div className={classes.footer__container}>
				<div className={classes.footer__links}>
					<TooristsBlock />
					<InfoLinks />
				</div>
				<div className={classes.footer__appLinks}>
					<AppLinks />
				</div>
				<div className={classes.footer__shortInfo}>
					<ShortInfoBlock />
				</div>
			</div>
		</section>
	)
}