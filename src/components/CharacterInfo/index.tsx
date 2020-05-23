import React, {FC} from "react";
import {CharacterCardProps} from "../CharacterCard";

export const CharacterInfo:FC<CharacterCardProps> = ({character}) => {
    return (
        <div className={'character-info'}>
            <div className="character-info__image-wrapper">
                <img src="" alt=""/>
            </div>
            <div className="character-info__details-wrapper">
                <p>{character.name}</p>
                <p>{character.status}</p>
                <p>{character.nickname}</p>
                <p>{character.birthday}</p>
                <p>{character.category}</p>
            </div>
        </div>
    )
}
