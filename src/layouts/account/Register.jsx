import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
   const {createUser, updateProfile} = useContext(AuthContext)
   const [errorReg, setErrorReg] = useState('');
   const location = useLocation();
   const navigation = useNavigate();
  console.log(errorReg);
   useEffect(() => {
    document.title = "Register | Realm Rover";
  }, []);
   const handleReg = (e) => {

    e.preventDefault();

    const form = new FormData(e.currentTarget);
    
    const name =  form.get('name');
    const email =  form.get('email');

    const photoUrl =  form.get('photo-url');
    const password =  form.get('password');


    setErrorReg('');

    if (!/.{6,}/.test(password)) {
      setErrorReg(
        "Length must be at least 6 character"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorReg(
        "Must have an Uppercase letter in the password"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setErrorReg(
        "Must have a Lowercase letter in the password"
      );
      return;
    }

    createUser(email, password)
    .then((result) => {
      console.log(result.user);
      toast.success("Registration Successful");

      updateProfile(result.user, {
        displayName: name,
        photoURL: photoUrl,
      })
      .then (() => {
        toast.success('Registration Completed');
        navigation(location?.state ? location.state : '/');
   })
        .catch();

  
    })
    .catch((error) => {
      console.error(error);
      setErrorReg(error.message);
    });

   }


  return (
    <>
     <h1 className="text-4xl text-center my-10 font-bold">Register Now!</h1>
    <div className="flex my-14 justify-center p-10">
        <div className="glass w-full md:w-1/2 xl:w-3/12 rounded-3xl">
        <form onSubmit={handleReg} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo-url" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create Account</button>
        </div>
        <div>
          <p className=" text-red-500 text-sm"> {errorReg}</p>
        </div>
        <div className="my-5">
                <p className="text-sm font-extralight"> Already Have An Account? <Link className="italic text-blue-400" to="/login">Login Now!</Link></p>
             </div>
      </form>
        </div>
    
    </div>
    
    </>
    
  );
};

export default Register;