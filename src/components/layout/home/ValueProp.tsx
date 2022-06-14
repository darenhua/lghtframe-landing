import Image from 'next/image';

export default function ValueProp() {
  return (
    <section className='my-20 mb-40'>
      <div className='relative flex justify-center text-center'>
        <div className='pt-12'>
          <h2 className='md:max-w-lg md:text-4xl lg:max-w-xl lg:text-5xl'>
            We eliminate plastic waste and build houses
          </h2>
          <div className='md:mt-6 lg:mt-8'>
            <p className='text-xl'>Supported by Harvard E-Labs</p>
          </div>
          <div className='mb-12 md:mt-6 lg:mt-8'>
            <Image
              src='/images/download.png'
              alt='placeholder'
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className='absolute left-0 top-24 w-32 -translate-x-20 lg:top-0 lg:w-52 xl:w-56'>
          <Image
            src='/images/download.png'
            alt='placeholder'
            width={500}
            height={500}
          />
        </div>
        <div className='absolute right-0 top-24 w-32 translate-x-20 lg:top-0 lg:w-52 xl:w-56'>
          <Image
            src='/images/download.png'
            alt='placeholder'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
