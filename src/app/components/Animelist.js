import Image from "next/image";

const Animelist = ({title,images}) => {
  return (
      <div className="bg-purple-800">
        <Image
          src={images}
          width={600}
          height={600}
          alt="..."
        /> <h3>{title}</h3>
      </div>
  );
};

export default Animelist;
