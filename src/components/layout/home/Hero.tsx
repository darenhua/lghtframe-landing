import Image from 'next/image';

import Button from '@/components/buttons/Button';

export default function Hero() {
  return (
    <section className='my-28 mb-40'>
      <article className='flex items-center'>
        <div className='w-7/12 md:pr-6 lg:pr-6 xl:pr-8'>
          <h1 className='tracking-tight md:text-3xl lg:text-5xl xl:text-6xl'>
            We have the solution to your problem.
          </h1>
          <div className='mt-6 mb-8 md:max-w-sm lg:max-w-md xl:max-w-lg'>
            <p className='md:text-md lg:text-lg xl:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              dicta ad suscipit dolor mollitia quod iste illo id sunt ab
              perspiciatis numquam.
            </p>
          </div>
          <div className='flex flex-wrap md:gap-3 lg:gap-6'>
            <Button variant='primary'>Explore our houses</Button>
            <Button variant='outline'>Sign up now</Button>
          </div>
        </div>
        <div className='w-5/12'>
          <div className='max-w-md'>
            <Image
              src='/images/download.png'
              alt='placeholder'
              width={500}
              height={500}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
