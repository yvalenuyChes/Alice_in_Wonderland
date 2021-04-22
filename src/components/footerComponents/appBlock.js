import classes from '../../styles/footerStyles/footerStyle.module.scss'
import appleApp from '../../img/apps/apple.png'
import googleApp from '../../img/apps/play_market.png'

export default function AppLinks() {
	return (
		<div className={classes.footer__apps}>
			<h2 className={`${classes.footer__title} ${classes.footer__appTitle}`}>Скачайте наше приложение</h2>
			<div className={classes.appleApp}>
				<img src={appleApp} alt="appleApp" />
			</div>
			<div className={classes.googleApp}>
				<img src={googleApp} alt="appleApp" />
			</div>
		</div >
	)
}
