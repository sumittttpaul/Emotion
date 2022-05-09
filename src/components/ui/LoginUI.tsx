import AuthContainer from '../../components/container/AuthContainer';
import DarkTextField from '../../components/textfield/DarkTextField'

const LoginUI = () => {
 return(
    <AuthContainer>
        <DarkTextField label="Email Address"/>
        <DarkTextField label="Password"/>
    </AuthContainer>
 )
}

export default LoginUI;