import Link from "next/link";

export default function Home() {
  const slots = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {slots.map((slot) => (
        <Link className="card" key={slot} href={`/photo/${slot}`} passHref>
          {slot}
        </Link>
      ))}
    </section>
  );
}
