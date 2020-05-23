import React, {useCallback, useEffect, useState} from "react";
import './CharactersPageContainer.scss'
import {CharacterCardListContainer} from "../CharacterCardListContainer";
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacters} from "../../store/actions/characters";
import {BaseButton} from "../../components/BaseButton/BaseButton";
import {RootState} from "../../store/reducers/rootReducer";

export const CharactersPageContainer = () => {
    const [isAllChars, setIsAllChars] = useState<boolean>(false)
    const dispatch = useDispatch()
    const store = useSelector((store: RootState) => store.api)
    const fetchMainCharacters = useCallback(() => {
        dispatch(fetchCharacters('3'))
    }, [])

    const fetchAll = useCallback(() => {
        setIsAllChars(true)
        dispatch(fetchCharacters())
    }, [])


    useEffect(() => {
        fetchMainCharacters()
    }, [])
    return (
        <div className="characters-page-container">
            <div className="home-page-container__preview">
                <img src={process.env.PUBLIC_URL + '/breaking_bad_banner_2.jpg'} alt="banner"/>
            </div>
            <div className="container">
                <h1 className={'characters-page-container__title'}>All Characters</h1>
                {store.loading ? <h2 style={{textAlign: 'center', fontSize: '30px'}}>Loading...</h2> : (
                    <>
                        <CharacterCardListContainer characters={store.characters}/>
                        {isAllChars ? null : (
                            <div className={'characters-page-container__button-wrapper'}>
                                <BaseButton showMore={fetchAll} label={'Show More Characters'}/>
                            </div>
                        )}

                    </>
                )}

            </div>
        </div>
    )
}
