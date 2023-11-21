import { useCallback, useEffect, useRef, useState } from "react";
import Item from "./Item";

export default function Filter() {
  const tempItem = Array.from({ length: 20 }, (_, index) => index + 1);
  const leftElement = useRef<HTMLDivElement>(null);
  const rightElement = useRef<HTMLDivElement>(null);

  const [leftScrollBtnVisibleState, setLeftScrollBtnVisible] = useState(false);
  const [rightScrollBtnVisibleState, setRightScrollBtnVisible] = useState(true);

  const handleClickLeftScrollBtn = () => {
    console.log("scroll left");
  };

  const handleLeftIntersect = useCallback(
    ([left]: IntersectionObserverEntry[]) => {
      if (left.isIntersecting) setLeftScrollBtnVisible(false);
      else setLeftScrollBtnVisible(true);
    },
    []
  );

  const handleRightIntersect = useCallback(
    ([right]: IntersectionObserverEntry[]) => {
      if (right.isIntersecting) setRightScrollBtnVisible(false);
      else setRightScrollBtnVisible(true);
    },
    []
  );

  useEffect(() => {
    const leftObserver = new IntersectionObserver(handleLeftIntersect, {
      threshold: 1,
    });
    if (leftElement.current) leftObserver.observe(leftElement.current);

    return () => {
      leftObserver.disconnect();
    };
  }, [handleLeftIntersect]);

  useEffect(() => {
    const rightObserver = new IntersectionObserver(handleRightIntersect, {
      threshold: 0.5,
    });
    if (rightElement.current) rightObserver.observe(rightElement.current);

    return () => {
      rightObserver.disconnect();
    };
  }, [handleRightIntersect]);

  return (
    <div className="flex w-full items-center h-16 gap-3">
      <div
        className={`${
          leftScrollBtnVisibleState ? "visible animate-fade-in" : "hidden"
        }  absolute left-10 z-30 bg-white`}
      >
        <button
          className="w-8 h-8 border-solid border-gray-300 border-[1px] rounded-full p-2 hover:shadow-md shadow-grey-500"
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
                ? leftElement
                : id === tempItem.length
                ? rightElement
                : null
            }
          >
            <Item />
          </div>
        ))}
      </div>
      <div>
        <button
          className={`w-8 h-8 border-solid border-gray-300 border-[1px] rounded-full p-2 hover:shadow-md shadow-grey-500 ${
            rightScrollBtnVisibleState ? "visible animate-fade-in" : "invisible"
          }`}
        >
          {">"}
        </button>
      </div>
      <div className="basis-1/12 w-full flex justify-end">
        <button className="border-solid border-grey-500 border-[1px] p-3 rounded-lg hover:shadow-md shadow-grey-500">
          필터
        </button>
      </div>
    </div>
  );
}
