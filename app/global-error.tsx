'use client';
import { useEffect } from 'react';
import './globals.css';

/**
 * Replaces the root layout when it is the thing that failed, so it has to
 * render its own html/body and cannot rely on anything above it.
 */
export default function GlobalError({
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
    <html lang='en'>
      <body className='antialiased'>
        <main className='min-h-screen flex items-center justify-center px-8 py-24'>
          <div className='max-w-xl w-full text-center'>
            <h1 className='font-serif font-semibold text-5xl leading-[1.1]'>
              Something went wrong.
            </h1>
            <p className='font-mono text-sm leading-relaxed opacity-80 mt-6'>
              The page failed to load. Please try again.
            </p>
            {error.digest && (
              <p className='font-mono text-xs opacity-50 mt-4'>
                Reference: {error.digest}
              </p>
            )}
            <button
              type='button'
              onClick={reset}
              className='inline-flex px-6 py-3 mt-10 font-mono text-sm min-h-11 items-center justify-center border-2 border-current rounded hover:bg-current hover:bg-opacity-10 transition-all active:scale-95'
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
