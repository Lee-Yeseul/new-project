import { useState } from "react";
import LoginDialog from "../Auth/LoginDialog";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 border-solid border-b-[1px] border-gray-200 z-10 bg-white">
      <div className="h-full flex items-center px-8 justify-between">
        <div>로고</div>
        <SearchBar />
        <button onClick={() => setIsLoginDialogOpen(true)}>로그인</button>
        {isLoginDialogOpen && (
          <LoginDialog
            setIsDialogOpen={(isDialogOpen) =>
              setIsLoginDialogOpen(isDialogOpen)
            }
          />
        )}
      </div>
    </header>
  );
}
