

import Link from 'next/link';
import React from 'react';

const NavList = () => {
  const List = [
     
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Shop',
      path: '/shop'
    },
    {
      name: 'Comparison',
      path: '/product-comparison'
    },
    {
      name: 'contact',
      path: '/contact'
    },
    {
      name: 'Blog',
      path: '/blogs'
    },
  ]
 

  return (
    <ul>
      {
        List.map(list => {
          return <>
            <Link href={list.path}>
              <li>
                {list.name}
              </li>
            </Link>
          </>
        })
      }

      
    </ul>
  );
};

export default NavList;