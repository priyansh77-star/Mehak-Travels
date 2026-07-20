function ModeOfTransport(props: any) {
  return (
    <div>
         <div style={{ marginBottom: "10px" }}>
      <label>Mode of Transport</label>
      <select
        value={props.modeOfTransport}
        onChange={(e) => props.setModeOfTransport(e.target.value)}
      >
        <option value="">Select Mode Of Transport</option>
        <option value="Flight">Flight</option>
        <option value="Train">Train</option>
        <option value="Bus">Bus</option>
        <option value="Car">Car</option>
      </select>
    </div>
    </div>
  );
}

export default ModeOfTransport;
