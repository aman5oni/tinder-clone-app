import React,{useState} from 'react';
import "../style/TinderCards.css";
import TinderCard from "react-tinder-card";
import JeffBezosImage from "../images/JeffBezos.png";
import ElonMuskImage from "../images/ElonMusk.png";


function TinderCards() {
    const [people,setPeople] = useState([
        {
            name:"Jeff Bezos",
            url: `${JeffBezosImage}`
        },
        {
            name:"Elon Musk",
            url: `${ElonMuskImage}`
        }

    ])

    const swiped = (direction,nameToDelete) => {
        console.log("removing" + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen !");
    }

  return (
    <div className="tinderCards">
        <div className="tinderCardsCardContainer">
            {people.map((person) => (
                <TinderCard 
                    className="tinderCardsSwipe"
                    key={person.name} 
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen = { () => outOfFrame(person.name) }
                >
                <div style={{ backgroundImage: `url(${person.url})`}} className="tinderCardsCard">
                    <h3>{person.name}</h3>
                </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards;