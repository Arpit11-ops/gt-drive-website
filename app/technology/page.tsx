import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react/dist/ssr";
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
    description: "High-energy lithium technology gives you dependable range, steady output, and the confidence to go further.",
    features: ["High-Energy Lithium Technology", "Reliable Long-Lasting Performance", "Advanced Battery Protection", "Efficient Power Delivery", "Built For Everyday Reliability"],
  },
  {
    number: "02",
    name: "Controller",
    label: "The intelligence behind the ride",
    image: "/assets/technology/controller.jpeg",
    description: "A precision control system balances power, protection, and response so every mode feels smooth and controlled.",
    features: ["Precision Power Management", "Advanced Motor Control", "Intelligent Safety Protection", "Smooth, Responsive Performance"],
  },
  {
    number: "03",
    name: "Motor",
    label: "Quiet strength, instant response",
    image: "/assets/technology/motor.jpeg",
    description: "High-torque drive motors turn every twist of the throttle into quiet, efficient forward motion.",
    features: ["High-Torque Power Delivery", "Efficient Energy Conversion", "Smooth & Silent Operation", "Built For Long-Term Reliability"],
  },
  {
    number: "04",
    name: "Charger",
    label: "Ready when you are",
    image: "/assets/technology/charger.jpeg",
    description: "Compact, durable charging hardware makes topping up clear and reliable wherever you park.",
    features: ["Fast & Efficient Charging", "Smart LED Status Indicators", "Compact & Durable Design", "Reliable Charging Performance"],
  },
  {
    number: "05",
    name: "Tyre",
    label: "Confidence in every contact patch",
    image: "/assets/technology/tyre.jpeg",
    description: "Road-ready tyres and braking keep the scooter composed through city streets and changing conditions.",
    features: ["Superior Road Grip", "Heavy-Duty Tread", "Enhanced Stability", "Long-Lasting Durability"],
  },
];

export default function TechnologyPage() {
  return (
    <div className="bg-[#f5f7f3] text-[var(--color-ink)]">
      <section
        className="relative overflow-hidden bg-[#111] bg-cover bg-center text-white"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(17,17,17,.98) 0%, rgba(17,17,17,.94) 34%, rgba(17,17,17,.42) 64%, rgba(17,17,17,.12) 100%), url(${asset("/assets/technology/hero-banner.webp")})` }}
      >
        <div className="absolute -right-24 -top-48 h-[36rem] w-[36rem] rounded-full bg-[var(--color-green)]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[var(--container-page)] px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
          <Reveal className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-green)]">
            <span className="h-px w-12 bg-[var(--color-green)]" /> GT Drive technology
          </Reveal>
          <Reveal delay={80} className="mt-7 max-w-5xl">
            <h1 className="text-[clamp(52px,9vw,132px)] leading-[0.88] tracking-[-0.06em]">Built for the<br /><span className="text-[var(--color-green)]">everyday electric.</span></h1>
          </Reveal>
          <Reveal delay={160} className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-white/65 md:text-lg">Every GT Drive scooter is built from parts that work together. Explore the technology behind a ride that feels simple, dependable, and ready.</p>
          </Reveal>
          <Reveal delay={240} className="mt-14 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
            <ArrowDown size={16} className="text-[var(--color-green)]" /> Explore the five essentials
          </Reveal>
        </div>
      </section>

      <main className="mx-auto max-w-[var(--container-page)] bg-white px-6 py-12 md:px-10 md:py-20">
        <div className="grid gap-14 md:gap-24">
          {technology.map((item, index) => (
            <Reveal key={item.name} delay={index * 35} className={`group grid grid-cols-[42%_58%] overflow-hidden rounded-[1.25rem] shadow-[0_12px_36px_rgba(17,17,17,0.08)] md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] md:rounded-[2rem] md:shadow-[0_18px_60px_rgba(17,17,17,0.08)] ${index % 2 === 1 ? "bg-[#edf8ef]" : "bg-white"}`}>
              <div className={`relative aspect-square min-h-0 overflow-hidden bg-[#e9ede8] md:aspect-auto md:min-h-[510px] ${index % 2 ? "md:order-2" : ""}`}>
                <Image src={asset(item.image)} alt={`${item.name} used in a GT Drive electric scooter`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute left-2.5 top-2.5 rounded-full bg-[#111]/85 px-2 py-1 font-display text-[9px] font-bold tracking-[0.12em] text-white md:left-5 md:top-5 md:px-4 md:py-2 md:text-xs md:tracking-[0.14em]">{item.number}</div>
              </div>
              <div className={`flex min-w-0 flex-col justify-center p-3.5 md:p-14 lg:p-20 ${index % 2 ? "md:order-1" : ""}`}>
                <p className="text-[8px] font-bold uppercase leading-tight tracking-[0.12em] text-[var(--color-green-deep)] md:text-xs md:tracking-[0.2em]">{item.label}</p>
                <h2 className="mt-2 text-[clamp(25px,5vw,76px)] leading-[0.9] md:mt-4">{item.name}</h2>
                <p className="mt-3 max-w-md text-[10px] leading-[1.35] text-[var(--color-body)] md:mt-6 md:text-[15px] md:leading-relaxed">{item.description}</p>
                <ul className="mt-4 grid gap-1.5 border-t border-[var(--color-line)] pt-4 md:mt-8 md:gap-2 md:pt-7">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--color-green)_8%,white)] px-2.5 py-1.5 text-[9px] font-semibold leading-tight text-[var(--color-body)] md:gap-3 md:px-4 md:py-2.5 md:text-sm">
                      <span aria-hidden className="relative grid h-2.5 w-2.5 shrink-0 place-items-center rounded-full bg-[var(--color-green)] shadow-[0_0_0_2px_color-mix(in_srgb,var(--color-green)_16%,transparent)] md:h-3.5 md:w-3.5 md:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-green)_16%,transparent)]">
                        <span className="h-1 w-1 rounded-full bg-white md:h-1.5 md:w-1.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
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
