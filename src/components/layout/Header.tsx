import Image from 'next/image';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'About' },
  { href: '/', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 h-20 w-screen bg-white bg-opacity-80 py-6 transition-all hover:bg-opacity-100'>
      <div className='layout flex h-full items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <div className='w-24'>
            <Image
              src='/svg/colorlogo.svg'
              alt='placeholder'
              layout='intrinsic'
              width={250}
              height={150}
            />
          </div>
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
