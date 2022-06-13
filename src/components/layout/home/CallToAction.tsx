import Button from '@/components/buttons/Button';

export default function CallToAction() {
  return (
    <section className='my-20'>
      <div className='mx-auto flex max-w-2xl flex-col items-center rounded-2xl border-4 border-slate-200 px-20 py-6'>
        <h2 className='md:text-3xl lg:text-4xl'>Interested? Sign up now!</h2>
        <div className='mt-4'>
          <Button variant='primary'>Sign up now</Button>
        </div>
      </div>
    </section>
  );
}
