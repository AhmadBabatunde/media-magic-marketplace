import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.product.name} — PixelVault` : "Product — PixelVault" },
      { name: "description", content: loaderData?.product.tagline ?? "PixelVault product" },
      { property: "og:title", content: loaderData?.product.name ?? "PixelVault product" },
      { property: "og:description", content: loaderData?.product.tagline ?? "PixelVault product" },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <Shell>
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← All products</Link>
      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <img src={product.image} alt={product.name} width={816} height={816} className="w-full rounded-xl border border-border" />
        <div>
          <p className="text-sm uppercase tracking-widest text-accent">{product.category}</p>
          <h1 className="mt-2 font-display text-4xl font-bold">{product.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{product.tagline}</p>
          <p className="mt-6 leading-relaxed">{product.description}</p>
          <p className="mt-8 text-4xl font-bold text-primary">${product.price}</p>
          <Link
            to="/checkout/$id"
            params={{ id: product.id }}
            className="mt-6 inline-block w-full rounded-lg bg-primary px-8 py-4 text-center font-display text-lg font-bold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Pay Now
          </Link>
        </div>
      </div>
    </Shell>
  );
}
