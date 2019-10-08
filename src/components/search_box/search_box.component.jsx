
import React from 'react';
import './search_box.styles.css';

// create a functional component
// functional components unlike class components don't have access to state and don't have access
// to lifecycle methods and we don't always need internal state or lifecycle methods and sometimes
// all we want to do is render some html so a functional component is a component that gets some
// props and returns html and if we don't think we need access to state or lifecycle methods then
// just use a functional component

// so let's copy our input element from App.js and place it inside our arrow function below and
// make the placeholder attribute dynamic since we may want to reuse this component and we could
// have destructured the props object and pulled off the placeholder and handleChange properties
// so that the argument would be ( { placeholder, handleChange } ) instead of ( props )
// go to -- Mark 8 -- in App.js
export const SearchBox = ( props ) => (
    <input
        className  ="search"
        type       ="search"
        placeholder={ props.placeholder }
        onChange   ={ props.handleChange }
    />
);


// alternative 1 to the above code:
/*
export const SearchBox = ( { placeholder, handleChange } ) => (
    <input
        className  ="search"
        type       ="search"
        placeholder={ placeholder }
        onChange   ={ handleChange }
    />
);
*/
