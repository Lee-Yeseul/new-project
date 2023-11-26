import { moneyFormatting } from "@src/utils";
import ImageCarousel from "./ImageCarousel";
import { Link } from "react-router-dom";

interface CardProps {
  cardInfo: {
    id: number;
    address: string;
    price: number;
    hashTags: string[];
    imageList: { id: number; url: string }[];
  };
}

/**
 * TODO: card design component로 분리
 */
export default function Card({ cardInfo }: CardProps) {
  const { address, price, hashTags, imageList } = cardInfo;
  return (
    <div className="flex flex-col items-center justify-center border-[0px] border-solid border-gray-300 rounded-lg">
      <ImageCarousel imageList={imageList} />
      <div className="w-full pt-3 leading-5 flex flex-col justify-center items-start">
        <div>{address}</div>
        <div>{`₩${moneyFormatting(price)}`}</div>
        <div className="flex gap-2">
          {hashTags.map((tag) => (
            <Link
              to="http://naver.com"
              key={tag}
              className="flex items-center text-sm text-gray-500 hover:text-gray-800 hover:underline"
            >
              <span>#{tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
