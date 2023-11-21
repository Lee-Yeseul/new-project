interface CardProps {
  imageURL: string;
}
export default function Card({ imageURL }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center border-[0px] border-solid border-gray-300 rounded-lg">
      <img className="w-full aspect-square rounded-lg" src={imageURL} />
      <div className="w-full pt-3 leading-5 flex flex-col justify-center items-start">
        <div>한국 Gonam-myeon, Taean-gun</div>
        <div>₩84,800</div>
        <div>#젤네일 #11월네일</div>
      </div>
    </div>
  );
}
