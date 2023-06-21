import React, { useEffect } from "react";
import Logo from "../img/logo.png";
import {
	FaDelicious,
	FaShoppingCart,
	FaWallet,
	FaChartLine,
	FaRegClock,
	FaCog,
	FaSignOutAlt,
} from "react-icons/fa";

const Menu = () => {
	useEffect(() => {
		const mainMenuLi = document
			.getElementById("mainMenu")
			.querySelectorAll("li");

		function changeActive() {
			mainMenuLi.forEach((n) => n.classList.remove("active"));
			this.classList.add("active");
		}

		mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
	}, []);
	return (
		<div className="menu min-w-[68px] w-[68px] xs:min-w-[100px] xs:w-[100px] h-full bg-menuBg flex flex-col items-center justify-start">
			<img
				className="w-12 pt-[30px] shadow-menuShadow"
				src={Logo}
				alt=""
			/>
			<ul
				id="mainMenu"
				className="pt-[30px] w-full flex flex-col items-center">
				<Icon icon={<FaDelicious />} />
				<Icon icon={<FaShoppingCart />} />
				<Icon icon={<FaWallet />} />
				<Icon icon={<FaChartLine />} />
				<Icon icon={<FaRegClock />} />
			</ul>
			<ul className="lastMenu pt-[30px] w-full flex flex-col items-center mt-auto">
				<Icon icon={<FaCog />} />
				<Icon icon={<FaSignOutAlt />} />
			</ul>
		</div>
	);
};

const Icon = ({ icon }) => (
	<li className="relative my-[20px] text-textColor w-full text-center group cursor-pointer">
		<p className="text-[24px] transition-all duration-300 before:absolute before:top-[5px] before:-left-[10px] group-hover:before:w-[20px] before:h-[20px] before:bg-textHover inline-block before:rounded-full group-hover:text-textHover group-[.active]:before:w-[20px] group-[.active]:text-textHover">
			{icon}
		</p>
	</li>
);

export default Menu;
