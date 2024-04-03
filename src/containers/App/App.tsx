import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/Header';
import HomePage from '../../containers/HomePage';
import CharacterPage from '../../containers/CharacterPage';
import EpisodePage from '../../containers/EpisodePage';

import CharacterDetails from '../../components/CharacterPage/CharacterDetails';
import EpisodeDetails from '../../components/EpisodePage/EpisodeDetails';

import styles from "./App.module.css";

const App: React.FC = () => {
    
    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/character" element={<CharacterPage />} />
                    <Route path="/character/:id" element={<CharacterDetails />} />
                    <Route path="/episode" element={<EpisodePage />} />
                    <Route path="/episode/:id" element={<EpisodeDetails />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;