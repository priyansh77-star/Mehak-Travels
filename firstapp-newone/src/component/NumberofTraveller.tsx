function NumberOfTraveller(props: any) {
  return (
    <div>
       <label>Number Of Traveller:</label><input
        type="number"
        value={props.noOfTraveller}
        placeholder="Enter Number Of Traveller"
        onChange={(e) => props.setNoOfTraveller(e.target.value)}
      />

    </div>
  );
}

export default NumberOfTraveller;
