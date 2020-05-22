import React from "react";
import './HomePageContainer.scss';

export const HomePageContainer = () => {
    return (
        <div className="home-page-container">
            <div className="home-page-container__preview">
                <img src={process.env.PUBLIC_URL + '/breaking-bad-banner.jpg'} alt="banner"/>
            </div>
            <div className="container">
                <h1 className={'home-page-container__title'}>Welcome to <br/></h1>
            </div>

        </div>

    )
}
