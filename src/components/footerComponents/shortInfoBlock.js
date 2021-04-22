import classes from '../../styles/footerStyles/footerShortInfoStyle.module.scss'

export default function ShortInfoBlock() {
	return (
		<div className={classes.footer__shortInfoBlock}>
			<div className={classes.footer__logo} />
			<div className={classes.footer__text}>
				<h4> <span>Alice in Wonderland</span> — туристическая компания, <br /> которая сделает всё максимально быстро, <br /> удобно и качественно!</h4>
				<p>Наш офис находится по адресу: Г. Санкт-Петербург улица Бессовая, дом 13 корпус 6</p>
				<div className={classes.footer__telephone}>
					<h3>+7 911 911 11 11</h3>
					<h3>+7 922 922 22 22</h3>
				</div>
			</div>
			<div className={classes.footer__bottom}>
				<h3 className={classes.copyraiting}>2019-2021 © Alise in Wonderland</h3>
				<div className={classes.footer__socialLinks}>
					<div className={`${classes.vk} ${classes.socialLink}`}>
						<a href="##" className="socialLink-icon"><i className="fab fa-vk i" /></a>
					</div>
					<div className={`${classes.twitter} ${classes.socialLink}`}>
						<a href="##" className="socialLink-icon"><i className="fa-twitter fab i" /></a>
					</div>
					<div className={`${classes.insta} ${classes.sociaLlink}`}>
						<a href="##" className="socialLink-icon"><i className="fab fa-instagram i" /></a>
					</div>
				</div>
			</div>
		</div>
	)
}
