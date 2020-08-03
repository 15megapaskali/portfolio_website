import React, {Component,useState,useEffect} from "react";
import Bar from './Bar';
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from "./HomeThreeColumns";
import DecorationBlock from "./DecorationBlock";
import HomeFourColumns from "./HomeFourColumns";
import ButtonOddajrzecz from "./ButtonOddajRzecz";
import Login from "./Login";
import Register from "./Register";




const Home = () => {

    const [stan, setStan] = useState('');

    const handleStanHome = (arg) =>{
    setStan(arg)
    }
    if (stan ==='login'){
        return(
            <div className="main-container">
                <Bar props={stan} choice={handleStanHome}/>
                <Login props={stan} choice={handleStanHome}/>
            </div>
        )
    }
    else if(stan ==='register'){
        return(
            <div className="main-container">
                <Bar props={stan} choice={handleStanHome}/>
                <Register props={stan} choice={handleStanHome}/>
            </div>
        )

    }
    else{
        return(
            <>
             <div className="main-container">
                 <Bar props={stan} choice={handleStanHome}/>    
                 <HomeHeader />
                 <HomeThreeColumns/>
                 <DecorationBlock/>
                 <HomeFourColumns/>
                 <ButtonOddajrzecz props={stan} choice={handleStanHome}/>
                 <HomeAboutUs />
                 <HomeWhoWeHelp/>
                 <HomeContact />
             </div>
            </>
         )
    }
    
}

export default Home;
