import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PixelVault — Digital goods for gamers, $2 each" },
      { name: "description", content: "Original guides, wallpapers, sound packs and game assets. Every item just $2." },
      { property: "og:title", content: "PixelVault — Digital goods for gamers" },
      { property: "og:description", content: "Original digital goods for gamers, $2 each." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Shell>
      <section className="mb-14 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">Everything $2</p>
        <h1 className="font-display text-5xl font-bold md:text-6xl">
          Level up your <span className="text-primary">collection</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Original guides, art, sounds and game assets — delivered straight to your inbox.
        </p>
      </section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <Link
            key={p.id}
            to="/product/$id"
            params={{ id: p.id }}
            className="group overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-glow"
          >
            <img src={p.image} alt={p.name} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover" />
            <div className="p-4">
              <p className="text-xs uppercase tracking-widest text-accent">{p.category}</p>
              <h2 className="mt-1 font-display text-lg font-semibold">{p.name}</h2>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-primary">${p.price}</span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground">View →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
