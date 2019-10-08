
import React from 'react';
import './card_list.styles.css';

// -- Mark 1 --
// lecture 29: Card Component
import { Card } from '../card/card.component';
// End of -- Mark 1 --

// we will make a functional component for this file and one of the big things about components
// is that they take in something called props and our arrow function will have an argument
// or parameter called props 
export const CardList = ( props ) => (

    // for now, let's console.log out " props "
    // console.log( props );

    // let's add a className to the div tag below

    // -- Mark 1 --
    // lecture 29: Card Component
    // coming from App.js and remove " props.children " below and replace it with:    
    /*
    { props.monsters.map( ( monster ) => (
        <h1 key={ monster.id }> { monster.name } </h1>
    ) ) }
    */
    
    // so we want the map functionality in this file not App.js but what the CardList is not going
    // to be responsible for is deciding how this component will look and we will make new
    // component to handle the individual cards and first make a " card " folder in our component
    // folder and then make a " card.component.jsx " file inside our card folder and then go to
    // the -- card.component.jsx -- file and were back from the -- card.component.jsx -- file and
    // change "  <h1 key={ monster.id }>{ monster.name }</h1> " to
    // " <Card key={ monster.id } monster={ monster } /> " and then go the -- card.component.jsx --
    // file
    
    // End of -- Mark 1 --

    <div className="card-list">
        { 
            props.monsters.map( ( monster ) => (
                <Card key={ monster.id } monster={ monster } />
            ) )
        }
    </div>

    // now import our named export above or CardList to App.js
    // go to -- App.js -- Mark 4 --

);

