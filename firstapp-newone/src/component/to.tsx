function To(props: any) {
  return (
    <div>
      <label>To</label>

      <input
        type="text"
        value={props.to}
        onChange={(e) => props.setTo(e.target.value)}
        placeholder="Enter destination"
      />
    </div>
  );
}

export default To;
