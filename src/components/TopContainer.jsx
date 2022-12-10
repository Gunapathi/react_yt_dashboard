import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import User from "../img/women.jpg";

const TopContainer = () => {
	useEffect(() => {
		const menuTarget = document.getElementById("menuChevron");
		const menuContainer = document.getElementById("menuContainer");

		menuTarget.addEventListener("mouseenter", () => {
			menuTarget.style.transform = "rotate(-180deg)";
			menuContainer.style.transform = "translateX(0px)";
		});
		menuContainer.addEventListener("mouseleave", () => {
			menuTarget.style.transform = "rotate(0deg)";
			menuContainer.style.transform = "translateX(300px)";
		});
	}, []);

	return (
		<div className="topContainer flex justify-between items-center">
			<div className="inputBox w-[120px] z-[101] lg:w-[350px] max-[350px] h-[45px] relative">
				<input
					className="w-full h-full bg-searchBg rounded-[10px] shadow-menuShadow text-textColorSec text-[16px] px-[40px] placeholder:text-placeholderColor focus:w-[300px] transition-all duration-300 ease-in-out"
					type="text"
					placeholder="Search Item, Collections"
				/>
				<BiSearchAlt className="inline-block absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 text-placeholderColor text-[20px] " />
			</div>
			<div className="prfileContainer flex justify-center items-center text-textColorSec relative">
				<div className="profileIcon w-[40px] h-[40px] bg-searchBg relative rounded-[10px] shadow-menuShadow text-[18px] before:top-[5px] before:right-[8px] before:w-2 before:h-2 before:bg-redPointer before:absolute before:rounded-full">
					<FaBell className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
				</div>
				<div className="profileImage w-10 h-10 mx-3 rounded-full overflow-hidden shadow-menuShadow object-contain">
					<img
						src={User}
						alt=""
					/>
				</div>
				<p className="profileName font-medium text-sm">
					Olivia Christine
					<FaChevronDown
						className="menuChevron cursor-pointer text-xs mx-3 inline-block transition-all duration-300 ease-in-out"
						id="menuChevron"
					/>
				</p>

				<div
					className="menuContainer absolute right-3 top-12 bg-searchBg rounded-xl w-[180px] shadow-menuShadow z-[1] after:absolute after:rotate-45 after:w-[10px] after:h-[10px] after:bg-searchBg transition-transform duration-300 ease-[cubic-bezier(0.17,0.81,0.38,1.39)] translate-x-[300px] after:-top-[5px] after:right-[15px]"
					id="menuContainer">
					<ul className="w-full h-full">
						<li className="my-1 px-5 py-2 cursor-pointer text-placeholderColor hover:bg-primaryBg hover:text-textHoverSec duration-300">
							Web Design
						</li>
						<li className="my-1 px-5 py-2 cursor-pointer text-placeholderColor hover:bg-primaryBg hover:text-textHoverSec duration-300">
							UI / UX
						</li>
						<li className="my-1 px-5 py-2 cursor-pointer text-placeholderColor hover:bg-primaryBg hover:text-textHoverSec duration-300">
							Form Design
						</li>
						<li className="my-1 px-5 py-2 cursor-pointer text-placeholderColor hover:bg-primaryBg hover:text-textHoverSec duration-300">
							Template
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TopContainer;
