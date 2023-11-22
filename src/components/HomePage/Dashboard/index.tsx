import Card from "@src/components/common/Card";

export default function Dashboard() {
  const mockImgURL = {
    id: 0,
    address: "한국 Gonam-myeon, Taean-gun",
    price: 84800,
    hashTags: ["젤네일", "11월네일"],
    imageList: [
      {
        id: 0,
        url: "https://news.koreadaily.com/data/photo/originals/2021/11/14/180306633.jpg",
      },
      {
        id: 1,
        url: "https://cdn.class101.net/images/2c1ec9db-4bce-424a-83af-d8def456ab18",
      },
      {
        id: 2,
        url: "https://i.pinimg.com/736x/0e/2f/44/0e2f4450c4c97b286ffe5e15659c353c.jpg",
      },
    ],
  };

  const tempCard = Array.from({ length: 20 }, () => mockImgURL);
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {tempCard.map((card, index) => (
        <Card key={index} cardInfo={card} />
      ))}
    </div>
  );
}
