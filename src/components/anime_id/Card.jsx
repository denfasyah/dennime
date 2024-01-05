import Image from "next/image";

const Card = ({data}) => {
  return (
    <div className="flex justify-center">
      <Image
        src={data}
        width={100}
        height={100}
        alt="..."
        className="absolute w-44 h-52 top-40 shadow-md object-cover overflow-hidden rounded-md"
      />
    </div>
  );
};

export default Card;
