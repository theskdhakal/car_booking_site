import express from "express";
import Stripe from "stripe";

const router = express.Router();

router.post("/create-payment-intent", async (req, res) => {
  const secret = process.env.STRIPE_SK;
  const stripe = new Stripe(secret);

  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
});

export default router;
