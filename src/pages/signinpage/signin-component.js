import React from 'react';
import EmailPass from '../../components/forms/email-password-form';
function SignIn(){
    return(
        <div className="container">
            <h2 className="text-center">SignIn</h2>
            <form>
                <EmailPass/>
                <small className="mx-4">New User? <a href="/signup">SignUp</a> </small>
            </form>
        </div>
    )
}

export default SignIn;