
function TravelPackage(props:any){

return(

<div>

<label>
Travel Package:
</label>

<select
value={props.packageType}
onChange={(e)=>props.setPackageType(e.target.value)}
>

<option value="">
--Select Travel Package--
</option>

<option value="Basic - ₹5000">
Basic Package - ₹15000
</option>

<option value="Standard - ₹10000">
Standard Package - ₹30000
</option>

<option value="Premium - ₹15000">
Premium Package - ₹50000
</option>

</select>

</div>

)

}

export default TravelPackage;