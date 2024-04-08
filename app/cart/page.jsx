"use client";
import Cart from "../Components/Cart";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const page = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  return (
    <div>
        <Elements stripe={stripePromise}>
        <Cart/>
        </Elements>
    </div>
  )
}

export default page