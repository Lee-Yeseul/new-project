import { useState } from "react";
import Dropdown from "@src/components/common/Dropdown";
import MenuIcon from "@src/assets/icons/menu.svg?react";
import AccountIcon from "@src/assets/icons/account.svg?react";
import LoginDialog from "@src/components/Auth/Login/LoginDialog";

export default function Menu() {
  const [isDropdownButtonClicked, setIsDropdownButtonClicked] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const onClickMenuButton = () => {
    setIsDropdownButtonClicked((prev) => !prev);
  };

  const onClickLogin = () => {
    setIsLoginDialogOpen(true);
    setIsDropdownButtonClicked(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => onClickMenuButton()}
        className="rounded-full border-solid border-1 border-gray-300 pr-2 pl-2.5 py-1.5 flex items-center justify-between gap-3"
      >
        <MenuIcon width="20" height="20" fill="#6b7280" />
        <AccountIcon width="32" height="32" fill="#9ca3af" />
      </button>
      {isDropdownButtonClicked && (
        <Dropdown className="bg-white right-0 mt-1.5 rounded-md divide-y-1 divide-solid divide-gray-300 z-[100]">
          <Dropdown.Item
            className="w-56 h-10 text-sm rounded-t-md hover:bg-gray-50 hover:cursor-pointer"
            onClick={() => onClickLogin()}
          >
            로그인
          </Dropdown.Item>
          <Dropdown.Item
            className="w-56 h-10 text-sm rounded-b-md hover:bg-gray-50 hover:cursor-pointer"
            onClick={() => onClickLogin()}
          >
            회원가입
          </Dropdown.Item>
        </Dropdown>
      )}

      {isLoginDialogOpen && (
        <LoginDialog
          setIsDialogOpen={(isDialogOpen) => setIsLoginDialogOpen(isDialogOpen)}
        />
      )}
    </div>
  );
}
