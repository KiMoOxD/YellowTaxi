import { SVGProps } from 'react';
import { Cursor } from './cursor.tsx';

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={31}
      fill='none'
      {...props}
    >
      <g clipPath='url(#a)'>
        <path
          fill={'#22c55e'}
          fillRule='evenodd'
          stroke={'#fff'}
          strokeLinecap='square'
          strokeWidth={2}
          d='M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill={'#22c55e'} d='M0 0h26v31H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export function Cursor2({ img, name, width}) {
  return (
    <div className='py-12'>
      <div className='overflow-hidden relative size-[300px] rounded-full bg-white p-2 shadow-md'>
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.15,
          }}
          className='left-12 top-4'
        >
          <div>
            <MouseIcon className='h-6 w-6' />
            <div className='ml-4 mt-1 rounded-[4px] bg-green-500 px-2 py-0.5 text-neutral-50'>
              {name}
            </div>
          </div>
        </Cursor>
        <img
          src={img}
          alt='Green herbs'
          className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[100%] max-w-[200%]`}
        />
      </div>
    </div>
  );
}
