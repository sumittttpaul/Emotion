import { NextPage } from 'next';
import { DOBbutton } from '../components/button/DOBbutton';
import { AvatarButton } from '../components/ui/AuthComponentUI/SetupAccountComponentUI/buttonUI/AvatarButton';
import { DatePickerButton } from '../components/ui/AuthComponentUI/SetupAccountComponentUI/buttonUI/DatePickerButton';

const Test: NextPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
        {/* <AvatarButton/> */}
      {/* <DOBbutton theme="light" onClick={() => {}} label="16 / 10 / 2002" /> */}
      <DatePickerButton/>
    </div>
  );
};

export default Test;
