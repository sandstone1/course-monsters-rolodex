
// -- Mark 1 --
// lecture 20: Class Components
// first, let's import Component from React
// End of -- Mark 1 --
import React, { Component } from 'react';
// were not using the logo anymore so let's comment it out
// import logo from './logo.svg';
import './App.css';
// -- Mark 4 --
// lecture 28: Card List Component
// import our CardList component
import { CardList } from './components/card_list/card_list.component';
// End of -- Mark 4 --
// -- Mark 8 --
// lecture 36: Search Box Component
import { SearchBox } from './components/search_box/search_box.component';
// End of -- Mark 8 --

// -- Mark 1 -- continued
// lecture 20: Class Components
// convert our initial function below into a class
// End of -- Mark 1 --
class App extends Component {

    // -- Mark 1 -- continued
    // lecture 20: Class Components        
    // I commented out the constructor method below and just called state directly and I
    // could do this since create react app comes pre built with the babel tranform class
    // properties plugin so we can define key value pairs inline like I did with " state "
    // below

    // -- Mark 2 --
    // lecture 22: Dynamic Content
    // change state below by creating a new property called " monsters " and we will make it
    // equal an array of objects
    // End of -- Mark 2 --
    state = {
        monsters    : [],
        searchField : ''
    };

    /*
    constructor() {
        super();

        this.state = {
            string : 'Hello Yihua'
        };
    }
    */
   // End of -- Mark 1 --


    // -- Mark 3 --
    // lecture 25: Fetching Content
    // remember, Component gives us a bunch of other methods called lifecycle methods and what are
    // lifecycle methods? they are methods that get called at different stages as a component gets
    // rendered amd we want to focus on componentDidMount and componentDidMount happens when the
    // components mounts or when react renders our component to the DOM for the first time and when
    // this happens it will call whatever block of code is inside the componentDidMount method
    componentDidMount() {
        // what we want to do inside componentDidMoount is use JavaScript's native fetch() to make
        // a request from the URL and what fetch returns is a promise and then we can do something
        // with that promise and the promise will give us a response argument and when we log out
        // the response ( i.e. console.log( response ) ) we get back the following:
        /*
        Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, …}
        body: ReadableStream
        bodyUsed: false
        headers: Headers {}
        ok: true
        redirected: false
        status: 200
        statusText: "OK"
        type: "cors"
        url: "https://jsonplaceholder.typicode.com/users"
            __proto__: Response
        */

        // and what we want is located inside the body property but we need it in a format that
        // JavaScript can understand and response.json() will parse the response as JSON
        // or convert the response into the format JSON and by returning
        // response.json() we create a new promise and we can then use this new promise and this
        // new promise will contain data that JavaScript can understand or this new promise will
        // contain the body of our users array and let's console.log out " users " so we can see
        // what were getting ( i.e. console.log( users ) ) and we get back the following:
        /*
        (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz",
        1: {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv",
        2: {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net",
        3: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org",
        4: {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca",
        5: {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info",
        6: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz",
        7: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me",
        8: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io",
        9: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz",
            length: 10
            __proto__: Array(0)
        */

        // so we can use this array and now we want to call setState inside this promise or inside
        // our then() call and we want to set our monsters equal to this array of users so now we
        // want our monsters property inside the initial state to be equal to an empty array since
        // we no longer need to hardcode the array so now were going to wait for our component to
        // mount and then were going to fetch all of our users and then update our state monster's
        // property with this new array of users and if we go check our application or website
        // we see that we now have all 10 monsters or users listed on the page as follows:

        /*
        Leanne Graham
        Ervin Howell
        Clementine belly
        Patricia Lebsack
        Chelsey Dietrich
        Mrs. Dennis Schulist
        Kurtis Weissnat
        Nicholas Runolfsdottir V
        Glenna Reichert
        Clementina DuBuque
        */

        // in the next section, we are going to convert our list of users on our website to look
        // a little bit more like our finished monsters website
        fetch( 'https://jsonplaceholder.typicode.com/users' )
        .then( ( response ) => response.json() )
        .then( (    users ) => this.setState( { monsters : users } ) );
    }
    // End of -- Mark 3 --
  

    // -- Mark 9 --
    // lecture 38: Class Methods and Arrow Functions
    // if we were to write this as a class method then handleChange would look as follow below
    // and we would change
    // " handleChange={ ( e ) => this.setState( { searchField : e.target.value } ) } " to
    // " handleChange={ this.handleChange } "
    // but if we save this file and view the site we will see that this is undefined and why is
    // this? because in JavaScript we have to explicitly state what the context of " this " should
    // be and we don't do that when we use a class method but we could make it work by typing
    // " this.handleChange = this.handleChange.bind( this ); " inside the contructor method but
    // this way of doing things is a very verbose way of writing code and we can avoid this by
    // using es6 arrow functions and arrow functions set the context of " this " in whatever it
    // was that declared it in the first place and when JavaScript runs our component the
    // component will be the environment in which handleChange, in our example below, was declared
    // and therefore the " this " keyword inside handleChange will be bound to our component
    // so arrow functions always set the correct binding for the " this " keyword, therefore, let's
    // change handleChange to an equal an arrow function and now the site will work as expected
    handleChange = ( e ) => {
        this.setState( { searchField : e.target.value } )       
    }
    // End of -- Mark 9 --


    render() {
        // -- Mark 1 -- continued
        // lecture 20: Class Components        
        // the render method returns any html we want and let's return the html we had before
        // inside our function and we see that the webpage looks exactly the same as before when
        // we were using a function to return html

        // by using a class component we get access to this thing called state and state is a js
        // object with properties that we can access at anytime inside our class and the way we
        // would do this is by calling the constructor keyword and inside constructor we want to
        // call super() and super calls the constructor method on the Component class and this
        // gives us access to this.state and we can set it to something ( see above ) and now we
        // can render that string down below by typing " { this.state.string } " and jsx tells html
        // that anything between the curly braces will be JavaScript and we use 
        // " { this.state.string } " in multiple places which is great

        // if we wanted to change the state, Component gives us a method called setState and
        // setState let's us modify our state object and we also have access to a property called
        // onClick that takes a function that gets called whenever the corresponding element gets
        // clicked or in our case whenever the button is clicked and will use the setState method
        // below to change the state and that is great because it gives us a lot of control over
        // what our components will display
        // End of -- Mark 1 --

        // -- Mark 2 -- continued
        // lecture 22: Dynamic Content
        // remove all the jsx between the div with the className of App and replace it as follows:

        // -- Mark 4 --
        // lecture 28: Card List Component
        // place the CardList component below and the props parameter in CardList will be equal to
        // an object that contains the key value pairs that we pass into CardList so if we say
        // " name = James " inside our CardList component below, we will see the following in 
        // console ( remember in CardList we consoled out props or did console.log( props ); ):
        /*
        {name: "James"}
        {name: "James"}
        */

        // and one of the main properties that exist on the props object is called children and
        // children are what you pass in between a component or in between
        // <CardList></CardList> so if we say <CardList>Mike</CardList> then the children prop
        // will be " Mike " so try this below and the go to -- card-list.component.jsx -- and change
        // " return <div>Hello</div> " to " return <div>{ props.children }</div> " and the result
        // will be shown on the webpage as:
        /*
        Mike
        */

        // and we also have access to props in our App component and now let's focus on our css
        // file and go to -- card-list.styles.css -- and now were back from
        // -- card-list.styles.css -- and let's move </CardList> down so that it now includes the
        // monsters array and take out " Mike " so now props.children in the CardList component
        // will include all the monsters and they will be laid out in an equal grid per our style
        // sheet or card-list.styles.css

        // so this is a fundalmental principal of react, we are building components that only care
        // about one thing and our CardList component only cares about displaying cards and in the
        // next lesson we will take this ideas a step further and apply it to an individual card
        // component
        // End of -- Mark 4 --

        // -- Mark 5 --
        // lecture 29: Card Component
        // first, delete " name = 'James' " in <CardList> and then pass in a prop we can use in the
        // CardList component and that prop along with the corresponding value will be
        // " monsters={ this.state.monsters } " and we move
        // " this.state.monsters.map( ( monster ) => <h1 key={ monster.id }>{ monster.name }</h1> ) "
        // into the CardList component and go to the CardList component -- Mark 1 --
        // End of -- Mark 5 --

        // -- Mark 6 --
        // lecture 32: SearchField State
        // add an input element below and make the type equal to " search " and then give the
        // element a placeholder attribute equal to " search monsters " so now what we need to do
        // is be able to take the typed input string and store the string into our state object and
        // by storing the string in state we are able to use it to filter out our monsters so first
        // we need to figure out how to store the string in our state object and let's add a key
        // value pair to our state object and call the key " searchField " and leave the value
        // equal to an empty string for now and let's add an onChange event handler to our input
        // element and then use setState to change our searchField value within our state object 
        // to equal whatever value the user types into the input element

        // asynchrosnous versus synchronous is a big thing in JavaScript development right now and
        // a big thing in reach as well and sychronous action is something we can expect to happen
        // almost immediately and with sychronous events JavaScript will wait until that action has
        // completed before moving to the rest of the code but with an asynchronous action or event
        // is something that takes an indefinite amount of time and JavaScript does not know how
        // long it will take to complete the asynchronous action or event so what happens is
        // that JavaScript will continue running the rest of the code and then when the ayschronous
        // event finishes then JavaScript will run that asynchronous event so the main takeaway
        // here is that setState is not happening immediately or when we would expect it to and
        // therefore setState is always one character behind where it should be in this particular
        // instance so the solution to this predicament is to use a second argument to setState
        // which will be an arrow function and this function will run after setState has updated
        // the searchField state

        // remember, if we want to see or do something with our state right after we set it then
        // we have to do it inside the second argument to the setState() call and this second
        // argument function will get called right after the first argument function has completed
        // in setState and now onChange looks like the following:
        /*
        onChange =
        { 
            ( e ) => {
                this.setState( 
                    { searchField : e.target.value },
                    () => console.log( this.state )                            
                )
            } 
        }
        */

        // now that we have our searchField being stored let's filter out our monsters but first
        // let's remove our second argument to setState or " () => console.log( this.state ) "
        // and onto the next video
        // End of -- Mark 6 --

        // -- Mark 7 --
        // lecture 34: Filtering State
        // remember, we don't want to modify our state's monster array in case we need it later
        // or somewhere else in this component so what we'll do is make a new array using the
        // filter method but first let's destructure the state object and what destructuring allows
        // us to do is pull properties off an object and set these properties equal to constants
        // and we put these properties inside the curly braces and set it equal to the object we
        // want to destructure from and when use the following syntax:
        // " const { monsters, searchField } = this.state; "  we are saying that we want to pull
        // the monsters and searchField values off of the state object and setting them as
        // constants called monsters and searchField and this is equal to:
        // const monsters = this.state.monsters; and
        // const searchField = this.state.searchField;

        // now let's set a new const called filteredMonster and set it equal to
        // " monsters.filter( ( monster ) => monster.name.toLowerCase().includes(
        // searchField.toLowerCase() ) ); " and the
        // includes method checks to see whether the string value we pass to includes is found
        // in monster.name.toLowerCase() and if that is true then that monster will be added to the
        // new filters array and if false then that monster will not be added to the new filters
        // array and instead of using " { this.state.monsters } " in our CardList component we will
        // use filteredMonsters instead or "<CardList monsters={ filteredMonsters } />" and
        // filteredMonsters is just a new monsters array that has been filtered and remember that
        // whenever setState is called because our searchField property has changed then react will
        // rerender our component and when the component rerenders then filteredMonsters is called
        // again creating a new array and this new array is feed into the CardList component which
        // will then rerender our CardList component which will then rerender our Card component
        // and this is what is great about react because react is able to take control over what
        // to render and rerender in our application without us having to do a bunch of extensive
        // calls to show elements, hide elements, etc.

        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter( ( monster ) => {

            return monster.name.toLowerCase().includes( searchField.toLowerCase() )

        } );
        // End of -- Mark 7 --

        // -- Mark 8 --
        // lecture 36: Search Box Component
        // change the input element below into <SearchBox ... />
        // now go the website and test it and we see that our funtionality is working fine but
        // now we have a reuseable component ( i.e. SearchBox ) that we can use in multiple places
        // and this is what is great about react is this component style of writing code so our
        // SearchBox component is a presentational component that styles an input field within our
        // app and it takes in any funtionality it might need by using the handleChange property
        // that is being passed down to the SeachBox component from App.js or the App component
        // so again one of the huge advantages to using react is this idea of writing these smaller
        // and smaller reusable components
        // End of -- Mark 8 --

        // -- Mark 10 --
        // lecture 43: Deploying Our App
        // let's add am h1 tag above the SearchBox component and we need to import the Google font
        // for " Monsters Rolodex " and go to Google fonts and search for Bigelow Rules and copy
        // the link for the font into the <head></head> of our index.html file and then go to
        // App.css and add a new rule for our h1 tag and then go to index.css and add a new
        // background color to the body element and remember that index.css is a file that gets
        // generated by create react app and now our project is finished

        // so we've built a project that has filtering and we understand how components are created
        // End of -- Mark 10 --

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox 
                    placeholder='seach monsters'
                    handleChange={ this.handleChange }
                />
                <CardList monsters={ filteredMonsters } />
            </div>
        );
    }

}


export default App;

// -- Mark 1 -- continued
// lecture 20: Class Components
// comment out the function below
/*
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    );
}
*/
// End of -- Mark 1 --


