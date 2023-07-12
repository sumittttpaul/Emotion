import { Link } from '@mui/material';
import { Privacy_Policy_Link } from 'routers/RouterLinks';

function PhonePrivacyPolicy() {
  return (
    <div className="flex items-center">
      <h6 className="ml-3 text-xs font-light text-[#ffffffbf]">
        I agree with&#160;
        <Link
          className="text-white underline-offset-2 text-xs"
          component="button"
          underline="always"
          href={Privacy_Policy_Link}
        >
          privacy policy
        </Link>
      </h6>
    </div>
  );
}

export default PhonePrivacyPolicy;
