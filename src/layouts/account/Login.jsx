/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
   
   const {logIn} = useContext(AuthContext)

    const handleLogIn = (e) => {

        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        
       
        const email =  form.get('email');
        const password =  form.get('password');
        logIn (email, password)
        .then (result => console.log('done', result))
        .catch (error => console.log(error))
        
    
       }
    
    
      return (
        <>
         <h1 className="text-4xl text-center my-10 font-bold">Login Now!</h1>
        <div className="flex my-14 justify-center p-10">
            <div className="glass w-full md:w-1/2 xl:w-3/12 rounded-3xl">
            <form onSubmit={handleLogIn} className="card-body ">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="my-5">
                <p className="text-sm font-extralight"> Don't You Have An Account? <Link className="italic text-blue-400" to="/register">Register Now!</Link></p>
             </div>
          </form>
            </div>
             
        </div>
        
        </>
    );
};

export default Login;