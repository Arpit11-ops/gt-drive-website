import { ChatCircleDots } from "@phosphor-icons/react/dist/ssr";

export function ContactFinalCTA() {
  return (
    <section className="bg-[var(--color-green)] py-14 md:py-16">
      <div className="mx-auto max-w-[var(--container-page)] px-6 text-center md:px-12 lg:px-16">
        <ChatCircleDots
          size={40}
          weight="fill"
          className="mx-auto mb-5 text-white"
        />
        <h2 className="font-display text-[clamp(22px,2.6vw,34px)] font-extrabold uppercase leading-[1.1] tracking-[-0.025em] text-white">
          Have a question? <span className="text-white/80">Send us a message.</span>
        </h2>
      </div>
    </section>
  );
}
