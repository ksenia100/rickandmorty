import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Episode } from 'types/type';
import EpisodeList from '../EpisodeList';

describe('EpisodeList', () => {

  const mockEpisodes: Episode[] = [
    {
      id: 1,
      name: 'Pilot',
      air_date: 'December 2, 2013',
      episode: 'S01E01',
      characters: ['Rick', 'Morty']
    },
    {
      id: 2,
      name: 'Lawnmower Dog',
      air_date: 'December 9, 2013',
      episode: 'S01E02',
      characters: ['Rick', 'Morty']
    },
  ];

  it('renders episode list correctly', () => {
    render(
      <Router>
        <EpisodeList episodes={mockEpisodes} />
      </Router>
    );

    const episodeListContainer = screen.getByTestId('episode-list');
    expect(episodeListContainer).toBeInTheDocument();

    const episodeLink1 = screen.getByText('Pilot - December 2, 2013');
    expect(episodeLink1).toBeInTheDocument();

    const episodeLink2 = screen.getByText('Lawnmower Dog - December 9, 2013');
    expect(episodeLink2).toBeInTheDocument();
  });

  it('renders correct episode links', () => {
    render(
      <Router>
        <EpisodeList episodes={mockEpisodes} />
      </Router>
    );

    const link1 = screen.getByText('Pilot - December 2, 2013').closest('a');
    expect(link1).toHaveAttribute('href', '/episode/1');

    const link2 = screen.getByText('Lawnmower Dog - December 9, 2013').closest('a');
    expect(link2).toHaveAttribute('href', '/episode/2');
  });
});
