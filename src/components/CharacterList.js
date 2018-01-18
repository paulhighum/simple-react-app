import React, { Component } from 'react';
import CharacterCard from './CharacterCard'

const CharacterList = (props) => {
  const characters = props.characters
  console.log(characters)
  return characters.map((c, i) => <CharacterCard key={c.name} character={c} rank={i}/>)
}


export default CharacterList
