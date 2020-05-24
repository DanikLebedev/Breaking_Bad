import React, {FC} from "react"
import {BaseButton} from "../BaseButton/BaseButton";
import './SeasonCard.scss'
import {useHistory} from "react-router";

export interface SeasonProps {
        seasonId: string,
        seasonImg: string;
}


export const SeasonCard:FC<SeasonProps> = ({seasonId, seasonImg}) => {
    const history = useHistory()
    const showMoreSeasonHandler = (id: string | undefined) => {
        history.push(`/episodes/season/${id}`)
    }

    return (
        <div className={'season-card'} style={{background: `url(${seasonImg}) center center / cover`}}>
            <div className={'season-card__info'} >
                <h3>{'Season ' + seasonId}</h3>
                <BaseButton showMore={showMoreSeasonHandler} arg={seasonId}
                            label={'Show all series'}/>
            </div>
        </div>
    )

}
