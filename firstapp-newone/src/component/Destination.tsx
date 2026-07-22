function DestinationCards({ onSelectDestination }: { onSelectDestination: (city: string) => void }) {
  return (
    <section>
      <h2>Popular Destinations</h2>

      <div className="destination-container">
        <div className="destination-card" onClick={() => onSelectDestination("Manali")}>
          <h3>🏔️ Manali</h3>
          <p>Adventure, Nature & Peace</p>
          <b>₹19,999</b>
        </div>

        <div className="destination-card" onClick={() => onSelectDestination("Kerala")}>
          <h3>🌴 Kerala</h3>
          <p>Backwaters & Beautiful Beaches</p>
          <b>₹22,999</b>
        </div>

        <div className="destination-card" onClick={() => onSelectDestination("Mumbai")}>
          <h3>🌆 Mumbai</h3>
          <p>City Life & Famous Places</p>
          <b>₹29,999</b>
        </div>
      </div>
    </section>
  );
}

export default DestinationCards;

