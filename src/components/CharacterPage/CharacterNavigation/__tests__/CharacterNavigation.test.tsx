import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import CharacterNavigation from '../CharacterNavigation';

describe('<CharacterNavigation />', () => {
    const paginateMock = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('calls paginate function when a page number button is clicked', () => {
        const { getByText } = render(
            <CharacterNavigation paginate={paginateMock} currentPage={1} totalPages={3} />
        );

        fireEvent.click(getByText('1'));
        expect(paginateMock).toHaveBeenCalledWith(1);
    });

    it('renders page numbers correctly', () => {
        const { getByText } = render(
            <CharacterNavigation paginate={paginateMock} currentPage={1} totalPages={3} />
        );

        expect(getByText('1')).toBeInTheDocument();
        expect(getByText('2')).toBeInTheDocument();
    });
});