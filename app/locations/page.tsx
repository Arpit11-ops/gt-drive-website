import type { Metadata } from "next";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { locations } from "@/lib/models";

export const metadata: Metadata = { title: "Plant Locations", description: "GT Drive plant and operational locations across India." };
export default function LocationsPage() { return <><section className="page-hero"><div className="page-hero-copy"><span className="eyebrow">Manufacturing footprint</span><h1>PLANT<br />LOCATIONS</h1><p>GT Drive is strengthening its footprint across India to serve riders and business partners better.</p></div></section><section className="section"><div className="address-grid">{locations.map((location) => <article className="address-card" key={location.state}><MapPin weight="fill" /><h2>{location.state}</h2><p>{location.address}</p></article>)}</div></section></>; }
