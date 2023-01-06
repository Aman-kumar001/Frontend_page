import { click } from '@testing-library/user-event/dist/click';
import style from '../style/mobileview.module.css';
const MobileView = ({ setClicked, clickedData }) => {
	return (
		<div className={style.cont}>
			<div className={style.content}>
				<p className={style.title}>
					<p>
						<img src={clickedData.image} alt='' height='20' />{' '}
						{' ' + clickedData.name}{' '}
					</p>
					<p
						onClick={() => {
							setClicked(false);
						}}
					>
						<svg
							width='15'
							height='15'
							viewBox='0 0 15 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13.9226 12.6353L8.75535 7.45745L13.8946 2.30795C14.3137 1.88778 14.3137 1.20667 13.8946 0.786726C13.4753 0.366786 12.7958 0.366786 12.3764 0.786726L7.23715 5.93623L2.0981 0.786726C1.67877 0.366786 0.999239 0.366786 0.579902 0.786726C0.160566 1.2069 0.160566 1.88801 0.579902 2.30795L5.71895 7.45745L0.551197 12.6353C0.13186 13.0554 0.13186 13.7363 0.551197 14.1565C0.760865 14.3666 1.03552 14.4715 1.31041 14.4715C1.5853 14.4715 1.85996 14.3666 2.06963 14.1565L7.23715 8.97867L12.4045 14.1565C12.6141 14.3666 12.8888 14.4715 13.1637 14.4715C13.4386 14.4715 13.7132 14.3666 13.9229 14.1565C14.3418 13.7365 14.3418 13.0554 13.9226 12.6353Z'
								fill='#AAAAAA'
							/>
						</svg>
					</p>
				</p>

				<div className={style.details}>
					<div>
						<p>PRICE</p>
						<p>${clickedData.current_price}</p>
					</div>
					<div>
						<p>24H</p>
						<p
							style={{
								color:
									clickedData.price_change_percentage_24h_in_currency > 0
										? '#16C784'
										: '#EA3943',
								display: 'flex',
								columnGap: '0.2rem',
							}}
						>
							{clickedData.price_change_percentage_24h_in_currency > 0 ? (
								<svg
									width='10'
									height='6'
									viewBox='0 0 10 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.32615 6H0.67383C0.0747082 6 -0.22532 5.23363 0.198308 4.78543L4.5245 0.20835C4.78707 -0.0694504 5.21293 -0.0694504 5.4755 0.20835L9.80164 4.78543C10.2254 5.23363 9.92529 6 9.32615 6Z'
										fill='#16C784'
									/>
								</svg>
							) : (
								<svg
									width='10'
									height='6'
									viewBox='0 0 10 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.32615 0H0.67383C0.0747082 0 -0.22532 0.766372 0.198308 1.21457L4.5245 5.79165C4.78707 6.06945 5.21293 6.06945 5.4755 5.79165L9.80164 1.21457C10.2254 0.766372 9.92529 0 9.32615 0Z'
										fill='#EA3943'
									/>
								</svg>
							)}{' '}
							{Math.abs(
								clickedData.price_change_percentage_24h_in_currency.toFixed(2)
							)}
							%
						</p>
					</div>
					<div>
						<p>7D</p>
						<p
							style={{
								color:
									clickedData.price_change_percentage_7d_in_currency > 0
										? '#16C784'
										: '#EA3943',
								display: 'flex',
								columnGap: '0.2rem',
							}}
						>
							{clickedData.price_change_percentage_7d_in_currency > 0 ? (
								<svg
									width='10'
									height='6'
									viewBox='0 0 10 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.32615 6H0.67383C0.0747082 6 -0.22532 5.23363 0.198308 4.78543L4.5245 0.20835C4.78707 -0.0694504 5.21293 -0.0694504 5.4755 0.20835L9.80164 4.78543C10.2254 5.23363 9.92529 6 9.32615 6Z'
										fill='#16C784'
									/>
								</svg>
							) : (
								<svg
									width='10'
									height='6'
									viewBox='0 0 10 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.32615 0H0.67383C0.0747082 0 -0.22532 0.766372 0.198308 1.21457L4.5245 5.79165C4.78707 6.06945 5.21293 6.06945 5.4755 5.79165L9.80164 1.21457C10.2254 0.766372 9.92529 0 9.32615 0Z'
										fill='#EA3943'
									/>
								</svg>
							)}{' '}
							{Math.abs(
								clickedData.price_change_percentage_7d_in_currency.toFixed(2)
							)}
							%
						</p>
					</div>
				</div>
				<div>
					<p>MARKET CAP</p>
					<p>${clickedData.market_cap}</p>
				</div>
				<div>
					<p>VOLUME</p>
					<p>
						<span>${clickedData.total_volume}</span>
						<span style={{ color: '#00000050' }}>
							{' '}
							{'(932,071'} {clickedData.symbol.toUpperCase()}
							{')'}
						</span>
					</p>
				</div>
				<div className={style.circulating_supply}>
					<p>CIRCULATING SUPPLY</p>
					<p>
						<div>
							{clickedData.circulating_supply?.toFixed(2)}{' '}
							{clickedData.symbol.toUpperCase()}
						</div>
						<br />
						<div>
							<div className={style.lineBar} style={{ justifyContent: 'left' }}>
								<div
									style={{
										width: `${
											(100 * clickedData.circulating_supply) /
											clickedData.total_supply
										}%`,
									}}
								></div>
							</div>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};

export default MobileView;
