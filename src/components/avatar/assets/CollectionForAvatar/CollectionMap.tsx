import Image from 'next/image';
import { m } from 'framer-motion';
import { Square_BlurDataURL } from 'components/loader/BlurDataURL';
import { SetupAvatarContentProps } from 'contents/setup/Setup.Avatar';

interface IProps {
  AvatarReducer: SetupAvatarContentProps[];
  forward: () => void;
  getURL: (value: string) => void;
}

export function CollectionMap(props: IProps) {
  return (
    <div className="h-full w-full items-center justify-center box-border relative overflow-scroll">
      <div
        className="h-auto w-full box-border pb-6 pt-2 px-6
          inline-grid 
          grid-flow-row-dense
          grid-cols-4 
          xs-350:grid-cols-5 
          sm-500:grid-cols-8
          gap-4"
      >
        {props.AvatarReducer.map((avatars) => {
          return (
            <m.button
              key={avatars.iconURL}
              className="rounded-[50%] relative overflow-hidden cursor-default opacity-100 hover:opacity-50 transition-opacity"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                props.getURL(avatars.iconURL);
                props.forward();
              }}
            >
              <Image
                height={440}
                width={440}
                src={avatars.iconURL}
                alt=""
                placeholder="blur"
                blurDataURL={Square_BlurDataURL}
              />
            </m.button>
          );
        })}
      </div>
    </div>
  );
}
