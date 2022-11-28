import UnderlineLink from '@/components/links/UnderlineLink';

export default function CallToAction() {
  return (
    <section className='my-20'>
      <div className='mx-auto flex max-w-2xl flex-col items-center  border-4 border-slate-200 bg-lghtcolordark px-20 py-6'>
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
