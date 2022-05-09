import AuthContainer from '../../components/container/AuthContainer';
import IconTextFieldDark from '../textfield/IconTextFieldDark'
import PasswordTextFieldDark from '../textfield/PasswordTextFieldDark'

const LoginUI = () => {
 return(
    <AuthContainer>
        <div className='w-full max-w-[350px] space-y-7 py-10'>
            <IconTextFieldDark label="Email Address" icon="/icons/email.svg"/>
            <PasswordTextFieldDark label="Password" icon="/icons/password.svg"/>
        </div>
    </AuthContainer>
 )
}

export default LoginUI;