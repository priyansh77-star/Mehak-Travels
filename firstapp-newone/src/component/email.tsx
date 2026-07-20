function Email(props: any) {
  return (
    <div>
       <div style={{ marginBottom: "10px" }}>
        <label>Email </label>
    <input
      type="text"
      value={props.email}
      placeholder="Enter Your Email"
      onChange={(e) => props.setEmail(e.target.value)}
    />
    </div>
    </div>
  );
}

export default Email;
