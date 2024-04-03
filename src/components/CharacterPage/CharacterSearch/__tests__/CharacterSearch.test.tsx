import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharacterSearch from '../CharacterSearch';

describe('<CharacterSearch />', () => {
  it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<CharacterSearch searchValue="" setSearchValue={() => {}} />);
    const inputElement = getByPlaceholderText('Search...') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it('updates searchValue when typing', () => {
    const setSearchValueMock = jest.fn();
    const { getByPlaceholderText } = render(<CharacterSearch searchValue="" setSearchValue={setSearchValueMock} />);
    const inputElement = getByPlaceholderText('Search...') as HTMLInputElement;
    
    fireEvent.change(inputElement, { target: { value: 'a' } });
    
    expect(setSearchValueMock).toHaveBeenCalledWith('a');
  });

  it('displays the correct value', () => {
    const { getByPlaceholderText } = render(<CharacterSearch searchValue="Test" setSearchValue={() => {}} />);
    const inputElement = getByPlaceholderText('Search...') as HTMLInputElement;
    
    expect(inputElement.value).toBe('Test');
  });

  it('updates searchValue correctly on change', () => {
    const setSearchValueMock = jest.fn();
    const { getByPlaceholderText } = render(<CharacterSearch searchValue="OldValue" setSearchValue={setSearchValueMock} />);
    const inputElement = getByPlaceholderText('Search...') as HTMLInputElement;
    
    fireEvent.change(inputElement, { target: { value: 'NewValue' } });
    
    expect(setSearchValueMock).toHaveBeenCalledWith('NewValue');
  });

});
