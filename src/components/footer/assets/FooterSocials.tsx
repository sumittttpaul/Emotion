import { Link } from '@mui/material';
import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/legacy/image';
import { Square_BlurDataURL } from '../../loader/BlurDataURL';

interface IProps {
  Content: { label: string; to: string; icon: StaticImageData }[];
  heading: string;
}

/**
 * @author
 * @function @FooterSocials
 **/

export const FooterSocials: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col py-2">
      <h6 className="text-white text-sm opacity-50 py-1">{props.heading}</h6>
      <div className="relative flex">
        <ul className="flex relative space-x-2 pt-1">
          {props.Content.map((value) => (
            <li key={value.label} className="relative flex">
              <Link
                href={value.to}
                className="flex underline-offset-2 whitespace-nowrap space-x-2 button-text-lower"
              >
                <Image
                  height={25}
                  width={25}
                  className="flex items-center"
                  src={value.icon}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={Square_BlurDataURL}
                  alt=""
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
