import useOutSideClick from "@src/hooks/useOutSideClick";
import { ReactNode, useEffect, useRef } from "react";

import CloseIcon from "@src/assets/icons/close.svg?react";
import Portal from "./Portal";

type DialogItemProps = {
  children?: ReactNode;
  className?: string;
};

type DialogProps = DialogItemProps & {
  onClickOutside: () => void;
};

type CloseButtonProps = DialogItemProps & {
  onClose: () => void;
};

export default function Dialog({
  children,
  onClickOutside,
  className,
}: DialogProps) {
  const dialogRef = useRef(null);
  useOutSideClick(dialogRef, onClickOutside);

  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body !== null) {
      const { overflow } = $body.style;
      $body.style.overflow = "hidden";
      return () => {
        $body.style.overflow = overflow;
      };
    }
  }, []);

  return (
    <Portal>
      <div className="bg-black-rgba fixed w-full top-0 bottom-0 left-0 right-0 z-50">
        <div
          ref={dialogRef}
          className="h-fit rounded-md bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <div className={`${className}`}>{children}</div>
        </div>
      </div>
    </Portal>
  );
}

function Header({ children, className }: DialogItemProps) {
  return <div className={className}>{children}</div>;
}

function Body({ children, className }: DialogItemProps) {
  return <div className={className}>{children}</div>;
}

function Footer({ children, className }: DialogItemProps) {
  return <div className={className}>{children}</div>;
}

function CloseButton({ onClose, className }: CloseButtonProps) {
  return (
    <button className={className} onClick={() => onClose()}>
      <CloseIcon width="21" height="21" fill="grey" />
    </button>
  );
}

Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.CloseButton = CloseButton;
