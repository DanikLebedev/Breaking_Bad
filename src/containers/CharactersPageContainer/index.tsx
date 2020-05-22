import React from "react";
import './CharactersPageContainer.scss'

export const CharactersPageContainer = () => {
    return (
        <div className="characters-page-container">
            <div className="home-page-container__preview">
                <img src={process.env.PUBLIC_URL + '/breaking_bad_banner_2.jpg'} alt="banner"/>
            </div>
            <div className="container">
                <h1 className={'characters-page-container__title'}>All Characters</h1>
            </div>
        </div>
    )
}
