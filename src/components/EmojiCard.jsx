function EmojiCard({ emoji }) {
    return (
        <div className="emoji-card">

            <div
                className="emoji"
                dangerouslySetInnerHTML={{
                    __html: emoji
                }}
            />

            <p>Votes: 0</p>

            <button>
                Vote
            </button>

        </div>
    );
}

export default EmojiCard;