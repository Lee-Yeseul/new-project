import CardList from "@src/components/Dashboard/CardList";
import Filter from "@src/components/Dashboard/Filter";

export default function DashboardPage() {
  return (
    <div className="w-full px-10">
      <Filter />
      <div className="pt-4">
        <CardList />
      </div>
    </div>
  );
}
