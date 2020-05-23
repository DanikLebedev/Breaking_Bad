import React from 'react'
import {CharacterCard} from "../../components/CharacterCard";
import {Character} from "../../interfaces";
import './CharacterCardListContainer.scss'

interface CharacterProps {
    characters: Character[]
}

export const CharacterCardListContainer:React.FC<CharacterProps> = ({characters}) => {
    return (
        <div className={'character-card-container'}>
            {characters.map((character) => {
                return (
                    <CharacterCard key={character.nickname}  character={character}/>
                )
            })}

        </div>
    )
}
