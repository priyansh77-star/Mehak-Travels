function Age(props: any) {
  return (
    <div>
       <div style={{ marginBottom: "10px" }}>
      <label>Age : </label>
    <input
      type="number"
      value={props.age}
      placeholder="Enter Your Age"
      onChange={(e) => props.setAge(e.target.value)}
    />
    </div>
    </div>
  );
}


export default Age
