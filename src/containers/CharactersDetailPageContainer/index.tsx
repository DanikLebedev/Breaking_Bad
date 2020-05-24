import React, {FC, useCallback, useEffect} from "react";
import './CharactersDetailPageContainer.scss'
import {useHistory, useLocation, useParams} from "react-router";
import {RootState} from "../../store/reducers/rootReducer";
import {connect, useDispatch, useSelector, useStore} from "react-redux";
import {fetchCharactersById} from "../../store/actions/characters";
import {CharacterInfo} from "../../components/CharacterInfo";

export const CharactersDetailPageContainer: FC = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const store = useSelector((store: RootState) => store.api)
    const getCharacterById = useCallback(() => {
        dispatch(fetchCharactersById(id))
    }, [dispatch])

    useEffect(() => {
        getCharacterById()
    }, [])


    return (
        <div className="character-detail-page-container">
            <div className="home-page-container__preview">
                <img src={process.env.PUBLIC_URL + '/breaking_bad_details.jpg'} alt={''}/>
            </div>
            <div className="container">
                {store.loading ? <h1>Loading...</h1> : (<CharacterInfo character={store.currentCharacter[0]}/>)}
            </div>
        </div>
    )
}



