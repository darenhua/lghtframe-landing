import Image from 'next/image';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  const links = [
    { href: '/', label: 'Explore Houses' },
    { href: '/about', label: 'About LGHTFrame' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className='flex h-fit w-screen flex-col items-center bg-slate-100 pt-20 lg:h-80'>
      <div className='flex h-full w-9/12 flex-col lg:flex-row '>
        <div className='h-full w-44 sm:w-4/12'>
          <div className='w-32'>
            <Image
              src='/svg/colorlogo.svg'
              alt='placeholder'
              layout='intrinsic'
              width={250}
              height={150}
            />
          </div>
          <p className='text-2xl'>Contact us at </p>
          <p className='text-2xl font-bold'>info@lghtframe.com</p>
        </div>
        <div className='ml:0 lg:mt:0 mt-8 h-full w-44 sm:w-4/12 lg:ml-10'>
          <h3 className='mb-6 hidden lg:block'>Learn More</h3>
          <ul className='text-lg'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className='mb-2'>
                <UnderlineLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnderlineLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='relative h-full w-4/12 min-w-[200px] max-w-sm translate-y-24 self-center sm:min-w-[320px] lg:translate-y-0'>
          <Image
            src='/images/footerimage.png'
            alt='placeholder'
            layout='responsive'
            width={1700}
            height={1719}
          />
        </div>
      </div>
      <div className='h-12 min-w-full bg-slate-200 p-16 lg:p-20'></div>
    </footer>
  );
}
