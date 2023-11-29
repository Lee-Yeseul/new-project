import { CompoundItem } from "@src/types/common";

export default function Card({ children }: CompoundItem) {
  return <div>{children}</div>;
}

function Images({ children, className }: CompoundItem) {
  return (
    <div
      className={`flex flex-col items-center justify-center border-[0px] border-solid border-gray-300 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}

function Description({ children, className }: CompoundItem) {
  return (
    <div
      className={`w-full pt-3 leading-5 flex flex-col justify-center items-start ${className}`}
    >
      {children}
    </div>
  );
}

Card.Description = Description;
Card.Images = Images;
