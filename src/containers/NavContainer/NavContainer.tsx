import React from 'react'
import './NavContainer.scss'
import {BaseNavLink} from "../../components/NavLink";

export const NavContainer = () => {
    return (
        <nav>
            <ul className="cl-effect-12">
                <BaseNavLink to={'/'} label={'Home'}/>
                <BaseNavLink to={'/characters'} label={'Characters'}/>
                <BaseNavLink to={'/episodes'} label={'Episodes'}/>
            </ul>
        </nav>
    )
}
