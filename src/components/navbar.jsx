import style from '../style/navbar.module.css';
const Navbar = () => {
	return (
		<div className={style.container}>
			<div className={style.innerCont}>
				<div className={style.logo}>
					{/* logo svg */}
					<span>
						<svg
							width='30'
							height='38'
							viewBox='0 0 23 27'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M20.7502 18.7399C20.997 18.8855 21.0721 19.209 20.9023 19.4397C19.6077 21.1986 17.7858 22.5593 15.6642 23.3437C13.3719 24.1912 10.8513 24.321 8.4747 23.714C6.09813 23.107 3.99165 21.7954 2.46649 19.973C0.941322 18.1505 0.0783558 15.9138 0.00508226 13.5934C-0.0681913 11.273 0.652114 8.99187 2.05958 7.08709C3.46705 5.1823 5.48703 3.75486 7.8211 3.01565C10.1552 2.27645 12.6795 2.26469 15.0212 2.98211C17.1887 3.64615 19.0933 4.90232 20.4966 6.58559C20.6804 6.80608 20.6245 7.1342 20.3861 7.29411L17.8494 8.99566C17.6291 9.14348 17.333 9.09205 17.1592 8.89154C16.2705 7.86625 15.0859 7.10013 13.7437 6.68893C12.2456 6.22997 10.6306 6.23749 9.13745 6.71039C7.64425 7.18329 6.35198 8.09648 5.45157 9.31506C4.55115 10.5336 4.09034 11.9929 4.13722 13.4774C4.1841 14.9619 4.73617 16.3928 5.71188 17.5587C6.68759 18.7246 8.03519 19.5637 9.55558 19.952C11.076 20.3403 12.6885 20.2572 14.155 19.7151C15.4679 19.2296 16.6014 18.3993 17.4238 17.327C17.5855 17.1161 17.8787 17.047 18.1077 17.182L20.7502 18.7399Z'
								fill='black'
							/>
							<path
								d='M9.59106 0.499999C9.59106 0.223857 9.81492 0 10.0911 0H13.2015C13.4777 0 13.7015 0.223858 13.7015 0.5V4.725H9.59106V0.499999Z'
								fill='black'
							/>
							<path
								d='M9.59106 22.275H13.7015V26.5C13.7015 26.7761 13.4777 27 13.2015 27H10.0911C9.81492 27 9.59106 26.7761 9.59106 26.5V22.275Z'
								fill='black'
							/>
						</svg>
					</span>
					Crypto Tracker
				</div>
				<div className={style.search}>
					<span>
						<svg
							width='18'
							height='20'
							viewBox='0 0 18 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13.4153 14.6291L17 18.344L13.4153 14.6291ZM15.5455 9.2997C15.5455 13.4622 12.2894 16.8366 8.2728 16.8366C4.25612 16.8366 1 13.4622 1 9.2997C1 5.13719 4.25612 1.76282 8.2728 1.76282C12.2894 1.76282 15.5455 5.13719 15.5455 9.2997Z'
								stroke='black'
								stroke-width='2'
								stroke-miterlimit='10'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</span>
					<span>
						<svg
							width='20'
							height='14'
							viewBox='0 0 20 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<line
								x1='1'
								y1='1'
								x2='19'
								y2='1'
								stroke='black'
								stroke-width='2'
								stroke-miterlimit='10'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<line
								x1='1'
								y1='7'
								x2='19'
								y2='7'
								stroke='black'
								stroke-width='2'
								stroke-miterlimit='10'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<line
								x1='1'
								y1='13'
								x2='19'
								y2='13'
								stroke='black'
								stroke-width='2'
								stroke-miterlimit='10'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
