function Gender(props: any) {
  return (
    <div> <div style={{ marginBottom: "10px" }}>

    <label>Gender</label>
    <select
      value={props.gender}
      onChange={(e) => props.setGender(e.target.value)}
    
    >
      <option value="">Select Your Gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>
    </div>
    </div>
  );
}

export default Gender;
