import Image from 'next/image';

import clsxm from '@/lib/clsxm';

interface Props {
  right?: boolean;
  imageUsed: number;
  headerText: string;
  bodyText: string;
}

export default function ProductSection({
  right,
  imageUsed,
  headerText,
  bodyText,
}: Props) {
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
    <section className='my-20 mb-40 px-4 sm:px-20'>
      <div
        className={clsxm(
          'flex flex-col-reverse items-center md:flex-row',
          right && 'md:flex-row-reverse'
        )}
      >
        <div
          className={clsxm(
            'w-10/12',
            isMiddle ? 'md:w-4/12' : 'md:w-6/12',
            right && !isMiddle ? 'md:pl-8' : 'md:pr:8'
          )}
        >
          <h2 className='header-background mt-8 text-center text-4xl md:mt-0 md:text-left md:text-3xl lg:text-5xl xl:text-6xl'>
            {headerText}
          </h2>
          <div
            className={clsxm(
              'mt-8 max-w-md md:ml-6 lg:max-w-xl xl:max-w-full',
              right && 'ml-auto md:mr-6'
            )}
          >
            <p className='max-w-md text-center md:text-left lg:max-w-xl lg:text-xl xl:max-w-full'>
              {bodyText}
            </p>
          </div>
        </div>
        <div
          className={clsxm(
            'flex justify-center',
            isMiddle ? 'justify-center md:w-8/12' : 'md:w-6/12'
          )}
        >
          <div
            className={clsxm(
              'flex w-8/12 justify-center md:w-64 lg:w-72',
              isMiddle ? 'md:w-10/12 lg:w-10/12 xl:w-10/12' : 'xl:w-8/12'
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
