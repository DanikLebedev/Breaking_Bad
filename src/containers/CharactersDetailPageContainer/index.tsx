import React, {FC, useCallback, useEffect} from "react";
import './CharactersDetailPageContainer.scss'
import {useHistory, useLocation, useParams} from "react-router";
import {RootState} from "../../store/reducers/rootReducer";
import {connect, useDispatch, useSelector, useStore} from "react-redux";
import {fetchCharactersById} from "../../store/actions/characters";

export const CharactersDetailPageContainer: FC = () => {
    const {state} = useLocation()
    // const dispatch = useDispatch()
    // const store = useSelector((store: RootState) => store.api)
    // const getCharacterById = useCallback(() => {
    //     dispatch(fetchCharactersById(id))
    // }, [dispatch])

    useEffect(() => {
        console.log(state)
    }, [])



    return (
        <div className="character-detail-page-container">
            <div className="home-page-container__preview">
                <img src={state.character ? state.character.img : ''} alt={''}/>
            </div>
            <div className="container">
                {/*<CharacterInfo character={store.currentCharacter}/>*/}
            </div>
            {/*<div className="home-page-container__preview">*/}
            {/*    <img src={store.currentCharacter.img} alt={store.currentCharacter.name}/>*/}
            {/*</div>*/}
            {/*<div className="container">*/}
            {/*    <CharacterInfo character={store.currentCharacter}/>*/}
            {/*</div>*/}
        </div>
    )
}



