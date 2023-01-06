import { useEffect, useState } from 'react';
import style from '../style/cryptoList.module.css';
import CryptoCurrencyList from './cryptoCurrencyList';
const CryptoList = ({ width }) => {
	const [filterList, setFilterList] = useState([
		{ title: 'Favourites', star: 1 },
		{ title: 'CryptoCurrencies', star: 0 },
		{ title: 'DeFi', star: 0 },
		{ title: 'NFTs & Collectibles', star: 0 },
	]);

	const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	const [cryptoCurrency, setCryptoCurrency] = useState([]);

	const [page, setPage] = useState(1);
	const [perPage, setPerpage] = useState(10);
	useEffect(() => {
		fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=24h%2C7d`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCryptoCurrency(data);
			});
	}, [page, perPage]);

	return (
		<div className={style.container}>
			<p className={style.title}>Top 100 Cryptocurrencies by Market Cap</p>
			{width > 900 && (
				<div className={style.filterList}>
					<div>
						{filterList.map((item, index) => {
							return (
								<p key={index} style={{ color: index == 1 ? '#3861FB' : '' }}>
									{item.star == 1 && (
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
									)}{' '}
									{item.title}
								</p>
							);
						})}
					</div>
					<div>
						<p>
							<label htmlFor='rows'>Show Rows</label>{' '}
							<input
								type='number'
								name='rows'
								id='rows'
								defaultValue={10}
								onChange={(e) => setPerpage(e.target.value)}
							/>
						</p>
					</div>
				</div>
			)}

			<CryptoCurrencyList
				width={width}
				cryptoCurrency={cryptoCurrency}
				perPage={perPage}
				setPerpage={setPerpage}
			/>
			<div className={style.pageNums}>
				<div>
					<span
						onClick={() => {
							if (page > 1) setPage(page - 1);
						}}
						style={{ backgroundColor: page > 1 ? '#fff' : '#919EAB' }}
					>
						<svg
							width='9'
							height='12'
							viewBox='0 0 9 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8.15997 1.41L3.57997 6L8.15997 10.59L6.74997 12L0.749973 6L6.74997 0L8.15997 1.41Z'
								fill='#C4CDD5'
							/>
						</svg>
					</span>

					<span style={{ border: '1px solid #0052FE', color: '#0052FE' }}>
						{page}
					</span>
					{page < 10 && (
						<span
							onClick={() => {
								setPage(page + 1);
							}}
						>
							{page + 1}
						</span>
					)}
					{page < 9 && (
						<span
							onClick={() => {
								setPage(page + 2);
							}}
						>
							{page + 2}
						</span>
					)}
					{page < 6 && <span>{'...'}</span>}
					{page < 7 && (
						<span
							onClick={() => {
								setPage(9);
							}}
						>
							{9}
						</span>
					)}
					{page < 8 && (
						<span
							onClick={() => {
								setPage(10);
							}}
						>
							{10}
						</span>
					)}
					<span
						onClick={() => {
							if (page < 10) setPage(page + 1);
						}}
						style={{ backgroundColor: page <= 9 ? '#fff' : '#919EAB' }}
					>
						<svg
							style={{ transform: 'rotateY(180deg)' }}
							width='9'
							height='12'
							viewBox='0 0 9 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8.15997 1.41L3.57997 6L8.15997 10.59L6.74997 12L0.749973 6L6.74997 0L8.15997 1.41Z'
								fill='#C4CDD5'
							/>
						</svg>
					</span>
				</div>
			</div>
		</div>
	);
};

export default CryptoList;
