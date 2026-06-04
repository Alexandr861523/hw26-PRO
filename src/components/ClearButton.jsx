function ClearButton({ onClear }) {
    return (
        <button
            className="clear-btn"
            onClick={onClear}
        >
            Clear results
        </button>
    );
}

export default ClearButton;