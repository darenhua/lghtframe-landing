import Image from 'next/image';

import OutsideLink from '@/components/links/UnderlineLink';

export default function ValueProp() {
  return (
    <section className='mb-20 bg-lghtcolorlight pt-20'>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center pt-12'>
          <div className='inline-flex flex-col items-center text-xl text-lghtcolordark xs:flex-row'>
            <h3 className='mr-2'>Supported by</h3>
            <div className='inline-flex items-center'>
              <Image
                src='/images/avatars-000220355343-echc6t-original.jpg'
                alt='placeholder'
                width={25}
                height={25}
              />
              <h3 className='ml-2'>
                <OutsideLink
                  href='https://innovationlabs.harvard.edu/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Harvard Innovation Labs
                </OutsideLink>
              </h3>
            </div>
          </div>
          <div className='  flex flex-col items-center pt-20 md:flex-row'>
            <div className='flex w-9/12 flex-col  items-center pl-10 pr-8 md:w-6/12 md:items-start lg:pr-20'>
              <h2 className='header-background max-w-md text-center text-4xl md:text-left md:text-3xl lg:max-w-xl  lg:text-5xl xl:text-6xl'>
                A more efficient structural system.
              </h2>
              <div className='mt-8 md:max-w-lg'>
                <p className='pb-8 text-center md:pb-4 md:text-left md:text-lg lg:text-xl'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  fuga perspiciatis tempore rem non quibusdam velit, magni
                  accusantium in corrupti, dignissimos sunt ut blanditiis,
                  voluptatem omnis eius dolores recusandae doloribus.
                </p>
              </div>
            </div>
            <div className='w-full xxs:w-10/12 xs:w-8/12  md:w-6/12'>
              <Image
                src='/images/Capture_2 1.png'
                alt='placeholder'
                width={979.5}
                height={750}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
