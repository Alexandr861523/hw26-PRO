function ResultsSection({
    winner,
    noResults,
    onShowResults,
}) {
    return (
        <section className="results">

            <button
                className="show-results-btn"
                onClick={onShowResults}
            >
                Show Results
            </button>

            {noResults && (
                <p className="no-results">
                    No results yet
                </p>
            )}

            {winner && (
                <div className="winner">

                    <h2>Winner</h2>

                    <div
                        className="winner-emoji"
                        dangerouslySetInnerHTML={{
                            __html: winner.code,
                        }}
                    />

                </div>
            )}

        </section>
    );
}

export default ResultsSection;