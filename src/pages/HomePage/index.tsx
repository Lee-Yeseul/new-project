import Dashboard from "@src/components/HomePage/Dashboard";
import Filter from "@src/components/HomePage/Filter";

export default function HomePage() {
  return (
    <div className="w-full px-10">
      <Filter />
      <div className="pt-4">
        <Dashboard />
      </div>
    </div>
  );
}
