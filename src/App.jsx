import './App.css';

import Header from './components/Header';
import EmojiList from './components/EmojiList';
import ResultsSection from './components/ResultsSection';
import ClearButton from './components/ClearButton';

function App() {
    return (
        <div className="app">

            <Header />

            <EmojiList />

            <ResultsSection />

            <ClearButton />

        </div>
    );
}

export default App;