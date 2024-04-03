import React from 'react';
import styles from './CharacterNavigation.module.css';

// Page number component properties
const PageNumber: React.FC<{
    number: number;  // Page number
    isActive: boolean;  // Whether the page is active (currently being shown)
    onClick: () => void;  // Function to be called when the button is clicked
}> = ({ number, isActive, onClick }) => (
    <button
        className={`${styles.pageNumber} ${isActive ? styles.active : ''}`}
        onClick={onClick}>
        {number}
    </button>
);

// Navigation component for character pages
const CharacterNavigation: React.FC<{
    paginate: (pageNumber: number) => void;  // Function to change pages
    currentPage: number;  // Current page
    totalPages: number;  // Total number of pages
}> = ({ paginate, currentPage, totalPages }) => {

    // Function to render page numbers with ellipsis for navigation
    const renderPageNumbers = () => {
        const pageNumbers: JSX.Element[] = [];

        for (let i = 1; i <= totalPages; i++) {
            const isAdjacent = Math.abs(currentPage - i) <= 1;
            const isEllipsis = i === 2 || i === totalPages - 1 || (i === Math.ceil(totalPages / 2) && totalPages > 7);
            if (isAdjacent || isEllipsis) {
                pageNumbers.push(
                    <PageNumber
                        key={i}
                        number={i}
                        isActive={i === currentPage}
                        onClick={() => paginate(i)}
                    />
                );
            }
        }

        if (totalPages > 7 && currentPage > 3) {
            pageNumbers.splice(1, 0, (
                <span key="ellipsis1" className={styles.point}>...</span>
            ));
        }
        if (totalPages > 7 && currentPage < totalPages - 2) {
            pageNumbers.splice(-1, 0, (
                <span key="ellipsis2" className={styles.point}>...</span>
            ));
        }

        return pageNumbers;
    };

    return (
        <div className={styles.navigation}>
            {currentPage > 1 && (
                <button className={styles.arrow} onClick={() => paginate(currentPage - 1)}>
                    &lt;
                </button>
            )}

            <div className={styles.pageNumbers}>
                {renderPageNumbers()}
            </div>

            {currentPage < totalPages && (
                <button className={styles.arrow} onClick={() => paginate(currentPage + 1)}>
                    &gt;
                </button>
            )}
        </div>
    );
};

export default CharacterNavigation; 