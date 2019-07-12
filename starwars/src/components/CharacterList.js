import React from "react";
import styled from 'styled-components'

import Character from "./Character";

const CharacterListwrapper = styled.div` 
 display: flex;
flex-flow: column nowrap;
align-items: center;
`

function CharacterList(props) {
  return (
    //className = "characterList-wrapper"
    <CharacterListwrapper>
       {props.data && props.data.map(char => {
        return <Character char={char} />;
      })}
      {/* {props.data.map(char => <Character char={char}/>)} */}
    </CharacterListwrapper>
  );
}

export default CharacterList;
