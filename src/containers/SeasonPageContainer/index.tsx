import React from "react";
import {useParams} from "react-router";

export const SeasonPageContainer = () => {
    const {id} = useParams()
    return (
        <div className="home-page-container">
            <div className="home-page-container__preview">
                <img src={process.env.PUBLIC_URL + `/breaking_bad_${id}.jpg`} alt="banner"/>
            </div>
            <div className="container">

            </div>

        </div>
    )
}
