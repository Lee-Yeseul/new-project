import Card from "@src/components/common/Card";

export default function Dashboard() {
  const tempCard = Array.from({ length: 20 }, (_, index) => index + 1);
  const mockImgURL =
    "https://i.pinimg.com/736x/0e/2f/44/0e2f4450c4c97b286ffe5e15659c353c.jpg";
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {tempCard.map((id) => (
        <Card key={id} imageURL={mockImgURL} />
      ))}
    </div>
  );
}
