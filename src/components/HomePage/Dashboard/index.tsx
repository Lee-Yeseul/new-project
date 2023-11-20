import Card from "@src/components/common/Card";

export default function Dashboard() {
  const tempCard = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-6">
      {tempCard.map((id) => (
        <Card key={id} />
      ))}
    </div>
  );
}
