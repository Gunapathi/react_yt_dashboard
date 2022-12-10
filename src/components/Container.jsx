import React from "react";
import MainContainer from "./MainContainer/MainContainer";
import TopContainer from "./TopContainer";

const Container = () => {
	return (
		<div className="sec_container w-[calc(100%-68px)] lg:w-[calc(100%-100px)] p-[20px] pt-[30px]">
			<TopContainer />
			<MainContainer />
		</div>
	);
};

export default Container;
