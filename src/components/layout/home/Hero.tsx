import Image from 'next/image';

import Button from '@/components/buttons/Button';

// import CanvasVis from '@/components/HeroCanvas';

export default function Hero() {
  return (
    <section className='relative mt-16 px-6 after:absolute after:-z-10 after:h-[500px] after:w-full after:-translate-y-[500px] after:-translate-x-6 after:bg-[url("/images/transition-removebg-preview.png")] after:bg-cover  after:bg-no-repeat after:content-[""] xxs:after:h-96 xxs:after:-translate-y-96 xs:px-12	xs:after:-translate-x-12 sm:px-20 sm:after:-translate-x-20 md:mt-20 md:px-10 md:after:h-36 md:after:-translate-x-10 md:after:-translate-y-36 lg:px-20 lg:after:-translate-x-20 2xl:after:h-52 2xl:after:-translate-y-52'>
      <article className='flex flex-col-reverse items-center md:flex-row'>
        <div className='relative md:w-6/12'>
          <h1 className='header-background max-w-4xl text-center text-2xl xxs:text-3xl xs:text-4xl md:text-left md:text-5xl xl:text-6xl'>
            A new <span className='underline'>sustainable</span> housing system.
          </h1>
          <div className='mt-4 mb-4 xxs:mt-6 xxs:mb-8 md:max-w-sm lg:max-w-md xl:max-w-lg'>
            <p className='text-center md:text-left  lg:text-lg xl:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              dicta ad suscipit dolor mollitia quod iste illo id sunt ab
              perspiciatis numquam.
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-3  md:justify-start lg:gap-6'>
            <Button variant='outline'>Explore our houses</Button>
            <Button variant='primary'>Talk to us today</Button>
          </div>
        </div>
        <div className='w-full xxs:w-10/12 xs:w-8/12 md:w-6/12'>
          <div className='flex items-end justify-center'>
            <Image
              src='/images/Enscape_2022-08-06-08-56-59_1-removebg-preview-removebg-preview.png'
              alt='placeholder'
              width={466.5}
              height={369}
            />
            {/* <CanvasVis /> */}
          </div>
        </div>
      </article>
    </section>
  );
}
