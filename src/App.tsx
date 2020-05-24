import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route, withRouter, BrowserRouter as Router} from "react-router-dom";
import {NavContainer} from "./containers/NavContainer/NavContainer";
import {HomePage} from "./pages/HomePage";
import {CharactersPage} from "./pages/CharactersPage";
import {EpisodePage} from "./pages/EpisodePage";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {CharactersDetailPage} from "./pages/CharacterDetailPage";
import {SeasonPage} from "./pages/SeasonPage";

function App() {

    const AnimatedSwitch = withRouter(({location}) => (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" timeout={1000}>
                <Switch location={location}>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/characters/:id" component={CharactersDetailPage} exact />
                    <Route path="/characters" component={CharactersPage} exact/>
                    <Route path="/episodes/season/:id" component={SeasonPage} exact />
                    <Route path="/episodes" component={EpisodePage} exact/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    ));

    return (
        <div className={'app'}>
            <Router>
                <NavContainer/>
                <AnimatedSwitch/>
            </Router>
        </div>
    );
}

export default App
