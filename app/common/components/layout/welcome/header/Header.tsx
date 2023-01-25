import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import { menuList } from '@/common/constants/menu.list';

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#ececec] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link to="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <img src="https://rb.gy/vsvv2o" />
          </div>
        </Link>
      </div>
      <ul className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        {menuList.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
        <Link to="/checkout">
          <div className="relative cursor-pointer">
            <ShoppingBagIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
          </div>
        </Link>
        <UserIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
      </div>
    </header>
  );
};
