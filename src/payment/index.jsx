import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkOutForm";
import "./payment.css";
import { postApi } from "../services/apiCaller.service";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51N0AOWFIB8VTBZ49ZyW5mGM9pBVNA83KfcoYiiBawG3YOFVs8N5urG3upbxzzHhRQRLx3t0O2AddepkXqcIN3kF900B2LhJswR");

export default function Payment() {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {

        const createPayment = async () => {
            const response = await postApi({
                url: `${process.env.REACT_APP_BASE_URL}/payment/create`,
                method: "POST",
                body: { amount: 100 }
            }
            );

            setClientSecret(response.data.data)
        }
        createPayment();
    }, []);
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <div>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}