import Item from "./Item";

export default function Filter() {
  const tempItem = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="flex justify-between items-center h-16 gap-3">
      {tempItem.map((id) => (
        <Item key={id} />
      ))}
    </div>
  );
}
