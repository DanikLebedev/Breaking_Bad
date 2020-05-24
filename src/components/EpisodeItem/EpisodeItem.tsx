import React, {FC} from "react";
import {Episode} from "../../interfaces";
import './EpisodeItem.scss';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

interface EpisodeItemProps {
    episode: Episode
}

export const EpisodeItem: FC<EpisodeItemProps> = ({episode}) => {
    return (
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}  className={'episode-info__wrapper'}>
            <AccordionItem  className={'episode-info'}>
                <AccordionItemHeading className={'episode-info__heading'}>
                    <AccordionItemButton className={'episode-info__heading-button'}>
                        {episode.episode +'.' +  ' ' + episode.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p>Episode's number: {episode.episode}</p>
                   <p>Air Date: {episode.air_date}</p>
                   <p>Characters: {episode.characters.map(item => <span key={item + new Date().getTime()} className={'appearance-item'}> {item}</span>)}</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}
