import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import{useSelector} from 'react-redux'

const Login = () => {

    const loggedreducer =  useSelector(state => state.loggedreducer)

    const[username,setusername] = useState("")
    const[password,setpassword] = useState("")
    const[errors,seterrors] = useState("")



    // const Schema = {
    //     type: 'object',
    //     properties: {
    //         username: { type: 'string', format: 'email' },
    //         password:{type:"" , format : "password"}
    //     },
    //     required: [
    //         'username',
    //         "password"
    //     ],
    // };
    
//    const schema = {
//         username : joi.string().required(),
//         password : joi.string().required()
//         };

// const validate = () =>{
//     const result = joi.validate(account , schema ,{abortEarly : false})
//     if(!result.error) return null ;

//     const errors = {}
//     for(let item of result.error.details)
//         errors[item.path[0]] = item.message;

//     return errors
    

// };

const validate = () =>{
    let userngx =/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    let userresult = userngx.test(username); // true or false

    let passngx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/
    let passresult = passngx.test(password) // t ot f
    
    if(!userresult) return seterrors("username is not correct") 
    if(!passresult) return seterrors("password is not correct") 

};


const    handlesubmit = (e) =>{
    e.preventDefault();
    validate();

    const formdata ={
        name : username ,
        password : password
    };
    console.log(formdata)
     //send for data base

    // Axios.post("url" , formdata).then( res =>{
    //     console.log(res)
    // }).catch( err =>{
    //     console.log(err)
    // })
        

        
    };
// ////////
   const handleuserchange = evn =>{
        setusername(evn.target.value)
    };
  const  handlepasschange = event =>{
        setpassword( event.target.value)
    };
    // /////////
const dismissError = () =>{
    seterrors("");
};

    return ( <>
           {loggedreducer ? 'you logged in' : 'you are not login'}
        <div style={{margin:"100px"}}>
            <h1> LOGIN</h1>
            <form onSubmit={handlesubmit}>
                
                <label>User Name</label>
          <input type="text" data-test="username" value={username} onChange={ handleuserchange} />

          <label>Password</label>
          <input type="password" data-test="password" value={password} onChange={handlepasschange} />
          { 
                  errors &&
                  <h3 className="alert alert-danger">
                 <button onClick={dismissError}>✖</button>
                 {errors}
            </h3>
            }

          <input type="submit" value="Log In" data-test="submit" />
          

            </form>
        </div>

    </> );
}
 
export default Login;