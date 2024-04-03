import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'; // Import this line
import EpisodeNav from '../EpisodeNav';

describe('EpisodeNav', () => {
  
  const mockOnPageChange = jest.fn();

  it('renders episode navigation links', () => {
    render(
      <Router>
        <EpisodeNav onPageChange={mockOnPageChange} currentPage={1} />
      </Router>
    );

    // Check if navigation links are present
    const link1 = screen.getByText('1');
    expect(link1).toBeInTheDocument();

    const link2 = screen.getByText('2');
    expect(link2).toBeInTheDocument();

    const link3 = screen.getByText('3');
    expect(link3).toBeInTheDocument();
  });

  it('calls onPageChange when links are clicked', () => {
    render(
      <Router>
        <EpisodeNav onPageChange={mockOnPageChange} currentPage={1} />
      </Router>
    );

    // Simulate clicking on the links
    fireEvent.click(screen.getByText('1'));
    expect(mockOnPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText('2'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByText('3'));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });
});
