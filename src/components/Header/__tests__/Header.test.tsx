import React from 'react'; // Add this import
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../Header';

describe('Header', () => {
  // Test to check if the Header component renders correctly
  it('renders correctly', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check the presence of text and links in the header
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const characterLink = screen.getByText('Character');
    expect(characterLink).toBeInTheDocument();

    const episodeLink = screen.getByText('Episode');
    expect(episodeLink).toBeInTheDocument();
  });

  // Test to check if the links navigate to the correct routes
  it('navigates to correct routes', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if the links navigate to the correct routes
    const homeLink = screen.getByText('Home') as HTMLAnchorElement;
    expect(homeLink.href).toContain('/');

    const characterLink = screen.getByText('Character') as HTMLAnchorElement;
    expect(characterLink.href).toContain('/character');

    const episodeLink = screen.getByText('Episode') as HTMLAnchorElement;
    expect(episodeLink.href).toContain('/episode');
  });
});
