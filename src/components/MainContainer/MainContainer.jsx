import React from "react";
import "./MainContainer.css";

import CardMain from "../CardMain/CardMain";

import Banner from "../../img/1.jpg";
import Card1 from "../../img/card1.jpg";
import Card2 from "../../img/card2.jpg";
import Card3 from "../../img/card3.jpg";
import Card4 from "../../img/card4.jpg";
import Card5 from "../../img/card5.jpg";
import Card6 from "../../img/card6.jpg";

const MainContainer = () => {
	return (
		<div className="mainContainer w-full h-[calc(100%-45px)] flex pt-4">
			<div className="left w-[70%] overflow-y-scroll transition-all duration-300 ease-in-out">
				<div
					className="banner w-full h-[260px] bg-cover bg-no-repeat bg-center rounded-lg shadow-lg relative"
					style={{ backgroundImage: `url(${Banner})` }}>
					<div className="textContainer absolute right-5 bottom-5">
						<h1 className="text-6xl text-textHoverSec font-bold my-1">
							Round Hall
						</h1>
						<h2 className="text-4xl text-textHover my-1 font-bold">
							1.5 ETH
						</h2>
						<p className="text-textHoverSec text-lg my-1">
							Uploaded by Gunapathi Selvam
						</p>
						<div className="bid flex items-center my-1">
							<a
								href="#"
								className="button1">
								BID NOW
							</a>
							<p className="text-textHoverSec text-lg my-1 ml-2 block">
								Ending In{" "}
								<span className="block text-textHover font-semibold">
									2d:15h:20m
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="card bg-searchBg p-3 mt-5 rounded-lg shadow-lg">
					<div className="filters flex items-center justify-between py-1 px-7">
						<div className="popular flex items-center">
							<h2 className="text-[20px] font-bold text-textColorSec mr-3">
								Feed
							</h2>
							<a
								href="#"
								className="button2">
								Popular
							</a>
						</div>
						<div className="filter_buttons">
							<a
								href="#"
								className="button1">
								All
							</a>
							<a
								href="#"
								className="button2">
								Illustration
							</a>
							<a
								href="#"
								className="button2">
								Art
							</a>
							<a
								href="#"
								className="button2">
								Games
							</a>
						</div>
					</div>
					<section className="flex justify-between items-center flex-wrap">
						<CardMain
							imgSrc={Card1}
							title={"Cubic Thunder"}
							hearts={"65"}
						/>
						<CardMain
							imgSrc={Card2}
							title={"Cubic Thunder"}
							hearts={"75"}
						/>
						<CardMain
							imgSrc={Card3}
							title={"Cubic Thunder"}
							hearts={"645"}
						/>
						<CardMain
							imgSrc={Card4}
							title={"Cubic Thunder"}
							hearts={"35"}
						/>
						<CardMain
							imgSrc={Card5}
							title={"Cubic Thunder"}
							hearts={"85"}
						/>
						<CardMain
							imgSrc={Card6}
							title={"Cubic Thunder"}
							hearts={"25"}
						/>
					</section>
				</div>
			</div>
			<div className="right w-[30%] transition-all duration-300 ease-in-out"></div>
		</div>
	);
};

export default MainContainer;
