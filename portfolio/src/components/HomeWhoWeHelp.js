import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";
import decoration from '../assets/Decoration.svg';
import { get } from "react-scroll/modules/mixins/scroller";


const HomeWhoWeHelp = () =>{
    const [fundation, setFundation] = useState([]);
    const [current, setCurrent] = useState('Fundacjom');

    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage,setTodosPerPage] = useState(3)

    let url = "http://localhost:3008/fundations"

    useEffect(() => {
        fetch(url,{method:'GET',
        headers: {
            "Content-Type": "application/json"
          }})
        .then(resp =>resp.json())
        .then(data => {
            setFundation(data)
        })
    }, [])
    

    const handleClick = (e) =>{
        setCurrentPage(e.target.id)
    }

    const getCurrent = () => fundation.find(fund => fund.name === current) || null

    const handleSwitch = (e) => {
        setCurrent(e.target.name)
    }
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = getCurrent().slice(indexOfFirstTodo, indexOfLastTodo);

    return(
        <div id="who-help">
            {console.log(getCurrent())}
            <div className="who-title">
                <p className="contact-title">Komu pomagamy?</p>
                <img src={decoration} alt='decoration'></img>
            </div>
            <div className="who-buttons">
                <button name="Fundacjom" onClick={handleSwitch} className="main-btn">Fundacjom</button>
                <button name="Oganizacjom" onClick={handleSwitch} className="main-btn">Organizacjom pozarządowym</button>
                <button className="main-btn">Lokalnym zbiórkom</button>
            </div>
            <div className="who-desc">
                <p>
               {getCurrent()?.desc}
                </p>
            </div>
            <div className="who-list">
                <table>
                    <tbody>
                        {getCurrent()?.items.map((e)=>{
                            return(
                                <tr>
                                    <td>
                                        <p className="fp">{e.header}</p>
                                        <p className="sp">{e.subheader}</p>
                                    </td>
                                    <td>
                                        <p className="sc">{e.desc}</p>
                                    </td>
                                </tr>
                                
                            )
                        })}
                    
                    </tbody>
                </table>
            </div>

            <div className="pages">
                <button className="main-btn">1</button>
                <button className="main-btn">2</button>
                <button className="main-btn">3</button>
            </div>


        </div>
    )
}

export default HomeWhoWeHelp;