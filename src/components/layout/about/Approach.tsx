import Image from 'next/image';

export default function Approach() {
  return (
    <section className='my-20 px-4 sm:px-20'>
      <div className='flex flex-col-reverse items-center md:flex-row'>
        <div className='w-10/12 sm:w-8/12 md:w-7/12'>
          <div className='mb-12 w-full grayscale xs:mb-0  md:w-10/12'>
            <Image
              src='/images/approach_pieces.png'
              alt='placeholder'
              width={673}
              height={273}
            />
          </div>
          <h2 className='mt-4 text-center text-2xl font-bold xxs:text-3xl xs:text-4xl md:text-left md:text-5xl  lg:text-5xl  xl:text-6xl '>
            The <span className='font-normal'>L*GHT</span> approach.
          </h2>
          <h3 className='mt-8 text-center md:mt-3 md:text-left'>
            A new sustainable housing system.
          </h3>
          <div className='mt-8 max-w-md lg:max-w-xl xl:max-w-full'>
            <p className='w-full max-w-xl text-center text-lg font-bold leading-tight tracking-tight md:text-left'>
              Our L*GHT Frame consists of a{' '}
              <span className='underline '>multi-directional joint (1.)</span>{' '}
              that connects to a{' '}
              <span className=' underline'>railed beam (2.)</span> which works
              both horizontally and vertically. The railed system allows for the{' '}
              <span className='underline'>surface boards (3.)</span> to be added
              without nails or glue. They all combine to produce{' '}
              <span className='underline'>9x9&apos; cells (4.)</span> that can
              be aggregated into any type of traditional house.
            </p>
          </div>
        </div>
        <div className='mb-12 flex hidden justify-center xs:block xs:w-full md:mb-0 md:w-5/12'>
          <div className='w-full translate-x-20 '>
            <Image
              src='/images/sidepic.png'
              alt='placeholder'
              width={542}
              height={643}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
