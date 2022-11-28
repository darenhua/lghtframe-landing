import Image from 'next/image';

import clsxm from '@/lib/clsxm';

interface Props {
  right?: boolean;
  imageUsed: number;
}

export default function ProductSection({ right, imageUsed }: Props) {
  const urls = [
    '/images/Enscape_2022-08-06-09-16-37_1-removebg-preview.png',
    '/images/Enscape_2022-08-06-10-08-42_2-removebg-preview.png',
    '/images/Enscape_2022-08-06-10-10-30_3-removebg-preview.png',
    '/images/Enscape_2022-08-06-09-56-25_4-removebg-preview.png',
    '/images/Enscape_2022-08-06-10-01-51_5-removebg-preview.png',
  ];
  const sizes = [
    {
      width: 509,
      height: 750, //846
    },
    {
      width: 802,
      height: 406,
    },
    {
      width: 802,
      height: 464,
    },
    {
      width: 538,
      height: 480,
    },
    {
      width: 626,
      height: 610,
    },
  ];
  const isMiddle = imageUsed === 1 || imageUsed === 2;
  return (
    <section className='my-20 mb-40 px-20'>
      <div className={clsxm('flex items-center', right && 'flex-row-reverse ')}>
        <div
          className={clsxm(
            isMiddle ? 'w-4/12' : 'w-6/12',
            right ? 'pl-8' : 'pr:8'
          )}
        >
          <h2 className='header-background text-5xl'>Introducing: Plasteel</h2>
          <div className={clsxm('mt-8 ml-6 max-w-md', right && 'mr-6 ml-auto')}>
            <p className='md:text-lg lg:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              fuga perspiciatis tempore rem non quibusdam velit, magni
              accusantium in corrupti, dignissimos sunt ut blanditiis,
              voluptatem omnis eius dolores recusandae doloribus.
            </p>
          </div>
        </div>
        <div
          className={clsxm(
            'flex  justify-center',
            isMiddle ? 'w-8/12 justify-start' : 'w-6/12'
          )}
        >
          <div
            className={clsxm(
              'w-48 md:w-64 lg:w-72',
              isMiddle ? 'xl:w-10/12' : 'xl:w-8/12'
            )}
          >
            <Image
              src={urls[imageUsed]}
              alt='placeholder'
              width={sizes[imageUsed].width}
              height={sizes[imageUsed].height}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
