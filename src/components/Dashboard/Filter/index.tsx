import { useCallback, useState } from "react";
import Item from "./Item";
import useDetectElement from "@src/hooks/useDetectElement";

export default function Filter() {
  const tempItem = Array.from({ length: 20 }, (_, index) => index + 1);

  const [leftScrollBtnVisibleState, setLeftScrollBtnVisible] = useState(false);
  const [rightScrollBtnVisibleState, setRightScrollBtnVisible] = useState(true);

  const [setLeftScrollTarget] = useDetectElement({
    threshold: 1,
    onIntersect: useCallback(([{ isIntersecting }]) => {
      if (isIntersecting) setLeftScrollBtnVisible(false);
      else setLeftScrollBtnVisible(true);
    }, []),
  });

  const [setRightScrollTarget] = useDetectElement({
    threshold: 0.5,
    onIntersect: useCallback(([{ isIntersecting }]) => {
      if (isIntersecting) setRightScrollBtnVisible(false);
      else setRightScrollBtnVisible(true);
    }, []),
  });

  const handleClickLeftScrollBtn = () => {
    console.log("scroll left");
  };

  return (
    <div className="flex w-full items-center h-16 gap-3">
      <div
        className={`${
          leftScrollBtnVisibleState ? "visible animate-fade-in" : "hidden"
        }  absolute left-10 z-30 bg-white`}
      >
        <button
          className="w-8 h-8 border-solid border-gray-300 border-1 rounded-full p-2 hover:shadow-md shadow-grey-500"
          onClick={handleClickLeftScrollBtn}
        >
          {"<"}
        </button>
      </div>
      <div className="basis-11/12 flex flex-nowrap overflow-x-scroll gap-3 scrollbar-hide">
        {tempItem.map((id) => (
          <div
            key={id}
            className="shrink-0"
            ref={
              id === 2
                ? setLeftScrollTarget
                : id === tempItem.length
                ? setRightScrollTarget
                : null
            }
          >
            <Item />
          </div>
        ))}
      </div>
      <div>
        <button
          className={`w-8 h-8 border-solid border-gray-300 border-1 rounded-full p-2 hover:shadow-md shadow-grey-500 ${
            rightScrollBtnVisibleState ? "visible animate-fade-in" : "invisible"
          }`}
        >
          {">"}
        </button>
      </div>
      <div className="basis-1/12 w-full flex justify-end">
        <button className="border-solid border-grey-500 border-1 p-3 rounded-lg hover:shadow-md shadow-grey-500">
          필터
        </button>
      </div>
    </div>
  );
}
