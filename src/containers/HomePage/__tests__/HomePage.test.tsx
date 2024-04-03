import React from 'react'; 
import { render, screen } from '@testing-library/react';  
import HomePage from '../HomePage';  
import '@testing-library/jest-dom';  

describe('HomePage', () => {  // Describes the test suite for the HomePage component
  
  // First test: checks if the welcome message is displayed
  it('renders welcome message', () => {
    render(<HomePage />);  // Renders the HomePage component

    // Finds an element with the text "Welcome to rick and Morty's site"
    const welcomeMessage = screen.getByText(/Welcome to rick and Morty's site/i);
    
    // Checks if the found element is actually present on the page
    expect(welcomeMessage).toBeInTheDocument();
  });

  // Second test: checks if the text is centered
  it('has a centered text', () => {
    render(<HomePage />);  // Renders the HomePage component again

    // Finds an element with the text "Welcome to rick and Morty's site"
    const centeredText = screen.getByText(/Welcome to rick and Morty's site/i);
    
    // Checks if the found element has the 'center' class
    expect(centeredText).toHaveClass('center'); 
  });
  
});
