function From(props: any) {
  return (
    <div>
      <label>From</label>

      <input
        type="text"
        value={props.from}
        onChange={(e) => props.setFrom(e.target.value)}
        placeholder="Enter source"
      />
    </div>
  );
}

export default From;
