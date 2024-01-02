import Image from 'next/image';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className='mt-20 text-center mb-40'>
      <h2 className='text-5xl font-bold text-yellow-500'>Development process</h2>
      <p className='text-sm my-2'>mwehehe</p>
      <Link className='text-sm text-blue-500' href="/">Back</Link>
      <Image
              src="/img/luffy.png"
              alt="Anime Image"
              width={300}
              height={200}
              className='mx-auto'
            />
    </div>
  )
}