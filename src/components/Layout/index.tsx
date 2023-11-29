import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div id="root">
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
