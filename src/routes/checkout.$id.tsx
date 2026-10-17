import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/checkout/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: () => ({
    meta: [
      { title: "Checkout — PixelVault" },
      { name: "description", content: "Complete your PixelVault purchase." },
      { property: "og:title", content: "Checkout — PixelVault" },
      { property: "og:description", content: "Complete your PixelVault purchase." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

// PLACEHOLDER: real payment will be connected here later.
function Checkout() {
  const { product } = Route.useLoaderData();
  return (
    <Shell>
      <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-8">
        <h1 className="font-display text-3xl font-bold">Checkout</h1>
        <div className="mt-6 flex items-center gap-4">
          <img src={product.image} alt="" width={64} height={64} className="h-16 w-16 rounded-lg object-cover" />
          <div className="flex-1">
            <p className="font-semibold">{product.name}</p>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          <p className="text-xl font-bold text-primary">${product.price}</p>
        </div>
        <div className="mt-6 rounded-lg border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
          Payment form coming soon
        </div>
        <Link
          to="/thank-you/$id"
          params={{ id: product.id }}
          className="mt-6 block rounded-lg bg-primary py-3 text-center font-bold text-primary-foreground hover:opacity-90"
        >
          Complete payment (test)
        </Link>
      </div>
    </Shell>
  );
}
