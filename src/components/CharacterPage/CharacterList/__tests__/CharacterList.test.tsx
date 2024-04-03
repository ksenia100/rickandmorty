import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Character } from 'types/type';
import CharacterList from '../CharacterList';

describe('CharacterList', () => {
  const mockCharacters: Character[] = [
    { 
      id: 1, 
      name: 'Rick Sanchez', 
      img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 
      status: 'Alive'
    },
    { 
      id: 2, 
      name: 'Morty Smith',  
      img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 
      status: 'Alive'
    },
  ];

  it('renders characters list correctly', () => {
    render(
      <Router>
        <CharacterList characters={mockCharacters} />
      </Router>
    );

    const characterListContainer = screen.getByTestId('list__container');
    expect(characterListContainer).toBeInTheDocument();

    const characterLink1 = screen.getByText('Rick Sanchez');
    expect(characterLink1).toBeInTheDocument();

    const characterLink2 = screen.getByText('Morty Smith');
    expect(characterLink2).toBeInTheDocument();
  });

  it('renders correct characters links', () => {
    render(
      <Router>
        <CharacterList characters={mockCharacters} />
      </Router>
    );

    const link1 = screen.getByText('Rick Sanchez').closest('a');
    expect(link1).toHaveAttribute('href', '/character/1');

    const link2 = screen.getByText('Morty Smith').closest('a');
    expect(link2).toHaveAttribute('href', '/character/2');
  });
});
