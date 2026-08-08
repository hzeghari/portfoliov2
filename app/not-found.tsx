import type { Metadata } from 'next';
import Link from 'next/link';
import { NAV } from './constants/nav';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className='min-h-screen flex items-center justify-center px-8 sm:px-4 py-24'>
      <div className='max-w-xl w-full text-center'>
        <p className='font-mono text-sm text-primary-800 dark:text-(--accent)'>
          404
        </p>
        <h1 className='font-serif font-semibold text-6xl sm:text-[clamp(2rem,10vw,3rem)] leading-[1.1] mt-4'>
          This page doesn&apos;t exist.
        </h1>
        <p className='font-mono text-sm sm:text-[13px] leading-relaxed opacity-80 mt-6'>
          The link may be out of date, or the page may have moved. Here is where
          you can go instead.
        </p>

        <ul className='flex flex-wrap items-center justify-center gap-3 mt-10 list-none'>
          <li>
            <Link
              href='/'
              className='inline-flex px-6 py-3 font-mono text-sm min-h-11 items-center justify-center border-2 border-current rounded hover:bg-current hover:bg-opacity-10 transition-all active:scale-95'
            >
              Home
            </Link>
          </li>
          {NAV.map((item) => (
            <li key={item.slug}>
              <Link
                href={item.slug}
                className='inline-flex px-6 py-3 font-mono text-sm min-h-11 items-center justify-center rounded opacity-70 hover:opacity-100 underline underline-offset-4 transition-opacity'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
