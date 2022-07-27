import React from "react";
import './App.css';
import Saci from './img/careca.jpg';
import hack from './img/matias.jpg';
import PANcada from './img/pANcada.jpg';
import Aspas from './img/aspas.jpg';
import Less from './img/less.jpg';
import Slim from './img/eminem.jpg';
import Logo from './img/LOUD.png';



export default class App extends React.Component {

  state = {
    valorant: [
      {
        Player: "Sacy",
        Age: 23,
        agent: "Initiator",
        img: Saci
      },
      {
        Player: "Aspas",
        Age: 19,
        agent: "Duelist",
        img: Aspas
      },
      {
        Player: "Saadhak",
        Age: 25,
        agent: "Initiator/sentinel",
        img: hack
      },
      {
        Player: "pANcada",
        Age: 22,
        agent: "Controller",
        img: PANcada
      },
      {
        Player: "Less",
        Age: 17,
        agent: "sentinel",
        img: Less
      },
      {
        Player: "SlimShady",
        Age: 20,
        agent: "sentinel",
        img: Slim
      }
    ]
  }

   render (){
   return (
    <div className="body">
      <img className="logo" src={Logo} alt="Logo-Loud"/>
      <div className="loudPlayers">
     {this.state.valorant.map((item) => (
        <section className="cards">
        <ul className="info">
          <img src={item.img}alt="player-loud"/>
          <li>{item.Player}</li>
          <li>{item.Age} age</li>
          <li>{item.agent}</li>
        </ul>
        <button>Sobre</button>
        </section>
      ))}
      </div>
    </div>
   );
 }

}
