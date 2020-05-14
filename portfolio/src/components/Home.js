import React, {Component,useState,useEffect} from "react";
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from "./HomeThreeColumns";
import DecorationBlock from "./DecorationBlock";
import HomeFourColumns from "./HomeFourColumns";
import ButtonOddajrzecz from "./ButtonOddajRzecz";
import Login from "./Login";



const Home = () => (
   <>
    <div className="main-container">
        
        {/* <Login/> */}
        <HomeHeader />
        <HomeThreeColumns/>
        <DecorationBlock/>
        <HomeFourColumns/>
        <ButtonOddajrzecz/>
        <HomeAboutUs />
        <HomeWhoWeHelp/>
        <HomeContact />
        
    </div>
   </>
)

export default Home;
