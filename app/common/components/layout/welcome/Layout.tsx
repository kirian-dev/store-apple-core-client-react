import { FC } from 'react';
import { MetaTitle } from '../../helmet';
import { Header } from './header';

interface LayoutProps {
  children?: JSX.Element;
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <MetaTitle title={title}  />
      <Header />
      <div className="px-4 xl:px-6 h-screen">{children}</div>
    </>
  );
};
