import React, { PureComponent } from "react";
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
    state: any;
    handleTabClick: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    render(): JSX.Element;
}
export declare const MostPopularStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export {};
