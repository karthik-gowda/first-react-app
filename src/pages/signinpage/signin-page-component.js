import React from 'react';

function SignIn(){
    return(
        <div className="Form">
            <form>
                <div className="form-group">
                    <label for="userName">UserName</label>
                    <input type="text" id="userName" name="userName" placeholder="UserName"/>
                </div>
            </form>
        </div>
    )
}

export default SignIn;