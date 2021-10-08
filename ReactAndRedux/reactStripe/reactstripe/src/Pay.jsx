import StripeCheckout from "react-stripe-checkout"

const KEY = "pk_test_51JiIKUEBhQiQRacKjzJI9SRfzp7iPMrGx3lozF50rUbLUHHItTM2tS9R0WZpSKcrIm4lA2XV7d9UDNcPOCTLCK0C00qUJ6HFg7"

const Pay = () => {

const onToken = (token) => {
    console.log(token)
}

    return(
<div
style={{
    hegiht:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}}>
<StripeCheckout
  name= "Izaac Shop" 
  image = "https://avatars.githubusercontent.com/u/1486366?v=4"
  billingAddress
  shippingAddress
  description= "Your total is $20"
  amount = {2000}
  token={onToken}
  stripeKey={KEY}
  
  >
<button 
style= {{
    border:"none",
    width: 120,
    borderRadius:5,
    padding: "20px",
    backgroundColor: "black",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
}}
> Pay Now
</button>
</StripeCheckout>

</div>
    )
}

export default Pay