
// first import React
import React from 'react';
import './card.styles.css';

// next, we will export the " Card " functional component and then we will implicitly return some
// jsx and we pass in the props object and that props object is being passed down from the
// card-list.component.jsx file where monster={ monster } so props.monster in this file gives us
// access to one monster object and all of its key value pairs

// in other words, were passing monster into the Card component from the card-list.component.jsx
// file and in the Card component gets access to monster from the props object and then displays
// the monster's name and now let's add the styling to make it look closer to our final app and
// first make a new file inside the card folder called card.styles.css and then we use the
// card-container class styles inside our div tag below and remember to import the stylesheet
// above or import the card.styles.css file above

// now where do we get the image? we get the images from a site called robo hash and each time
// you pass a different number to the url you get a different monster image so add an image tag
// below and remember " set=set2 " is a URL parameter and what it is saying essentially is use
// this set of images and all this information is on the robo hash website and let's add another
// parameter and we do that by adding " &size=180x180 " but I left the size parameter off since
// it was skewing the images and they are now showing up at 477x300 and if we go to our site we
// see that the monster images are displaying correctly and our site is now looks really close
// to our final application

// now let's add an email for each monster and in the next section we will add the search bar
// and we will see how we can filter out monsters and add more functionality to our components
export const Card = ( props ) => (

    <div className="card-container">

        <img alt="monster" src={ `https://robohash.org/${props.monster.id}?set=set2` } />
        <h2>{ props.monster.name }</h2>
        <p>{ props.monster.email }</p>

    </div>

);
