import  React  from "react";
import styled from 'styled-components';
const Charactercard = styled.div`
background-image: linear-gradient(-90deg, red, yellow);
  border-radius: 2px;
  display: flex;
  max-height: 200px;
  margin: 1rem;
  padding: 1rem;
  width: 400px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const Info = styled.div`
text-align: center;
`

function Character(props) {
  return (
    <Charactercard className="character-card">
      <Info className="character-info">
       <p><strong>Name:</strong>{props.char.name} </p>
        <p>
          <strong>Height:</strong> {props.char.height}
        </p>
        <p>
          <strong>Mass:</strong> {props.char.mass}
        </p>
        <p>
          <strong>Hair Color:</strong> {props.char.hair_color}
        </p>
        <p>
          <strong>Birth Year:</strong> {props.char.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {props.char.gender}
        </p>
      </Info>
    </Charactercard>
  );
}

export default Character;