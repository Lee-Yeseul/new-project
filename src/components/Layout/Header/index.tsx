import SearchBar from "../SearchBar";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 border-solid border-b-[1px] border-gray-200 z-10 bg-white">
      <div className="h-full flex items-center px-8 justify-between">
        <div>로고</div>
        <SearchBar />
        <Menu />
      </div>
    </header>
  );
}
