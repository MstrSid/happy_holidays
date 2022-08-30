import style from './Card.module.css';
import Image from "./Image/Image";
import Felicitation from "./Felicitation/Felicitation";

const Card = () => (
	<div className={style.card}>
		<div className={style.wrapper}>
			<div className={style.image}>
				<Image/>
				<Felicitation/>
			</div>
		</div>
	</div>
);

export default Card;