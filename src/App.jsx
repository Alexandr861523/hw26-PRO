import { useEffect, useState } from 'react';

import './App.css';

import Header from './components/Header';
import EmojiList from './components/EmojiList';
import ResultsSection from './components/ResultsSection';
import ClearButton from './components/ClearButton';

import emojis from './data/emojis';

function App() {

    const [votes, setVotes] = useState({});
    const [winner, setWinner] = useState(null);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {

        const savedVotes =
            JSON.parse(localStorage.getItem('votes'));

        if (savedVotes) {
            setVotes(savedVotes);
        } else {

            const initialVotes = {};

            emojis.forEach(emoji => {
                initialVotes[emoji.id] = 0;
            });

            setVotes(initialVotes);
        }

    }, []);

    useEffect(() => {

        if (Object.keys(votes).length) {
            localStorage.setItem(
                'votes',
                JSON.stringify(votes)
            );
        }

    }, [votes]);

    function handleVote(id) {

        setWinner(null);
        setNoResults(false);

        setVotes(prev => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    }

    function showResults() {

        let maxVotes = 0;
        let winnerId = null;
        let hasVotes = false;

        for (const id in votes) {

            if (votes[id] > 0) {
                hasVotes = true;
            }

            if (votes[id] > maxVotes) {
                maxVotes = votes[id];
                winnerId = Number(id);
            }
        }

        if (!hasVotes || maxVotes === 0) {
            setWinner(null);
            setNoResults(true);
            return;
        }

        const winnerEmoji =
            emojis.find(
                emoji => emoji.id === winnerId
            );

        setWinner(winnerEmoji);
        setNoResults(false);
    }

    function clearResults() {

        const resetVotes = {};

        emojis.forEach(emoji => {
            resetVotes[emoji.id] = 0;
        });

        setVotes(resetVotes);
        setWinner(null);
        setNoResults(false);

        localStorage.removeItem('votes');
    }

    return (
        <div className="app">

            <Header />

            <EmojiList
                emojis={emojis}
                votes={votes}
                onVote={handleVote}
            />

            <ResultsSection
                winner={winner}
                noResults={noResults}
                onShowResults={showResults}
            />

            <ClearButton
                onClear={clearResults}
            />

        </div>
    );
}

export default App;