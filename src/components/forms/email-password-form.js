import React from 'react';

function EmailPass(){
    return(
        <>
        <div className="form-group">
            <label for="email">Email Address</label>
            <input className="form-control" type="email" id="email" name="emailid" placeholder="Email Address"/>
        </div>
        <div className="form-group">
            <label for="pass">Password</label>
            <input className="form-control" type="password" id="pass" name="psw" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

    </>
    )
}

export default EmailPass;