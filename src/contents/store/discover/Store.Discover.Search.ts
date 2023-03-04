export interface StoreDiscoverPopularSearchIProps {
  Label: string;
}

export interface StoreDiscoverCurationSearchIProps {
  Label: string;
  Image: string;
}

export interface StoreDiscoverExploreSearchIProps {
  LargeBanner: { Label: string; Image: string }[];
  SmallBanner: { Label: string; Image: string }[];
}

export const StoreDiscoverPopularSearch = [
  {
    Label: 'T-shirt',
  },
  {
    Label: 'Half slevees shirt',
  },
  {
    Label: 'Full Printed paint',
  },
  {
    Label: 'Plain T-shirt',
  },
  {
    Label: 'Half slevees t-shirt',
  },
  {
    Label: 'ABC T-shirt',
  },
  {
    Label: 'Full slevees shirt',
  },
  {
    Label: 'Printed paint',
  },
  {
    Label: 'Plain T-shirt',
  },
  {
    Label: 'Zara T-shirt',
  },
  {
    Label: 'Zudio T-shirt',
  },
  {
    Label: 'slevees shirt',
  },
  {
    Label: 'Querky T-shirt',
  },
];

export const StoreDiscoverCurationSearch = [
  {
    Label: 'T-shirt',
    Image: '/images/avatar/illustration/1.png',
  },
  {
    Label: 'Full slevees shirt',
    Image: '/images/avatar/illustration/2.png',
  },
  {
    Label: 'Printed paint',
    Image: '/images/avatar/illustration/3.png',
  },
  {
    Label: 'Plain T-shirt',
    Image: '/images/avatar/illustration/4.png',
  },
  {
    Label: 'Half slevees t-shirt',
    Image: '/images/avatar/illustration/5.png',
  },
  // {
  //   Label: 'T-shirt',
  //   Image: '/images/avatar/illustration/6.png',
  // },
  // {
  //   Label: 'Full slevees shirt',
  //   Image: '/images/avatar/illustration/7.png',
  // },
  // {
  //   Label: 'Printed paint',
  //   Image: '/images/avatar/illustration/8.png',
  // },
  // {
  //   Label: 'Plain T-shirt',
  //   Image: '/images/avatar/illustration/9.png',
  // },
  // {
  //   Label: 'Half slevees t-shirt',
  //   Image: '/images/avatar/illustration/1.png',
  // },
];

export const StoreDiscoverExploreSearch = {
  LargeBanner: [
    {
      Label: 'Winter Collections',
      Image: '/images/avatar/illustration/1.png',
    },
    {
      Label: 'Summer Collections',
      Image: '/images/avatar/illustration/2.png',
    },
  ],
  SmallBanner: [
    {
      Label: 'Shirts',
      Image: '/images/avatar/illustration/4.png',
    },
    {
      Label: 'Hoodies',
      Image: '/images/avatar/illustration/9.png',
    },
    {
      Label: 'Jeans',
      Image: '/images/avatar/illustration/8.png',
    },
    {
      Label: 'Trouser',
      Image: '/images/avatar/illustration/6.png',
    },
    {
      Label: 'Jackets',
      Image: '/images/avatar/illustration/9.png',
    },
    {
      Label: 'T-Shirts',
      Image: '/images/avatar/illustration/10.png',
    },
  ],
};
