import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";
import Card from "@fdmg/fd-card";

interface NewsItem {
    uuid: string;
    isRead?: boolean;
    label: string;
    url: string;
    longread?: boolean;
    target?: string;
}

export interface Props {
    mostReadLabel?: string;
    mostRead: NewsItem[];
    mostCommentsLabel?: string;
    mostComments: NewsItem[];
}

export default class MostPopular extends PureComponent<Props, any> {
    state: any = {
        active: 'tab-most-read'
    };

    handleTabClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
        this.setState({
            active: e.currentTarget.classList.item(0)
        });
    }

    render() {
        return (
            <>
                <GlobalStyle/>

                <Card className="fd-most-popular">
                    <div className="tab-header">
                        <h3 className={`tab-most-read${this.state.active === 'tab-most-read' ? ' active' : ''}`} onClick={this.handleTabClick}>{this.props.mostReadLabel ? this.props.mostReadLabel : 'Meest gelezen'}</h3>
                        <h3 className={`tab-most-comments${this.state.active === 'tab-most-comments' ? ' active' : ''}`} onClick={this.handleTabClick}>{this.props.mostCommentsLabel ? this.props.mostCommentsLabel : 'Meeste reacties'}</h3>
                    </div>
                    <ol className={`tab-most-read-content${this.state.active === 'tab-most-read' ? ' active' : ''}`}>
                        {
                            this.props.mostRead.map((newsItem: NewsItem) => (
                                <li key={newsItem.uuid}>
                                    <a href={newsItem.url} target={newsItem.target} className={`${newsItem.longread ? 'longread' : ''} ${newsItem.isRead ? 'is-read' : undefined}`}>{newsItem.label}</a>
                                </li>
                            ))
                        }
                    </ol>
                    <ol className={`tab-most-comments-content${this.state.active === 'tab-most-comments' ? ' active' : ''}`}>
                        {
                            this.props.mostComments.map((newsItem: NewsItem) => (
                                <li key={newsItem.uuid}>
                                    <a href={newsItem.url} target={newsItem.target} className={`${newsItem.longread ? 'longread' : ''} ${newsItem.isRead ? 'is-read' : undefined}`}>{newsItem.label}</a>
                                </li>
                            ))
                        }
                    </ol>
                </Card>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-most-popular {
    h3 {
        margin: 0;
        font-size: 1rem;
        font-family: ProximaNovaBold,sans-serif;
        line-height: 1.1em;
        color: #677381;
        cursor: pointer;
        background: rgba(0,0,0,0.1);
        &.active {
            color: #49a4a2;
            background: transparent;
        }
        width: 50%;
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
        &.longread:hover {
            color: #f05031;
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

export {GlobalStyle as MostPopularStyle};
