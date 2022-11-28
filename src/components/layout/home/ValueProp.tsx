import Image from 'next/image';

import OutsideLink from '@/components/links/UnderlineLink';

export default function ValueProp() {
  return (
    <section className='mb-20 bg-lghtcolorlight pt-20'>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center pt-12'>
          <div className='inline-flex items-center text-xl text-lghtcolordark'>
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
          <div className='flex items-center pt-20'>
            <div className='flex w-6/12 flex-col items-center'>
              <h2 className='header-background max-w-md text-5xl'>
                A more efficient structural system.
              </h2>
              <div className='mt-8 max-w-md'>
                <p className='md:text-lg lg:text-xl'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  fuga perspiciatis tempore rem non quibusdam velit, magni
                  accusantium in corrupti, dignissimos sunt ut blanditiis,
                  voluptatem omnis eius dolores recusandae doloribus.
                </p>
              </div>
            </div>
            <div className='w-6/12'>
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
