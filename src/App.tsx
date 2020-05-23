import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route, withRouter, BrowserRouter as Router} from "react-router-dom";
import {NavContainer} from "./containers/NavContainer/NavContainer";
import {HomePage} from "./pages/HomePage";
import {CharactersPage} from "./pages/CharactersPage";
import {EpisodePage} from "./pages/EpisodePage";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {CharactersDetailPage} from "./pages/CharacterDetailPage";

function App() {

    const AnimatedSwitch = withRouter(({location}) => (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" timeout={1000}>
                <Switch location={location}>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/characters/:id" component={CharactersDetailPage} />
                    <Route path="/characters" component={CharactersPage}/>
                    <Route path="/episodes" component={EpisodePage}/>
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
