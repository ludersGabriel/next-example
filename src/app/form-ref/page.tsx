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
  const formRefs = useRef([]);

  useEffect(() => console.log(formRefs), []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formRefs);
  };

  return (
    <main className='p-4 flex flex-col gap-5 justify-between items-center'>
      <form
        className='flex flex-col gap-5 w-4/5'
        onSubmit={handleSubmit}
      >
        {keys.map((name, i) => {
          return (
            <div key={name} className='flex flex-col gap-2'>
              <label htmlFor={name}>{name.toUpperCase()}</label>
              <input
                id={name}
                name={name}
                type={name === 'password' ? 'password' : 'text'}
                placeholder={`Enter ${name}`}
                className='bg-black border p-2 rounded'
                ref={(el) => (formRefs.current[i] = el)}
              />
            </div>
          );
        })}

        <ButtonComponent type='submit'>Submit</ButtonComponent>
      </form>

      {/* <FormComponent /> */}

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
