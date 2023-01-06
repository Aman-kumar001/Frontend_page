import SlideList from './slideList';
import style from '../style/body.module.css';
import CryptoList from './cryptoList';

const Body = ({ width }) => {
	return (
		<div className={style.container}>
			<SlideList width={width} />
			<CryptoList width={width} />
		</div>
	);
};

export default Body;
