import React from 'react';
import EmailPass from '../../components/forms/email-password-form';

function SignUp(){
    return(
        <div className="container">
            <h2 className="text-center">SignUp </h2>
            <form>
                <div className="form-group">
                    <label for="userName">UserName</label>
                    <input className="form-control" type="text" id="userName" name="userName" placeholder="UserName"/>
                </div>
                <EmailPass/>
                <small className="mx-3">Already a Member? <a href="/signin">SignIn</a> </small>
            </form>
        </div>
    )
}

export default SignUp;