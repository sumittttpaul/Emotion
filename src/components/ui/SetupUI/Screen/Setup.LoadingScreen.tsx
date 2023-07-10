import { Skeleton } from '@mui/material';

interface IProps {
  ClassName?: string;
}

const backgroundColor = '#FFFFFF1F';

export function SetupLoadingScreen(props: IProps) {
  return (
    <div
      className={`${props.ClassName} flex w-full items-center justify-center`}
    >
      <div className="w-full h-full hidden ml-14 md:p-14 md:flex items-center justify-center">
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ backgroundColor: backgroundColor, maxHeight: 350 }}
        />
      </div>
      <div className="w-full h-full flex p-5 md:p-14 flex-col items-center justify-center">
        <div className="w-full flex flex-col -space-y-3">
          <Skeleton
            variant="text"
            width="100%"
            height={50}
            sx={{ backgroundColor: backgroundColor }}
          />
          <Skeleton
            variant="text"
            width="50%"
            height={50}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className="w-full flex flex-col mt-2">
          <Skeleton
            variant="text"
            width="100%"
            height={30}
            sx={{ backgroundColor: backgroundColor }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={30}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className="w-full flex justify-start mt-2">
          <Skeleton
            variant="text"
            width="30%"
            height={60}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className="w-full flex justify-start">
          <Skeleton
            variant="rectangular"
            width="100%"
            height={250}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className="w-full flex justify-end mt-7">
          <Skeleton
            variant="rectangular"
            width={160}
            height={50}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
      </div>
    </div>
  );
}

export function AuthEmailVerifySkeleton(props: IProps) {
  return (
    <div
      className={`${props.ClassName} w-full flex space-y-3 flex-col items-center justify-center`}
    >
      <div className="w-full flex flex-col">
        <Skeleton
          variant="text"
          width="100%"
          height={30}
          sx={{ backgroundColor: backgroundColor }}
        />
        <Skeleton
          variant="text"
          width="100%"
          height={30}
          sx={{ backgroundColor: backgroundColor }}
        />
        <Skeleton
          variant="text"
          width="70%"
          height={30}
          sx={{ backgroundColor: backgroundColor }}
        />
      </div>
      <div className="w-full flex flex-col space-y-3 pt-3">
        <Skeleton
          variant="rectangular"
          width={160}
          height={30}
          sx={{ backgroundColor: backgroundColor }}
        />
      </div>
    </div>
  );
}

export function AuthConfirmEmailVerifySkeleton(props: IProps) {
  return (
    <div
      className={`${props.ClassName} flex flex-col md:flex-row w-full items-center justify-center`}
    >
      <div className="pt-20 pb-7 md:p-14 md:ml-14 relative flex w-full h-full justify-center items-center">
        <div className="flex h-[125px] w-[200px] md:h-full md:w-full md:items-center md:justify-center">
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ backgroundColor: backgroundColor, maxHeight: 350 }}
          />
        </div>
      </div>
      <div className="w-full h-full flex p-5 md:p-14 space-y-3 flex-col items-center justify-center">
        <div className="max-w-[350px] md:max-w-none w-full flex flex-col justify-center items-center -space-y-3">
          <Skeleton
            variant="text"
            width="90%"
            height={50}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <Skeleton
            variant="text"
            width="100%"
            height={30}
            sx={{ backgroundColor: backgroundColor }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={30}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className="w-full flex flex-col justify-start space-y-3 pt-3">
          <Skeleton
            variant="rectangular"
            width={160}
            height={30}
            sx={{ backgroundColor: backgroundColor }}
          />
          <Skeleton
            variant="rectangular"
            width={160}
            height={30}
            sx={{ backgroundColor: backgroundColor }}
          />
          <Skeleton
            variant="rectangular"
            width={160}
            height={30}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
      </div>
    </div>
  );
}
