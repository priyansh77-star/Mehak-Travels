
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

<option value="Basic - ₹9999">
Basic Package - From ₹9,999
</option>

<option value="Premium - ₹18999">
Premium Package - From ₹18,999
</option>

</select>

</div>

)

}

export default TravelPackage;
