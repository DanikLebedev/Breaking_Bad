import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/rootReducer";
import {fetchSeasonById} from "../../store/actions/episodes";
import './SeasonPageContainer.scss'
import {EpisodeItem} from "../../components/EpisodeItem/EpisodeItem";
import {BaseButton} from "../../components/BaseButton/BaseButton";

export const SeasonPageContainer = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const store = useSelector((state: RootState) => state.api)
    const [isAllEpisodes, setIsAllEpisodes] = useState(false)

    // const fetchAll = () => {
    //     useDispatch(fetchSeasonById(id))
    // }

    useEffect(() => {
        dispatch(fetchSeasonById(id, '3'))
    }, [])
    return (
        <div className="season-page-container">
            <div className="home-page-container__preview season-bg">
                <img src={process.env.PUBLIC_URL + `/breaking_bad_${id}.jpg`} alt="banner"/>
            </div>
            <div className="container">
                {
                    store.loading ? <h1 style={{color: '#d4a300', textAlign: 'center'}}>Loading</h1> : (
                        <>
                            <h1 className={'season-page-container__title '}>Season {id}</h1>
                            <div className={'season-page-container__episodes-wrapper'}>
                                {store.episodes.map((episode) => {
                                    return (
                                        <EpisodeItem episode={episode}
                                                     key={`${episode.episode_id}` + new Date().getTime()}/>
                                    )
                                })}
                                {/*{isAllEpisodes ? null : (*/}
                                {/*    // <div className={'characters-page-container__button-wrapper'}>*/}
                                {/*    //     <BaseButton showMore={fetchAll} label={'Show More Characters'}/>*/}
                                {/*    // </div>*/}
                                {/*)}*/}
                            </div>
                         </>
                    )
                }

            </div>

        </div>
    )
}
