// import { ReactComponent as SearchIcon } from "@src/assets/icons/search.svg";
import SearchIcon from "@src/assets/icons/search.svg?react";
import { FormEvent, useRef } from "react";

export default function SearchBar() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchInputRef.current) return;
    console.log(searchInputRef.current.value);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex items-center justify-between pl-6 pr-3 w-96 h-11 rounded-full shadow-md hover:shadow-lg border-solid border-gray-300 border-[1px]">
        <input
          ref={searchInputRef}
          className="h-full w-11/12 hover:border-none focus:outline-none"
          placeholder="검색어를 입력하세요."
        />
        <button type="submit">
          <SearchIcon
            width="32"
            height="32"
            fill="white"
            className="rounded-full bg-pink-200 p-1 hover:bg-pink-300"
          />
        </button>
      </div>
    </form>
  );
}
