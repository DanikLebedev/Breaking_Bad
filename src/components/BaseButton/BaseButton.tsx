import React, {FC} from "react";
import './BaseButton.scss'

interface BaseButtonProps {
    showMore: (id?: string) => void;
    label: string;
    arg?: string;
}

export const BaseButton:FC<BaseButtonProps> = ({label, showMore, arg}) => {
    const isArg = arg ? arg: undefined
    return (
        <button className={'base-button'} onClick={() => showMore(isArg)}>{label}</button>
    )
}
