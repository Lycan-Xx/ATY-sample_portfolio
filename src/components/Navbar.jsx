import { React, useState } from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styled from 'styled-components';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavContainer>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='container'
			>
				<BrandLink
					to='home'
					smooth={true}
					duration={500}
					spy={true}
					exact='true'
					offset={-80}
				>
					Aliyu Tasiu Yusuf
				</BrandLink>

				<Hamburger onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
				</Hamburger>

				<NavMenu isOpen={isOpen}>
					{['home', 'about', 'services', 'skills', 'work', 'contact'].map((item) => (
						<NavItem key={item}>
							<NavLink
								to={item}
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
								onClick={() => setIsOpen(false)}
							>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</NavLink>
						</NavItem>
					))}
				</NavMenu>
			</motion.div>	
		</NavContainer>
	);
}

// Styled Components

const NavContainer = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1000;
	background: rgba(10, 25, 47, 0.95);
	backdrop-filter: blur(10px);
	box-shadow: 0 2px 10px rgba(0,0,0,0.1);

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		max-width: 1200px;
		margin: 0 auto;
	}
`;

const BrandLink = styled(Link)`
	color: #FFD700;
	font-size: 1.5rem;
	font-weight: 700;
	text-decoration: none;
	margin-left: 20px;
	margin-right: 20px;
	padding: 10px;
	border-radius: 5px;
	transition: all 0.3s ease;
	
	&:hover {
		color: #fff;
	}
`;

const NavMenu = styled.ul`
	display: flex;
	list-style: none;
	margin-right: 20px;
	gap: 2rem;

	@media (max-width: 768px) {
		position: fixed;
		top: 70px;
		right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
		flex-direction: column;
		background: #0A192F;
		width: calc(100vw - 70px);
		padding: 2rem;
		transition: right 0.3s ease;
		height: 100vh;
		justify-content: center;
		align-items: center;
	}
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
	color: #F8F8F8;
	cursor: pointer;
	font-weight: 500;
	transition: color 0.3s;

	&.active {
		color: #FFD700;
	}

	&:hover {
		color: #FFD700;
	}
`;

const Hamburger = styled.div`
	display: none;
	color: #fff;
	cursor: pointer;

	@media (max-width: 768px) {
		display: block;
	}
`;

export default Navbar