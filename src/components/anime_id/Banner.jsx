import Image from "next/image"
const Banner = ({data}) => {
  return (
    <div className="mt-1 blur-sm relative w-full flex justify-center bg-white">
    <Image
      src={data}
      width={300}
      height={300}
      alt="..."
      className="w-full brightness-50 h-64 object-cover overflow-hidden"
    />
    <span className="absolute w-full h-full inset-0 bg-gradient-to-b from-10% from-transparent to-black"></span>
  </div>
  )
}

export default Banner