import Image from 'next/image';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className='mt-20 text-center'>
      <h2 className='text-5xl font-bold text-yellow-500'>Oops 404 </h2>
      <p className='text-sm my-2'>Page not found</p>
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