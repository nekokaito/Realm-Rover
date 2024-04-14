import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
   const {createUser} = useContext(AuthContext)

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

    createUser(email, password)
    .then(result => console.log(result))
    .catch(error => console.log(error))

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