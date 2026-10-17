import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/thank-you/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: () => ({
    meta: [
      { title: "Thank you — PixelVault" },
      { name: "description", content: "Enter your email to receive your product." },
      { property: "og:title", content: "Thank you — PixelVault" },
      { property: "og:description", content: "Enter your email to receive your product." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  const { product } = Route.useLoaderData();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <Shell>
      <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-8 text-center">
        <p className="text-5xl">🎉</p>
        <h1 className="mt-4 font-display text-3xl font-bold">Payment successful!</h1>
        {sent ? (
          <p className="mt-4 text-muted-foreground">
            Thanks! <span className="text-foreground">{product.name}</span> will be sent to{" "}
            <span className="text-primary">{email}</span> shortly.
          </p>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <p className="text-muted-foreground">
              Enter your email and we'll send <span className="text-foreground">{product.name}</span> to you.
            </p>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary"
            />
            <button className="w-full rounded-lg bg-primary py-3 font-bold text-primary-foreground hover:opacity-90">
              Send my product
            </button>
          </form>
        )}
      </div>
    </Shell>
  );
}
