import React from "react";
import './EpisodesPageContainer.scss'

export const EpisodesPageContainer = () => {
    return (
        <div className="episodes-page-container">
            <div className="home-page-container__preview">
                <img src={process.env.PUBLIC_URL + '/better_call_saul.jpg'} alt="banner"/>
            </div>
            <div className="container">
                <h1 className={'episodes-page-container__title'}>All Episodes</h1>
            </div>
        </div>
    )
}
