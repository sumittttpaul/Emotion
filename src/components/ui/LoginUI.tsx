import AuthContainer from '../../components/container/AuthContainer';
import DarkTextField from '../../components/textfield/DarkTextField'

const LoginUI = () => {
 return(
    <AuthContainer>
        <div className='w-full max-w-[350px] space-y-7 py-10'>
            <DarkTextField label="Email Address" icon="/icons/email.svg"/>
            <DarkTextField label="Password" icon="/icons/password.svg"/>
        </div>
    </AuthContainer>
 )
}

export default LoginUI;