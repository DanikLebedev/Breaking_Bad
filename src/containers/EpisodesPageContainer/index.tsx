import React, {useEffect} from "react";
import './EpisodesPageContainer.scss'
import {SeasonCard, SeasonProps} from "../../components/SeasonCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/rootReducer";
import {fetchSeasons} from "../../store/actions/episodes";


export const EpisodesPageContainer = () => {
    const {seasons, loading} = useSelector((state: RootState) => state.api);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSeasons())
    }, [])
    return (
        <div className="episodes-page-container">
            <div className="home-page-container__preview">
                <img src={process.env.PUBLIC_URL + '/better_call_saul.jpg'} alt="banner"/>
            </div>
            <div className="container">
                {loading ? <h1 style={{textAlign: 'center'}}>Loading...</h1> :
                    (<>
                        <h1 className={'episodes-page-container__title'}>All Seasons</h1>
                        <div className={'episodes-page-container__seasons-card-wrapper'}>
                            {seasons.map(({seasonId, seasonImg}) => {
                                return (
                                    <SeasonCard seasonId={seasonId} key={seasonId + new Date().getTime()}
                                                seasonImg={seasonImg}/>
                                )
                            })}
                        </div>
                    </>)}


            </div>
        </div>
    )
}
