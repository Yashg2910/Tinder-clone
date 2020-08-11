import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import database from "./firebase";

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}
 
const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}


function TinderCards() {
    
    const [people, setPeople] = useState([]);

    // const people = []
    // people.push('sunny','qazi')

    // useEffect is something which runs based on some condition
    useEffect(() => {
        
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc =>doc.data()))
        ))
        
        return () => {
            unsubscribe();
        };
        // this will run ONCE when the component is loaded and never again.
    },[]);

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard 
                        className="swipe"
                        key = {person.name}
                    >
                        <div
                        style = {{ backgroundImage: `url(${person.url})`}} 
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards;