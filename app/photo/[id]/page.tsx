export const dynamicParams = false;

export function generateStaticParams() {
  const slots = ["1", "2", "3", "4", "5", "6"];
  return slots.map((slot) => ({ id: slot }));
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <div className="card bg-white text-black">{id}</div>;
}
