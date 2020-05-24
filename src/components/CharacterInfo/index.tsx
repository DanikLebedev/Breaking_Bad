import React, {FC} from "react";
import {CharacterCardProps} from "../CharacterCard";
import './CharacterInfo.scss'

export const CharacterInfo:FC<CharacterCardProps> = ({character}) => {
    return (
        <div className={'character-info'}>
            <div className="character-info__image-wrapper"style={{background: `url(${character.img}) center center / cover`}}>
            </div>
            <div className="character-info__details-wrapper">
                <p>Name: {character.name}</p>
                <p>Status: {character.status}</p>
                <p>NickName: {character.nickname}</p>
                <p>Birthday: {character.birthday}</p>
                <p>Portrayed: {character.portrayed}</p>
                <p>Occupation: {character.occupation.map((item) => <span className={'appearance-item'}> {item}</span>)}</p>
                <p>Appearance in seasons: {character.appearance.map(item => <span className={'appearance-item'}> {item}</span>)}</p>
            </div>
        </div>
    )
}
