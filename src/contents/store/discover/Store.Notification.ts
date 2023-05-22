export interface StoreNotificationIProps {
  Heading: string;
  Description: string;
  Badge: string;
  Image: string;
  isRead: string;
}

export const StoreNotification = [
  {
    Heading: 'Notification Heading 1',
    Image: '/images/avatar/illustration/9.png',
    Description: 'Notification Description 1',
    Badge: 'trending',
    isRead: 'no',
  },
  {
    Heading: 'Notification Heading 2',
    Image: '/images/avatar/illustration/8.png',
    Description: 'Notification Description 2',
    Badge: 'trending',
    isRead: 'no',
  },
  {
    Heading: 'Notification Heading 3',
    Image: '/images/avatar/illustration/7.png',
    Description: 'Notification Description 3',
    Badge: 'hot',
    isRead: 'no',
  },
  {
    Heading: 'Notification Heading 4',
    Image: '/images/avatar/illustration/6.png',
    Description: 'Notification Description 4',
    Badge: 'hot',
    isRead: 'yes',
  },
  {
    Heading: 'Notification Heading 5',
    Image: '/images/avatar/illustration/4.png',
    Description: 'Notification Description 5',
    Badge: 'new',
    isRead: 'no',
  },
];
