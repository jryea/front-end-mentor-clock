import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <aside className="quote-section">
        <p className="quote">
          "The science of operations, as drived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value."
        </p>
        <p className="quote-author">Ada Lovelace</p>
      </aside>
      <main>
        <div className="time-section">
          <h3>Good evening, it's currently</h3>
          <h1>23:14 BST</h1>
          <h2>In London, UK</h2>
        </div>
        <div className="time-button"></div>
      </main>
      <section className="more-section">
        <div className="more-section-left">
          <div className="more-info-block">
            <h2 className="more-title">Current timezone</h2>
            <p className="more-info">Day of the year</p>
          </div>
          <div className="more-info-block">
            <h2 className="more-title">Day of the year</h2>
            <p className="more-info">295</p>
          </div>
        </div>
        <div className="more-section-right">
          <div className="more-info-block">
            <h2 className="more-title">Day of the week</h2>
            <p className="more-info">5</p>
          </div>
          <div className="more-info-block">
            <h2 className="more-title">Week number</h2>
            <p className="more-info">42</p>
          </div>
        </div>
      </section>
    </div>
  );
}
