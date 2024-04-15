import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Update = () => {
    const {user, updateUserProfile} = useContext(AuthContext);

    const Update = (e) => {
        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo-url");
    
        updateUserProfile(name, photo)
          .then(() => {
            console.log("profile updated");
            window.location.reload();
          })
          .catch();
      };
    

    return (
        <>
        <h1 className="text-4xl text-center my-10 font-bold">Update Profile</h1>
       <div className="flex my-14 justify-center p-10">
           <div className="glass w-full md:w-1/2 rounded-3xl">

            <div className="flex flex-col justify-around items-center p-5">
            <div>
                <img className="rounded-full w-40" src={user?.photoURL} alt="" />
                <h1 className="text-xl font-semibold text-center">{user?.displayName}</h1>
            </div>

            <div>
            <form onSubmit={Update} className="card-body ">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="text" name="name" placeholder="name" className="input input-bordered" />
           </div>
          <div className="form-control">
             <label className="label">
               <span className="label-text">Photo Url</span>
             </label>
             <input type="text" name="photo-url" placeholder="email" className="input input-bordered"  />
           </div>
          
           <div className="form-control mt-6">
             <button className="btn btn-primary">Update</button>
           </div>
          
         </form>
            </div>
            </div>
            
           
           </div>
       
       </div>
       
       </>
    );
};

export default Update;