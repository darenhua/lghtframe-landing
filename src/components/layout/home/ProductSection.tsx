import Image from 'next/image';

import clsxm from '@/lib/clsxm';

interface Props {
  right?: boolean;
}

export default function ProductSection({ right }: Props) {
  return (
    <section className='my-20 mb-40'>
      <div
        className={clsxm(
          'flex items-center',
          right && 'flex-row-reverse text-right'
        )}
      >
        <div className={clsxm('w-6/12', right ? 'pl-8' : 'pr:8')}>
          <h2 className='text-5xl'>Introducing: Plasteel</h2>
          <div className={clsxm('mt-8 max-w-md', right && 'mr-0 ml-auto')}>
            <p className='md:text-lg lg:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              fuga perspiciatis tempore rem non quibusdam velit, magni
              accusantium in corrupti, dignissimos sunt ut blanditiis,
              voluptatem omnis eius dolores recusandae doloribus.
            </p>
          </div>
        </div>
        <div className='flex w-6/12 justify-center'>
          <div className='w-48 md:w-64 lg:w-72 xl:w-8/12'>
            <Image
              src='/images/download.png'
              alt='placeholder'
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
