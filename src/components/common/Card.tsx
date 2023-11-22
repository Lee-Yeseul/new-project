import { moneyFormatting } from "@src/utils";
import ImageCarousel from "./ImageCarousel";

interface CardProps {
  cardInfo: {
    id: number;
    address: string;
    price: number;
    hashTags: string[];
    imageList: { id: number; url: string }[];
  };
}
export default function Card({ cardInfo }: CardProps) {
  const { address, price, hashTags, imageList } = cardInfo;
  return (
    <div className="flex flex-col items-center justify-center border-[0px] border-solid border-gray-300 rounded-lg">
      <ImageCarousel imageList={imageList} />
      <div className="w-full pt-3 leading-5 flex flex-col justify-center items-start">
        <div>{address}</div>
        <div>{`$₩${moneyFormatting(price)}`}</div>
        <div className="flex gap-2">
          {/* router 작업하면 link로 수정 */}
          {hashTags.map((tag) => (
            <a
              key={tag}
              className="text-sm text-gray-500 hover:text-gray-800 hover:underline"
              href="https://google.com"
            >{`#${tag}`}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
