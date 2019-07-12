import React, {useState,useEffect } from "react";

import ChararcterList from "./components/CharacterList";

import axios from 'axios'
import styled from "styled-components"
const Header = styled.h1`
color:lightgreen;
`
const Sap = styled.div`
font-family: sans-serif;
text-align: center;
height: 100%;
background-image: url("https://us.123rf.com/450wm/regioeligo/regioeligo1701/regioeligo170100053/69597010-stock-vector-vector-abstract-background-with-open-space-star-warp-or-hyperspace-travel-big-bang-illustration-.jpg?ver=6");
background-size: cover;
background-position: center center;
background-repeat: none;`

const App = () => {
  // const [starwarsChars, setChars] = useState()
  
  
    const [data, setData] = useState({});

    const fetchData = () => {
      axios.get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  
    useEffect(fetchData, []);
  console.log(data,"data")
console.log(data.results,"data.results")
  return(
    <div>
 <Sap className="App">
         <Header className="Header">React Wars</Header>
         <ChararcterList data={data.results} />
        

       </Sap>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       starwarsChars: []
//     };
//   }

//   componentDidMount() {
//     this.getCharacters("https://build-week-tess.herokuapp.com/planets/");
//   }
//'https://swapi.co/api/people'
//   getCharacters = URL => {
//     // feel free to research what this code is doing.
//     // At a high level we are calling an API to fetch some starwars data from the open web.
//     // We then take that data and resolve it our state.
//     fetch(URL)
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         this.setState({ starwarsChars: data.results });
//       })
//       // .catch(err => {
//       //   throw new Error(err);
//       // });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1 className="Header">React Wars</h1>
//         <ChararcterList starwarsChars={this.state.starwarsChars} />
        

//       </div>
//     );
//   }
// }

export default App;
