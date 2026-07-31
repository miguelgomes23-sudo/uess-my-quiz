export const fieldInputClass =
  "w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted/70 transition-colors focus:border-ring/60 focus:outline-none focus:ring-2 focus:ring-ring/30";

export const fieldSelectClass =
  "w-full appearance-none rounded-xl border border-white/10 bg-surface px-4 py-2.5 text-sm text-foreground transition-colors focus:border-ring/60 focus:outline-none focus:ring-2 focus:ring-ring/30";

export const toggleButtonClass = (active: boolean) =>
  `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
    active
      ? "bg-accent text-accent-foreground"
      : "bg-background text-muted hover:text-foreground"
  }`;
