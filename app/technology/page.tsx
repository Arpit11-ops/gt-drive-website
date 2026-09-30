import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Technology",
  description: "The considered electric technology inside every GT Drive scooter.",
};

type TechnologyItem = {
  number: string;
  name: string;
  label: string;
  image: string;
  description: string;
  features: string[];
};

const technology: TechnologyItem[] = [
  {
    number: "01",
    name: "Battery",
    label: "Energy, engineered for every day",
    image: "/assets/technology/battery.jpeg",
    description: "High-energy lithium technology gives your ride dependable range, consistent output, and the confidence to go further.",
    features: ["High-Energy Lithium Technology", "Reliable Long-Lasting Performance", "Advanced Battery Protection", "Efficient Power Delivery", "Built For Everyday Reliability"],
  },
  {
    number: "02",
    name: "Controller",
    label: "The intelligence behind the ride",
    image: "/assets/technology/controller.jpeg",
    description: "A precision control system balances power, protection, and response for a smooth ride in every mode.",
    features: ["Precision Power Management", "Advanced Motor Control", "Intelligent Safety Protection", "Smooth, Responsive Performance"],
  },
  {
    number: "03",
    name: "Motor",
    label: "Quiet strength, instant response",
    image: "/assets/technology/motor.jpeg",
    description: "Our high-torque drive motors turn every twist of the throttle into efficient, quiet forward motion.",
    features: ["High-Torque Power Delivery", "Efficient Energy Conversion", "Smooth & Silent Operation", "Built For Long-Term Reliability"],
  },
  {
    number: "04",
    name: "Charger",
    label: "Ready when you are",
    image: "/assets/technology/charger.jpeg",
    description: "Compact, durable charging hardware makes topping up simple, clear, and reliable wherever you park.",
    features: ["Fast & Efficient Charging", "Smart LED Status Indicators", "Compact & Durable Design", "Reliable Charging Performance"],
  },
  {
    number: "05",
    name: "Tyre",
    label: "Confidence in every contact patch",
    image: "/assets/technology/tyre.jpeg",
    description: "A road-ready tyre and braking package keeps the scooter composed through city streets and changing conditions.",
    features: ["Superior Road Grip", "Heavy-Duty Tread", "Enhanced Stability", "Long-Lasting Durability"],
  },
];

export default function TechnologyPage() {
  return (
    <div className="bg-[#f5f7f3] text-[var(--color-ink)]">
      <section className="relative overflow-hidden bg-[#111] text-white">
        <div className="absolute -right-24 -top-48 h-[36rem] w-[36rem] rounded-full bg-[var(--color-green)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-[var(--container-page)] px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
          <Reveal className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-green)]">
            <span className="h-px w-12 bg-[var(--color-green)]" /> GT Drive technology
          </Reveal>
          <Reveal delay={80} className="mt-7 max-w-5xl">
            <h1 className="text-[clamp(52px,9vw,132px)] leading-[0.88] tracking-[-0.06em]">Built for the<br /><span className="text-[var(--color-green)]">everyday electric.</span></h1>
          </Reveal>
          <Reveal delay={160} className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-white/65 md:text-lg">Every GT Drive scooter is a system of considered parts. Meet the technology that makes every ride feel simple, dependable, and ready.</p>
          </Reveal>
          <Reveal delay={240} className="mt-14 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
            <ArrowDown size={16} className="text-[var(--color-green)]" /> Explore the five essentials
          </Reveal>
        </div>
      </section>

      <main className="mx-auto max-w-[var(--container-page)] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-14 md:gap-24">
          {technology.map((item, index) => (
            <Reveal key={item.name} delay={index * 35} className="group grid overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(17,17,17,0.08)] md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
              <div className={`relative min-h-[330px] overflow-hidden bg-[#e9ede8] md:min-h-[510px] ${index % 2 ? "md:order-2" : ""}`}>
                <Image src={asset(item.image)} alt={`${item.name} used in a GT Drive electric scooter`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute left-5 top-5 rounded-full bg-[#111]/85 px-4 py-2 font-display text-xs font-bold tracking-[0.14em] text-white">{item.number}</div>
              </div>
              <div className={`flex flex-col justify-center p-8 md:p-14 lg:p-20 ${index % 2 ? "md:order-1" : ""}`}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-green-deep)]">{item.label}</p>
                <h2 className="mt-4 text-[clamp(42px,5vw,76px)] leading-[0.9]">{item.name}</h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">{item.description}</p>
                <ul className="mt-8 grid gap-3 border-t border-[var(--color-line)] pt-7">
                  {item.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-[var(--color-body)]"><Check size={17} weight="bold" className="mt-0.5 shrink-0 text-[var(--color-green-deep)]" /> {feature}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 rounded-[2rem] bg-[var(--color-green-deep)] px-8 py-12 text-white md:mt-28 md:flex md:items-center md:justify-between md:px-14 md:py-14">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Find your fit</p><h2 className="mt-3 max-w-xl text-4xl leading-[0.95] md:text-6xl">Technology that moves with you.</h2></div>
          <Link href="/models/" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5 md:mt-0">Explore models <ArrowRight size={16} weight="bold" /></Link>
        </Reveal>
      </main>
    </div>
  );
}
