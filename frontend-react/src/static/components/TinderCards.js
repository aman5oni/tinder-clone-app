import React, { useState, useEffect } from "react";
import "../style/TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/getdata");
      setPeople(data.data.data);
    };
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " Left The Screen !");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCardsCardContainer">
        {people.map((person, index) => (
          <TinderCard
            className="tinderCardsSwipe"
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.image.url})` }}
              className="tinderCardsCard"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
