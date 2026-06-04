import EmojiCard from './EmojiCard';
import emojis from '../data/emojis';

function EmojiList() {
    return (
        <section className="emoji-list">

            {emojis.map((emoji, index) => (
                <EmojiCard
                    key={index}
                    emoji={emoji}
                />
            ))}

        </section>
    );
}

export default EmojiList;