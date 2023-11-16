import "../Pages/SignUp.css";

const SignUp=()=>{


    return(

<div className="sign-up-container">
<div className = "center">
<h1> Create Account</h1>



<form action="/api/users/createNewUser" method="post"> 
	<div className = "textField">
		<input type = "text" name ="firstName" required/> 
		<label>First Name</label>
	</div>	
	
	<div className = "textField">
		<input type = "text" name ="lastName" required/> 
		<label>Last Name</label>
	</div>	
	
	<div class = "textField">
		<input type = "text" name ="userName" required/> 
		<label>UserName</label>
	</div>	

	<div className = "textField">		
		<input type = "password" name ="password" required/> 
		<label>Password</label>
	</div>
	

	<div className = "textField">		
		<input type = "text" name ="email" required/> 
		<label>Email Address</label>
	</div>
	
	 {/* <div class = "textField">		
		<input type = "text" name ="user_id" required/> 
		<label>USER ID TEMP</label>
	</div>  */}
	
	<div className = "textField">		
		<input type = "text" name ="roles" required/> 
		<label>ROLES</label>
	</div>
	
	<div className = "signupbutton">
		<input type = "submit" value ="Sign Up"/>
	</div>
		




 </form>
 </div>

        
        
        </div>
    )




}

export default SignUp;