function EmojiCard({
    emoji,
    votes,
    onVote,
}) {
    return (
        <div className="emoji-card">

            <div
                className="emoji"
                dangerouslySetInnerHTML={{
                    __html: emoji.code,
                }}
            />

            <p>Votes: {votes}</p>

            <button onClick={() => onVote(emoji.id)}>
                Vote
            </button>

        </div>
    );
}

export default EmojiCard;