import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
    return (
        <div 
        className='flex items-center justify-center m-auto relative min-h-screen'>
            <SignUpForm/>
           <SignInForm/> 
        </div>
    );
};

export default Authentication;