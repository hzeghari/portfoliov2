'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className='min-h-screen flex items-center justify-center px-8 sm:px-4 py-24'>
      <div className='max-w-xl w-full text-center'>
        <p className='font-mono text-sm text-primary-800 dark:text-(--accent)'>
          Error
        </p>
        <h1 className='font-serif font-semibold text-6xl sm:text-[clamp(2rem,10vw,3rem)] leading-[1.1] mt-4'>
          Something went wrong.
        </h1>
        <p className='font-mono text-sm sm:text-[13px] leading-relaxed opacity-80 mt-6'>
          This one is on me, not you. Trying again usually clears it.
        </p>

        {error.digest && (
          <p className='font-mono text-xs opacity-50 mt-4'>
            Reference: {error.digest}
          </p>
        )}

        <div className='flex flex-wrap items-center justify-center gap-3 mt-10'>
          <button
            type='button'
            onClick={reset}
            className='inline-flex px-6 py-3 font-mono text-sm min-h-11 items-center justify-center border-2 border-current rounded hover:bg-current hover:bg-opacity-10 transition-all active:scale-95'
          >
            Try again
          </button>
          <Link
            href='/'
            className='inline-flex px-6 py-3 font-mono text-sm min-h-11 items-center justify-center rounded opacity-70 hover:opacity-100 underline underline-offset-4 transition-opacity'
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
