import Dashboard from "@src/components/Dashboard";
import Filter from "@src/components/Dashboard/Filter";

export default function DashboardPage() {
  return (
    <div className="w-full px-10">
      <Filter />
      <div className="pt-4">
        <Dashboard />
      </div>
    </div>
  );
}
