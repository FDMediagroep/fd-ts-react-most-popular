import React, { useState } from "react";
import { createGlobalStyle, css } from "styled-components";
import Card, { CardStyle, CardTypes } from "@fdmg/fd-card";

interface NewsItem {
    uuid: string;
    isRead?: boolean;
    label: string;
    url: string;
    target?: string;
}

export interface Props {
    cardStyle: CardTypes;
    mostReadLabel?: string;
    mostRead: NewsItem[];
    mostCommentsLabel?: string;
    mostComments: NewsItem[];
}

export default function MostPopular(props: Props) {
    const [active, setActive] = useState('tab-most-read');
    const handleTabClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
        setActive(e.currentTarget.classList.item(0) as any);
    };

    return (
        <>
            <GlobalStyle/>

            <Card cardStyle={props.cardStyle} className="fd-most-popular">
                <div className="tab-header">
                    <h3 className={`tab-most-read${active === 'tab-most-read' ? ' active' : ''}`} onClick={handleTabClick}>{props.mostReadLabel ? props.mostReadLabel : 'Meest gelezen'}</h3>
                    {props.mostComments.length ? <h3 className={`tab-most-comments${active === 'tab-most-comments' ? ' active' : ''}`} onClick={handleTabClick}>{props.mostCommentsLabel ? props.mostCommentsLabel : 'Meeste reacties'}</h3> : null}
                </div>
                <ol className={active === 'tab-most-read' ? ' active' : ''}>
                    {
                        props.mostRead.map((newsItem: NewsItem) => (
                            <li key={newsItem.uuid}>
                                <a href={newsItem.url} target={newsItem.target} className={`${newsItem.isRead ? 'is-read' : ''}`}>{newsItem.label}</a>
                            </li>
                        ))
                    }
                </ol>
                {props.mostComments.length ? (
                    <ol className={active === 'tab-most-comments' ? ' active' : ''}>
                        {
                            props.mostComments.map((newsItem: NewsItem) => (
                                <li key={newsItem.uuid}>
                                    <a href={newsItem.url} target={newsItem.target} className={`${newsItem.isRead ? 'is-read' : ''}`}>{newsItem.label}</a>
                                </li>
                            ))
                        }
                    </ol>
                ) : null}
            </Card>
        </>
    );
}

const styles = css`
.fd-most-popular {
    .tab-header {
        display: flex;
    }
    h3 {
        margin: 0;
        font-size: 1rem;
        font-family: 'ProximaNovaBold' ,sans-serif;
        line-height: 1.1em;
        color: #677381;
        cursor: pointer;
        background: rgba(0,0,0,0.1);
        &.active {
            color: #49a4a2;
            background: transparent;
        }
        flex: 1 1 auto;
        white-space: nowrap;
        box-sizing: border-box;
        display: inline-block;
        padding: 12px 15px;
    }

    ol {
        margin: 0;
        padding: 0;
        display: none;
        &.active {
            display: block;
        }
        li {
            color: #49a4a2;
            display: table;
            font-family: 'ProximaNovaBold', Helvetica, Arial, sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 1.2em;
            min-height: 40px;
            padding: 4px 0;
            width: 100%;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            font-size: 1.875rem;
        }
        li:before {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            width: 42px;
        }
        li:first-child:before {
            content: "1";
        }
        li:first-child+li:before {
            content: "2";
        }
        li:first-child+li+li:before {
            content: "3";
        }
        li:first-child+li+li+li:before {
            content: "4";
        }
        li:first-child+li+li+li+li:before {
            content: "5";
        }
    }

    a {
        display: table-cell;
        font-family: 'ProximaNovaRegular', sans-serif;
        vertical-align: middle;
        color: #191919;
        &:hover {
            color: #49a4a2;
        }
        padding: 6px;
        font-weight: normal;
        text-transform: none;
        text-decoration: none;
        line-height: 1.2em;
        &.is-read {
            opacity: 0.6;
        }
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.0625rem;
        }
    }
}
`;

export const MostPopularStyle = css`
${CardStyle}
${styles}
`;

const GlobalStyle = createGlobalStyle`${MostPopularStyle}`;
