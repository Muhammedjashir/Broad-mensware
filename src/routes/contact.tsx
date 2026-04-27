import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Instagram, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BROAD. — Mananthavady, Kerala" },
      { name: "description", content: "Get in touch with BROAD., Mananthavady. Call 062821 43757, visit Century Hotel Road or send us a message." },
      { property: "og:title", content: "Contact — BROAD. Mananthavady" },
      { property: "og:description", content: "Reach BROAD. in Mananthavady, Kerala." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-px mx-auto max-w-7xl py-12 md:py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-blend-gradient font-semibold">Contact</p>
        <h1 className="mt-3 font-display text-6xl text-primary md:text-8xl">Hit Us Up</h1>
        <div className="divider mt-6 w-32" />
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          Questions about a drop, your size, or stock? We got you.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="md:col-span-3 space-y-5 rounded-3xl border border-border bg-background p-6 md:p-10"
        >
          <Field label="Name" name="name" placeholder="Your name" />
          <Field label="Phone" name="phone" type="tel" placeholder="Your phone number" />
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              placeholder="How can we help?"
              className="mt-2 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-blend-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:scale-105 transition-transform"
          >
            <Send className="h-4 w-4" /> {sent ? "Sent — we'll be in touch" : "Send Message"}
          </button>
        </form>

        <aside className="md:col-span-2 space-y-6">
          <InfoCard icon={MapPin} title="Visit Store">
            Near Century Hotel Road,<br />Mananthavady, Kerala 670645
          </InfoCard>
          <InfoCard icon={Phone} title="Call Us">
            <a href="tel:06282143757" className="hover:text-accent">062821 43757</a>
          </InfoCard>
          <InfoCard icon={Clock} title="Hours">
            Open Daily · Closes 10 PM
          </InfoCard>
          <InfoCard icon={Instagram} title="Follow">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent">@broadmananthavady</a>
          </InfoCard>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blend-gradient text-white">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{title}</h3>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
