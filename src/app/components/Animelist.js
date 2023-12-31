import Image from "next/image";

const Animelist = () => {
  return (
    <div className="grid grid-cols-3 gap-2 h-32  mx-10">
      <div className="bg-purple-800">
        <Image
          src="https://placehold.co/600x400/png"
          width={600}
          height={600}
        /> <h3>title anime</h3>
      </div>
      <div className="bg-purple-800">
        <Image
          src="https://placehold.co/600x400/png"
          width={600}
          height={600}
        />
      </div>
      <div className="bg-purple-800">
        <Image
          src="https://placehold.co/600x400/png"
          width={600}
          height={600}
        />
      </div>
      <div className="bg-purple-800">
        <Image
          src="https://placehold.co/600x400/png"
          width={600}
          height={600}
        />
      </div>
      <div className="bg-purple-800">
        <Image
          src="https://placehold.co/600x400/png"
          width={600}
          height={600}
        />
      </div>
      <div className="bg-purple-800">
        <Image
          src="https://placehold.co/600x400/png"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Animelist;
