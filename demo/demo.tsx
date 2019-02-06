import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import MostPopular from '../src/MostPopular';
import uniqid from 'uniqid';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #f1ded0;
    }
    .root-container {
        margin-bottom: 1rem;
    }
`;

ReactDOM.render(<>
        <GlobalStyles/>

        <div className="root-container">
            <MostPopular
                mostRead={[{
                    uuid: uniqid(),
                    isRead: true,
                    label: 'Trump vraagt om politieke samenwerking in State of the Union',
                    url: '/economie-politiek/1288267/trump-vraagt-om-politieke-samenwerking-in-state-of-the-union',
                }, {
                    uuid: uniqid(),
                    isRead: true,
                    label: 'Leraren slaan alarm: scholen stoppen met informatica in de bovenbouw',
                    url: 'https://fd.nl/economie-politiek/1287621/leraren-slaan-alarm-scholen-stoppen-met-informatica-in-de-bovenbouw'
                }, {
                    uuid: uniqid(),
                    label: 'Verschillen tussen eurolanden gaan weer opspelen ',
                    url: 'https://fd.nl/achtergrond/1288289/verschillen-tussen-eurolanden-gaan-weer-opspelen',
                    longread: true
                }, {
                    uuid: uniqid(),
                    label: 'ING boekt meer winst dan verwacht',
                    url: 'https://fd.nl/ondernemen/1288060/ing-boekt-meer-winst-dan-verwacht'
                }, {
                    uuid: uniqid(),
                    label: 'ING blinkt uit op hoger Damrak',
                    url: 'https://fd.nl/beurs/1288359/beleggers-reageren-op-cijfers-ing-en-tomtom'
                }]}
                mostComments={[{
                    uuid: uniqid(),
                    label: 'Vertrouwen van werknemers is kostbaar goed dat menige werkgever keer op keer blijft beschamen',
                    url: 'https://fd.nl/opinie/1288043/vertrouwen-van-werknemers-is-kostbaar-goed-dat-menige-werkgever-keer-op-keer-blijft-beschamen'
                }, {
                    uuid: uniqid(),
                    label: 'Verschillen tussen eurolanden gaan weer opspelen',
                    longread: true,
                    url: 'https://fd.nl/achtergrond/1288289/verschillen-tussen-eurolanden-gaan-weer-opspelen'
                }, {
                    uuid: uniqid(),
                    label: 'Politieke druk op Vestager is onverteerbaar',
                    url: 'https://fd.nl/economie-politiek/1288325/politieke-druk-op-vestager-is-onverteerbaar'
                }, {
                    uuid: uniqid(),
                    isRead: true,
                    label: 'Leraren slaan alarm: scholen stoppen met informatica in de bovenbouw',
                    url: 'https://fd.nl/economie-politiek/1287621/leraren-slaan-alarm-scholen-stoppen-met-informatica-in-de-bovenbouw'
                }, {
                    uuid: uniqid(),
                    label: 'Zorgsector kan kunstmatige intelligentie veel slimmer inzetten',
                    url: 'https://fd.nl/opinie/1288142/zorgsector-kan-kunstmatige-intelligentie-veel-slimmer-inzetten'
                }]}
            />
        </div>
    </>,
    document.getElementById('root'));
