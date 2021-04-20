import AppLinks from '../components/footerComponents/appBlock'
import TooristsBlock from '../components/footerComponents/blockForToorists'
import InfoLinks from '../components/footerComponents/infoLinks'
import ShortInfoBlock from '../components/footerComponents/shortInfoBlock'
import classes from '../styles/footerStyles/footerStyle.module.scss'

export default function Footer() {
	return (
		<section className={classes.footer}>
			<div className={classes.footer__container}>
				<div className={classes.footer__links}>
					<TooristsBlock />
					<InfoLinks />
				</div>
				<AppLinks />
				<ShortInfoBlock />
			</div>
		</section>
	)
}