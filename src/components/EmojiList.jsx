import EmojiCard from './EmojiCard';

function EmojiList({
    emojis,
    votes,
    onVote,
}) {
    return (
        <section className="emoji-list">

            {emojis.map(emoji => (
                <EmojiCard
                    key={emoji.id}
                    emoji={emoji}
                    votes={votes[emoji.id]}
                    onVote={onVote}
                />
            ))}

        </section>
    );
}

export default EmojiList;