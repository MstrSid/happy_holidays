import Container from "../Container/Container";
import style from './Footer.module.css';
import {ReactComponent as VKIcon} from "../../img/vk.svg";
import {ReactComponent as TelegaIcon} from "../../img/telegram.svg";
import {ReactComponent as PinIcon} from "../../img/pinterest.svg";
import {ReactComponent as StumIcon} from "../../img/stumbleupon.svg";

const Footer = () => (
	<footer className={style.footer}>
		<Container>
			<div className={style.wrapper}>
				<div className={style.contacts}>
					<p>Design: <a href='https://t.me/Mrshamallowww'>Anastasia
						Ilina</a></p>
					<p>Сoder: <a href='https://t.me/sid_kos'>Yauhen Kos</a></p>
					<p>© HBCard, 2022</p>
				</div>
				<ul className={style.social}>
					<li className={style.item}>
						<a href="https://vk.com/methed"
						   className={style.link}>
							<VKIcon/>
						</a>
					</li>
					<li className={style.item}>
						<a href="https://t.me/methed_chat_frontend"
						   className={style.link}>
							<TelegaIcon/>
						</a>
					</li>
					<li className={style.item}>
						<a href="https://pinterest.com"
						   className={style.link}>
							<PinIcon/>
						</a>
					</li>
					<li className={style.item}>
						<a href="https://stumbler.com"
						   className={style.link}>
							<StumIcon/>
						</a>
					</li>
				</ul>
			</div>
		</Container>
	</footer>
);

export default Footer;