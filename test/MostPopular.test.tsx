import TestRenderer from 'react-test-renderer';
import MostPopular from '../src/MostPopular';
import React from 'react';

describe('MostPopular', () => {
    test('renders correctly', () => {
        let mostPopular = TestRenderer.create(<MostPopular mostRead={[{uuid: '1', label: 'title van nieuwsbericht', longread: true, url: 'https://fd.nl'}]} mostComments={[{uuid: '2', label: 'title van nieuwsbericht 2', url: 'https://fd.nl'}]}/>);
        expect(mostPopular.toJSON()).toMatchSnapshot();
        mostPopular = TestRenderer.create(<MostPopular mostReadLabel="Meest gelezen tab" mostRead={[{uuid: '1', label: 'title van nieuwsbericht', url: 'https://fd.nl'}]} mostCommentsLabel="Meeste comments label" mostComments={[{uuid: '2', label: 'title van nieuwsbericht 2', longread: true, url: 'https://fd.nl'}]}/>);
        expect(mostPopular.toJSON()).toMatchSnapshot();
    });

    test('renders is-read correctly', () => {
        let mostPopular = TestRenderer.create(<MostPopular mostRead={[{uuid: '1', isRead: true, label: 'title van nieuwsbericht', url: 'https://fd.nl'}]} mostComments={[{uuid: '2', isRead: true, label: 'title van nieuwsbericht 2', longread: true, url: 'https://fd.nl'}]}/>);
        expect(mostPopular.toJSON()).toMatchSnapshot();
    });
});
