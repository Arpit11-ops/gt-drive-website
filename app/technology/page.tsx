import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowsClockwise, BatteryCharging, ChartLineUp, CheckCircle, Cpu, Footprints, Gauge, GearSix, Lightning, Lightbulb, PlugCharging, RoadHorizon, ShieldCheck, SpeakerSlash, Waveform } from "@phosphor-icons/react/dist/ssr";
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
    name: "Motor",
    label: "Quiet strength, instant response",
    image: "/assets/technology/motor.jpeg",
    description: "High-torque drive motors turn every twist of the throttle into quiet, efficient forward motion.",
    features: ["High-Torque Power Delivery", "Efficient Energy Conversion", "Smooth & Silent Operation", "Built For Long-Term Reliability"],
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
    name: "Battery",
    label: "Energy, engineered for every day",
    image: "/assets/technology/battery.jpeg",
    description: "High-energy lithium technology gives you dependable range, steady output, and the confidence to go further.",
    features: ["High-Energy Lithium Technology", "Reliable Long-Lasting Performance", "Advanced Battery Protection", "Efficient Power Delivery", "Built For Everyday Reliability"],
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

const featureIcons: Record<string, (typeof BatteryCharging)[]> = {
  Battery: [BatteryCharging, ChartLineUp, ShieldCheck, Lightning, ArrowsClockwise],
  Controller: [Cpu, Gauge, ShieldCheck, Waveform],
  Motor: [Lightning, ChartLineUp, SpeakerSlash, CheckCircle],
  Charger: [PlugCharging, Lightbulb, GearSix, CheckCircle],
  Tyre: [RoadHorizon, Footprints, Gauge, ShieldCheck],
};

export default function TechnologyPage() {
  return (
    <div className="bg-[#f5f7f3] text-[var(--color-ink)]">
      <section className="relative isolate overflow-hidden bg-[#001d17] bg-cover bg-[66%_center] text-white md:bg-center" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,24,18,.98) 0%, rgba(0,24,18,.9) 35%, rgba(0,24,18,.3) 74%, rgba(0,24,18,.04) 100%), url(${asset("/assets/technology/hero-banner.webp")})` }}>
        <div className="mx-auto flex min-h-[460px] w-full flex-col justify-center px-5 py-16 sm:px-8 md:min-h-[560px] md:px-12 md:py-24 lg:px-16">
          <Reveal className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#70db91] md:text-sm">Our technology</Reveal>
          <Reveal delay={80} className="mt-3 max-w-[950px]"><h1 className="text-[clamp(36px,6vw,86px)] font-extrabold uppercase leading-[0.98] tracking-[-0.045em]">Built for a<br /><span className="text-[#5ddc8b]">cleaner tomorrow</span></h1></Reveal>
          <Reveal delay={160} className="mt-5 max-w-xl"><p className="text-sm leading-relaxed text-white/90 sm:text-base md:text-xl">Advanced components. Superior performance.<br />A smarter, greener ride with GT Drive.</p></Reveal>
        </div>
      </section>

      <main className="mx-auto max-w-[1600px] px-2.5 py-3 sm:px-4 md:px-6 md:py-6">
        <div className="grid gap-3 md:gap-5">
          {technology.map((item, index) => {
            const reversed = index % 2 === 1;
            return <Reveal key={item.name} delay={index * 35} className={`group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/80 shadow-[0_8px_30px_rgba(0,30,17,0.06)] md:min-h-[350px] md:grid-cols-[35%_30%_35%] md:rounded-[1.5rem] ${index % 2 ? "bg-[#f5f9f6]" : "bg-white"}`}>
              <div className={`relative aspect-[4/3] min-h-0 overflow-hidden bg-[#eaf3ec] md:aspect-auto md:min-h-full ${reversed ? "md:col-start-3 md:row-start-1" : "md:col-start-1 md:row-start-1"}`}><Image src={asset(item.image)} alt={`${item.name} used in a GT Drive electric scooter`} fill sizes="(max-width: 767px) 100vw, 35vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div>
              <div className={`flex min-w-0 flex-col justify-center px-4 py-6 sm:px-8 md:px-8 lg:px-12 ${reversed ? "md:col-start-1 md:row-start-1" : "md:col-start-2 md:row-start-1"}`}><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#121c18] sm:text-xs md:text-sm"><span className="text-[#098347]">{item.number}</span><span aria-hidden className="h-px w-3 bg-[#098347]" />{item.name}</div><span aria-hidden className="mt-3 h-0.5 w-9 bg-[#16b457]" /><h2 className="mt-4 text-[clamp(20px,3vw,43px)] font-extrabold uppercase leading-[1.03] tracking-[-0.045em] text-[#101817]">{item.label}</h2><p className="mt-4 text-[11px] leading-[1.5] text-[#343e3a] sm:text-sm md:text-[15px] md:leading-relaxed">{item.description}</p></div>
              <ul className={`col-span-1 grid grid-cols-2 gap-x-1 gap-y-3 border-t border-[#e2ebe4] bg-white/85 px-4 py-5 sm:grid-cols-4 sm:gap-2 sm:px-6 md:col-span-1 md:grid-cols-1 md:content-center md:gap-2 md:border-0 md:bg-white/65 md:p-5 lg:p-8 ${reversed ? "md:col-start-2 md:row-start-1" : "md:col-start-3 md:row-start-1"}`}>{item.features.map((feature, featureIndex) => { const Icon = featureIcons[item.name][featureIndex]; return <li key={feature} className="flex min-w-0 flex-col items-center gap-2 px-1 text-center sm:px-2 md:flex-row md:gap-3 md:text-left"><span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#def9e7] text-[#075a31] sm:h-11 sm:w-11 md:h-12 md:w-12"><Icon size={22} weight="regular" /></span><span className="text-[11px] font-semibold leading-tight text-[#151e19] sm:text-xs md:text-[13px] lg:text-sm">{feature}</span></li>; })}</ul>
            </Reveal>;
          })}
        </div>

        <Reveal className="mt-20 rounded-[2rem] bg-[var(--color-green-deep)] px-8 py-12 text-white md:mt-28 md:flex md:items-center md:justify-between md:px-14 md:py-14">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Find your fit</p><h2 className="mt-3 max-w-xl text-4xl leading-[0.95] md:text-6xl">Technology that moves with you.</h2></div>
          <Link href="/models/" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5 md:mt-0">Explore models <ArrowRight size={16} weight="bold" /></Link>
        </Reveal>
      </main>
    </div>
  );
}
