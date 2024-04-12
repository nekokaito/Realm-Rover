

const Login = () => {
    const handleReg = (e) => {

        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        
        const name =  form.get('name');
        const email =  form.get('email');
    
        const photoUrl =  form.get('photo-url');
        const password =  form.get('password');
    
        console.log(name,email,photoUrl,password);
    
       }
    
    
      return (
        <>
         <h1 className="text-4xl text-center my-10 font-bold">Login Now!</h1>
        <div className="flex my-14 justify-center">
            <div className="glass xl:w-3/12 rounded-3xl">
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
          </form>
            </div>
        
        </div>
        
        </>
    );
};

export default Login;