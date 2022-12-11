import UnderlineLink from '@/components/links/UnderlineLink';

export default function CallToAction() {
  return (
    <section className='my-20'>
      <div className='header-background mx-auto flex w-fit  justify-center py-6 px-10 md:px-20 lg:px-36'>
        <h3 className='text-white md:text-2xl lg:text-3xl'>
          Contact us at{' '}
          <UnderlineLink href='mailto:info@lghtframe.com'>
            info@lghtframe.com
          </UnderlineLink>
        </h3>
      </div>
    </section>
  );
}
