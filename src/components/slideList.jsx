import { useEffect, useState } from 'react';
import style from '../style/body.module.css';
import image1 from '../images/Image1.png';
import image2 from '../images/Image2.png';
import image3 from '../images/Image3.png';

const SlideList = ({ width }) => {
	var data =
		width <= 900
			? [
					{
						title: 'Portfolio 🔥',
						desc: 'Track your trades in one place, not all over the place',
						img: image2,
					},
			  ]
			: [
					{ title: 'Take a quiz!', desc: 'Learn and earn $CKB', img: image1 },
					{
						title: 'Portfolio 🔥',
						desc: 'Track your trades in one place, not all over the place',
						img: image2,
					},
					{
						title: 'Portfolio',
						desc: 'Track your trades in one place, not all over the place',
						img: image3,
					},
			  ];

	const [slideList, setSlideList] = useState(data);
	useEffect(() => {
		setSlideList(data);
	}, [width]);

	return (
		<div className={style.listCont}>
			{width > 900 && (
				<svg
					style={{ position: 'absolute', top: '40%', left: '-30px' }}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle
						cx='12'
						cy='12'
						r='12'
						transform='rotate(180 12 12)'
						fill='#A8B0C1'
					/>
					<path
						d='M14 16.5L9.5 12L14 7.5'
						stroke='white'
						strokeWidth='1.3'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)}

			{slideList.map((item, index) => {
				return (
					<div key={index} className={style.listContItem}>
						<div className={style.listItemImg}>
							<img src={item.img} alt='' />
						</div>
						<div className={style.listItemDesc}>
							<p style={{ marginBottom: '0.5rem' }}>{item.title}</p>
							<p>{item.desc}</p>
						</div>
					</div>
				);
			})}
			{width > 900 && (
				<svg
					style={{
						position: 'absolute',
						top: '40%',
						right: '-30px',
						transform: 'rotateY(180deg)',
					}}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle
						cx='12'
						cy='12'
						r='12'
						transform='rotate(180 12 12)'
						fill='#A8B0C1'
					/>
					<path
						d='M14 16.5L9.5 12L14 7.5'
						stroke='white'
						strokeWidth='1.3'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)}
		</div>
	);
};

export default SlideList;
