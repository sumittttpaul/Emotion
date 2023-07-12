import RotateSlider from 'components/slider/RotateSlider';

interface IProps {
  setRotateValue: React.Dispatch<React.SetStateAction<number>>;
  rotate: (value: number) => void;
  SliderRef: React.RefObject<HTMLElement>;
}

export function CropAvatarSlider(props: IProps) {
  return (
    <div className="px-5 pt-5 w-full sm:max-w-[470px] mx-auto relative">
      <RotateSlider
        SliderRef={props.SliderRef}
        getValue={(value) => {
          props.rotate(parseInt(value.toString()));
          props.setRotateValue(parseInt(value.toString()));
        }}
      />
    </div>
  );
}
