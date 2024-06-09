import { Route } from 'next';
import { LinkProps } from 'next/link';
import TypedLink from '../TypedLink';
import ButtonComponent from '../Button';

type Props = {
  prev?: {
    title: string;
    lp: LinkProps<Route>;
  };
  next?: {
    title: string;
    lp: LinkProps<Route>;
  };
};

export default function PrevNextComponent({ prev, next }: Props) {
  return (
    <div className='flex justify-center items-center w-full gap-4'>
      {prev && (
        <TypedLink {...prev.lp}>
          <ButtonComponent>{'<- ' + prev.title}</ButtonComponent>
        </TypedLink>
      )}
      {next && (
        <TypedLink {...next.lp}>
          <ButtonComponent>{next.title + ' ->'}</ButtonComponent>
        </TypedLink>
      )}
    </div>
  );
}
