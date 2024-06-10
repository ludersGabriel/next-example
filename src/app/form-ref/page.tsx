'use client';

import ButtonComponent from '@/components/Button';
import SlowComponent, { MemoSlow } from '@/components/SlowComponent';
import PrevNextComponent from '@/components/prev-next/PrevNext';
import { createRef, useEffect, useRef, useState } from 'react';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const defaultFormData: FormData = {
  name: '',
  email: '',
  password: '',
};

const keys = Object.keys(defaultFormData) as (keyof FormData)[];

export default function FormPage() {
  const formRefs = [
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = formRefs.map((ref) => ref.current?.value);
    console.log(values);
  };

  return (
    <main className='p-4 flex flex-col gap-5 justify-between items-center'>
      <form
        className='flex flex-col gap-5 w-4/5'
        onSubmit={handleSubmit}
      >
        {keys.map((name, i) => (
          <div key={name} className='flex flex-col gap-2'>
            <label htmlFor={name}>{name.toUpperCase()}</label>
            <input
              id={name}
              name={name}
              type={name === 'password' ? 'password' : 'text'}
              placeholder={`Enter ${name}`}
              className='bg-black border p-2 rounded'
              ref={formRefs[i]}
            />
          </div>
        ))}

        <ButtonComponent type='submit'>Submit</ButtonComponent>
      </form>

      {/* <SlowComponent /> */}
      {/* <MemoSlow /> */}

      <PrevNextComponent
        next={{
          title: 'pokemon',
          lp: { href: '/pokemon' },
        }}
        prev={{
          title: 'home',
          lp: { href: '/' },
        }}
      />
    </main>
  );
}
