import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-display text-2xl font-bold tracking-wider">
            PIXEL<span className="text-primary">VAULT</span>
          </Link>
          <span className="text-sm text-muted-foreground">Instant digital delivery</span>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © PixelVault — original digital goods
      </footer>
    </div>
  );
}
