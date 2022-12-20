import Image from 'next/image';

import clsxm from '@/lib/clsxm';

export default function Team() {
  const members = [
    {
      name: 'Avi Robinson',
      image: '/images/download.png',
    },
    {
      name: 'Simina Marin',
      image: '/images/download.png',
    },
    {
      name: 'Jimmy Liu',
      image: '/images/download.png',
    },
    {
      name: 'Mustafa Khan',
      image: '/images/download.png',
    },
    {
      name: 'Cullen Riley-Duffy',
      image: '/images/download.png',
    },
    {
      name: 'Ifeacho Awachie',
      image: '/images/download.png',
    },
    {
      name: 'Daren Hua',
      image: '/images/download.png',
    },
  ];
  return (
    <section className='my-20 lg:px-10 xl:px-20'>
      <div className='flex w-full flex-wrap justify-center lg:flex-nowrap'>
        {members.map((member, index) => (
          <div
            className={clsxm(
              'flex w-36 flex-col items-center px-2 pt-4 lg:w-48',
              index < members.length - 1 &&
                'lg:border-r-2 lg:border-dotted lg:border-slate-700 '
            )}
            key={index}
          >
            <Image
              src={member.image}
              alt='placeholder'
              width={200}
              height={200}
            />
            <div className='flex h-16 items-center pt-2'>
              <p className='h-fit text-center text-lg font-bold leading-tight xl:text-xl'>
                {member.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
