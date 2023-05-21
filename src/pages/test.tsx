import { NextPage } from 'next';
import { HorizontalNavBar } from '../components/navbar/Horizontal.NavBar';
import { VerticalNavBar } from '../components/navbar/Vertical.NavBar';

interface IProps {}

/**
 * @Test_Page
 **/
const TestPage: NextPage<IProps> = (props) => {
  return (
    <div className="h-screen w-screen flex flex-col text-white items-center justify-center space-y-10 bg-primary-theme">
      <div className="flex flex-col max-w-[500px] mx-auto w-full h-full space-y-10 justify-center items-center">
        <VerticalNavBar />
        <HorizontalNavBar />
      </div>
    </div>
  );
};

// export { getServerSideProps };

export default TestPage;
