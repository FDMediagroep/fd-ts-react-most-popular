import TestRenderer from 'react-test-renderer';
import MostPopular from '../src/MostPopular';
import React from 'react';

describe('LatestNews', () => {
    test('renders correctly', () => {
        let mostPopular = TestRenderer.create(<MostPopular mostRead={[{uuid: '1', label: 'title van nieuwsbericht', url: 'https://fd.nl'}]} mostComments={[{uuid: '2', label: 'title van nieuwsbericht 2', longread: true, url: 'https://fd.nl'}]}/>);
        expect(mostPopular.toJSON()).toMatchSnapshot();
    });

    test('renders is-read correctly', () => {
        let latestNews = TestRenderer.create(<MostPopular mostRead={[{uuid: '1', isRead: true, label: 'title van nieuwsbericht', url: 'https://fd.nl'}]} mostComments={[{uuid: '2', label: 'title van nieuwsbericht 2', longread: true, url: 'https://fd.nl'}]}/>);
        expect(latestNews.toJSON()).toMatchSnapshot();
    });
});
