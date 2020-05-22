import React, {useCallback, useEffect} from 'react'
import {CharactersPageContainer} from '../../containers/CharactersPageContainer'
import {useDispatch} from "react-redux";
import {fetchCharacters} from "../../store/actions/actionCreators";

export const CharactersPage = () => {
    const dispatch = useDispatch()
    const fetchAllCharacters = useCallback(() => {
        dispatch(fetchCharacters('characters?limit=3'))
    }, [])

    useEffect(() => {
        fetchAllCharacters()
    }, [])
    return (
        <div>
            <CharactersPageContainer/>
        </div>
    )
}
