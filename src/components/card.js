import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class Card extends Component {
  constructor() {
    super();
    this.state = { stripe: null };
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({
        stripe: window.Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx")
      });
    } else {
      setTimeout(() => {
        document.querySelector("#stripe-js").addEventListener("load", () => {
          // Create Stripe instance once Stripe.js loads
          this.setState({
            stripe: window.Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx")
          });
        });
      }, 3000);
      console.log(document.getElementById("stripe-js"));
      /* document.querySelector("#stripe-js").addEventListener("load", () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({
          stripe: window.Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx")
        });
      }) */
    }
  }
  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Card;
