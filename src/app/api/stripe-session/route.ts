import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, { apiVersion:"2025-01-27.acacia"});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("Received body:", body);  // Log the request body to check

  try {
    if (body.length > 0) {
      console.log("Creating Stripe session with line_items:", body.map((item: any) => ({
        price_data: {
          currency: "pkr",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })));

      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1QmgZhIwSzPTDfljlABjjoSE" },
          { shipping_rate: "shr_1QmgYEIwSzPTDfljSIX8HMRh" },
        ],
        invoice_creation: {
          enabled: true,
        },
        line_items: body.map((item: any) => ({
          price_data: {
            currency: "pkr",
            product_data: { name: item.name },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
        })),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/shipment`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });

      console.log("Stripe session created:", session);

      return NextResponse.json({ session });
    } else {
      console.log("No products in body.");
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.error("Error creating session:", err);
    return NextResponse.json({ error: err.message, details: err });
  }
}
