import { useState } from 'react';
import style from '../style/cryptoList.module.css';
import MobileView from './mobileView';
const CryptoCurrencyList = ({ width, cryptoCurrency, setPerpage }) => {
	const [clicked, setClicked] = useState(false);
	const [clickedData, setClickedData] = useState({});
	return (
		<div className={style.listComp}>
			<table>
				<tr>
					<th></th>
					{width > 900 && <th>#</th>}
					<th>NAME</th>
					<th>PRICE</th>
					<th>
						<div>
							24H{' '}
							<svg
								width='9'
								height='12'
								viewBox='0 0 9 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M4.0679 11.8213C4.30654 12.0596 4.69346 12.0596 4.9321 11.8213L8.82102 7.93819C9.05966 7.6999 9.05966 7.31357 8.82102 7.07528C8.58237 6.83699 8.19546 6.83699 7.95681 7.07528L5.11108 9.91675L5.11108 -4.63749e-08L3.88892 -6.09491e-08L3.88892 9.91675L1.04319 7.07528C0.804543 6.83699 0.417625 6.83699 0.178983 7.07528C-0.0596609 7.31357 -0.0596609 7.6999 0.178983 7.93819L4.0679 11.8213Z'
									fill='#0052FE'
								/>
							</svg>
						</div>
					</th>
					{width > 900 && <th>7D</th>}
					{width > 900 && <th>MARKET CAP</th>}
					{width > 900 && <th>VOLUME{`(24H)`}</th>}
					{width > 900 && <th>CIRCULATING SUPPLY</th>}
					{width > 900 && <th></th>}
				</tr>
				{cryptoCurrency.map((item) => {
					return (
						<tr
							key={item.market_cap_rank}
							onClick={() => {
								if (width <= 900) {
									setClickedData(item);
									setClicked(true);
								}
							}}
						>
							<td>
								<svg
									width='15'
									height='14'
									viewBox='0 0 15 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M7.5 1.5L9.34153 5.46535L13.6819 5.99139L10.4797 8.96815L11.3206 13.2586L7.5 11.133L3.6794 13.2586L4.52034 8.96815L1.31813 5.99139L5.65847 5.46535L7.5 1.5Z'
										stroke='#ABB4C2'
										stroke-width='1.2'
										stroke-linejoin='round'
									/>
								</svg>
							</td>
							{/* name here */}
							{width > 900 && <td>{item.market_cap_rank}</td>}
							<td>
								<div style={{ justifyContent: 'left' }}>
									<img src={item.image} alt='' height='20' /> {' ' + item.name}{' '}
									<span style={{ color: '#808A9D' }}>
										{item.symbol.toUpperCase()}
									</span>
								</div>
							</td>

							{/* current price */}
							<td>${item.current_price}</td>

							{/* 24h price change */}
							<td
								style={{
									color:
										item.price_change_percentage_24h_in_currency > 0
											? '#16C784'
											: '#EA3943',
								}}
							>
								<div>
									{item.price_change_percentage_24h_in_currency > 0 ? (
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
										item.price_change_percentage_24h_in_currency.toFixed(2)
									)}
									%
								</div>
							</td>

							{/* 7d price change */}
							{width > 900 && (
								<td
									style={{
										color:
											item.price_change_percentage_7d_in_currency > 0
												? '#16C784'
												: '#EA3943',
									}}
								>
									<div>
										{item.price_change_percentage_7d_in_currency > 0 ? (
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
											item.price_change_percentage_7d_in_currency.toFixed(2)
										)}
										%
									</div>
								</td>
							)}

							{/* market cap */}
							{width > 900 && <td>${item.market_cap}</td>}

							{/* total volume */}
							{width > 900 && (
								<td>
									${item.total_volume}
									<br />
									<span style={{ color: '#00000050', fontSize: '0.7rem' }}>
										932,071 {item.symbol.toUpperCase()}
									</span>
								</td>
							)}

							{/* circulating_supply */}
							{width > 900 && (
								<td>
									{item.circulating_supply?.toFixed(2)}{' '}
									{item.symbol.toUpperCase()}
									<br />
									<div
										className={style.lineBar}
										style={{ justifyContent: 'left' }}
									>
										<div
											style={{
												width: `${
													(100 * item.circulating_supply) / item.total_supply
												}%`,
											}}
										></div>
									</div>
								</td>
							)}
							{width > 900 && (
								<td>
									<svg
										width='3'
										height='14'
										viewBox='0 0 3 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle cx='1.5' cy='1.5' r='1.5' fill='black' />
										<circle cx='1.5' cy='7.5' r='1.5' fill='black' />
										<circle cx='1.5' cy='12.5' r='1.5' fill='black' />
									</svg>
								</td>
							)}
						</tr>
					);
				})}
			</table>
			{clicked && width <= 900 && (
				<MobileView clickedData={clickedData} setClicked={setClicked} />
			)}
		</div>
	);
};

export default CryptoCurrencyList;
