import React, {FC} from "react";
import './BaseButton.scss'

interface BaseButtonProps {
    showMore: (id?: string) => void;
    label: string;
    arg?: string;
}

export const BaseButton:FC<BaseButtonProps> = ({label, showMore, arg}) => {
    return (
        <button className={'base-button'} onClick={() => showMore(arg)}>{label}</button>
    )
}
