> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-most-popular.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-most-popular)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-most-popular/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-most-popular?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-most-popular.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-most-popular)

# fd-most-popular

FD-themed Most Popular Card.

# Installation

-   Run `npm i -D @fdmg/fd-most-popular`

# Demo

To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.

-   [Demo](http://static.fd.nl/react/most-popular/demo.html)

# Usage

```
import MostPopular from '@fdmg/fd-most-popular';
...
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
```
