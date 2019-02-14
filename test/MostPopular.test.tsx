import TestRenderer from 'react-test-renderer';
import MostPopular from '../src/MostPopular';
import React from 'react';

describe('MostPopular', () => {
    test('renders correctly', () => {
        let mostPopular = TestRenderer.create(<MostPopular cardStyle="default" mostRead={[{uuid: '1', label: 'title van nieuwsbericht', url: 'https://fd.nl'}]} mostComments={[{uuid: '2', label: 'title van nieuwsbericht 2', url: 'https://fd.nl'}]}/>);
        expect(mostPopular.toJSON()).toMatchSnapshot();
        mostPopular = TestRenderer.create(<MostPopular cardStyle="article" mostReadLabel="Meest gelezen tab" mostRead={[{uuid: '1', label: 'title van nieuwsbericht', url: 'https://fd.nl'}]} mostCommentsLabel="Meeste comments label" mostComments={[{uuid: '2', label: 'title van nieuwsbericht 2', url: 'https://fd.nl'}]}/>);
        expect(mostPopular.toJSON()).toMatchSnapshot();
    });

    test('renders is-read correctly', () => {
        let mostPopular = TestRenderer.create(<MostPopular cardStyle="persoonlijk" mostRead={[{uuid: '1', isRead: true, label: 'title van nieuwsbericht', url: 'https://fd.nl'}]} mostComments={[{uuid: '2', isRead: true, label: 'title van nieuwsbericht 2', url: 'https://fd.nl'}]}/>);
        expect(mostPopular.toJSON()).toMatchSnapshot();
    });
});
