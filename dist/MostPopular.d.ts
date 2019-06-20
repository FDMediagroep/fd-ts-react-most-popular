import { CardTypes } from "@fdmg/fd-card";
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
export default function MostPopular(props: Props): JSX.Element;
export declare const MostPopularStyle: import("styled-components").FlattenSimpleInterpolation;
export {};
