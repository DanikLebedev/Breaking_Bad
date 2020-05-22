import React from 'react'
import {NavLink} from "react-router-dom";
import './NavLink.scss'

export const BaseNavLink = (props: { to: string, label: string }) => {
    return (
        <NavLink to={props.to} activeClassName={'active-link'} className={'nav-link'}>{props.label}</NavLink>
    )
}
