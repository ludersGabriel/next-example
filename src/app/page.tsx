'use client';

import ButtonComponent from '@/components/Button';
import SlowComponent, { MemoSlow } from '@/components/SlowComponent';
import PrevNextComponent from '@/components/prev-next/PrevNext';
import { useState } from 'react';

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

export default function FormPage() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <main className='p-4 flex flex-col gap-5 justify-between items-center'>
      <form
        className='flex flex-col gap-5 w-4/5'
        onSubmit={handleSubmit}
      >
        {Object.keys(defaultFormData).map((name) => {
          const formKey = name as keyof FormData;

          return (
            <div key={name} className='flex flex-col gap-2'>
              <label htmlFor={name}>{name.toUpperCase()}</label>
              <input
                id={name}
                name={name}
                type={name === 'password' ? 'password' : 'text'}
                value={formData[formKey]}
                onChange={handleChange}
                placeholder={`Enter ${name}`}
                className='bg-black border p-2 rounded'
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
          title: 'ref example',
          lp: { href: '/form-ref' },
        }}
      />
    </main>
  );
}

function FormComponent() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form className='p-4 flex flex-col gap-5' onSubmit={handleSubmit}>
      {Object.keys(defaultFormData).map((name) => {
        const formKey = name as keyof FormData;

        return (
          <div key={name} className='flex flex-col gap-2'>
            <label htmlFor={name}>{name.toUpperCase()}</label>
            <input
              id={name}
              name={name}
              type={name === 'password' ? 'password' : 'text'}
              value={formData[formKey]}
              onChange={handleChange}
              placeholder={`Enter ${name}`}
              className='bg-black border p-2 rounded'
            />
          </div>
        );
      })}

      <ButtonComponent type='submit'>Submit</ButtonComponent>
    </form>
  );
}
