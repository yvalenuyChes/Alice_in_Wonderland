import AccordionBlock from '../components/accordion/accordion'
import AppLinks from '../components/footerComponents/appBlock'
import TooristsBlock from '../components/footerComponents/blockForToorists'
import InfoLinks from '../components/footerComponents/infoLinks'
import ShortInfoBlock from '../components/footerComponents/shortInfoBlock'
import classes from '../styles/footerStyles/footerStyle.module.scss'
import useWindowWidth from '../costomReactHooks/getWindowWidth'
import { forTootists, moreAboutCompany } from '../components/accordion/accordionContent'

export default function Footer() {

	const width = useWindowWidth()

	return (
		<section className={classes.footer} id="footer">
			<div className={classes.footer__container}>
				{width > 1000 ?
					<div className={classes.footer__links}>
						<TooristsBlock />
						<InfoLinks />
					</div>
					: <>
						<AccordionBlock
							title="Туристам"
							content={forTootists()}
						/>
						<AccordionBlock
							title="О компании"
							content={moreAboutCompany()}
						/>
					</>
				}
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