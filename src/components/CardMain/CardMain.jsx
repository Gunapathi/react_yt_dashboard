import React from "react";
import { FaHeart } from "react-icons/fa";

const CardMain = ({ imgSrc, title, hearts }) => {
	return (
		<div className="card_main bg-cardBg rounded-lg overflow-y-hidden max-w-[calc((100%/3)-32px)] my-4 mx-4">
			<img
				src={imgSrc}
				className="max-w-full object-cover"
				alt=""
			/>
			<div className="p-4">
				<div className="card_main_name flex items-center justify-between align-middle mb-4 relative">
					<h2 className="text-xl font-bold text-textColorSec">
						{title}
					</h2>
					<div className="card_icon flex items-center justify-between align-middle text-redPointer">
						<FaHeart className="text-[20px] mr-2" />
						<span className="text-[20px] font-bold text-textColorSec">
							{hearts}
						</span>
					</div>
				</div>
				<div className="stats flex items-center text-center justify-between mb-4 relative">
					<p className="text-[14px] font-bold text-textColorSec">
						Current Bid{" "}
						<span className="block text-redPointer">1.2 ETH</span>
					</p>
					<p className="text-[14px] font-bold text-textColorSec">
						Ending Bid{" "}
						<span className="block text-redPointer">
							1D : 12H : 10M
						</span>
					</p>
					<span className="absolute top-1/2 right-1/2 -translate-x-[50%] -translate-y-[50%] border h-[30px]"></span>
				</div>
				<div className="card_button flex items-center justify-between">
					<a
						href="#"
						className="button1 mr-[0px!important]">
						Place a Bid
					</a>
					<a
						href="#"
						className="m-[0px!important] border button2">
						History
					</a>
				</div>
			</div>
		</div>
	);
};

export default CardMain;
