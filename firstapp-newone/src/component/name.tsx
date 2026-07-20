function Name(props: any) {
  return (
    <div> 
         <div style={{ marginBottom: "10px" }}>
        <label> Name:</label>
    <input
      type="text"
      value={props.name}
      placeholder="Enter Your Name "
      onChange={(e) => props.setName(e.target.value)}
    />
    </div>
    </div>
  );
}
export default Name