import React, {FC} from 'react'
import {Character} from "../../interfaces";
import './CharacterCard.scss'
import {BaseButton} from "../BaseButton/BaseButton";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {fetchCharactersById} from "../../store/actions/characters";

export interface CharacterCardProps {
    character: Character
}

export const CharacterCard: FC<CharacterCardProps> = ({character}) => {
    const history = useHistory()
    const showMoreHandler = (id?: string) => {
        history.push(`/characters/${id}`,{character})
    }
    return (
        <div className={'character-card'} style={{background: `url(${character.img}) center center / cover`}}>
            <div className={'character-card__info'}>
                <h3>{character.name}</h3>
                <BaseButton showMore={showMoreHandler} arg={String(character.char_id)} key={character.char_id? character.char_id : new Date().getTime() + character.name}
                            label={'Show more'}/>
            </div>
        </div>
    )
}
