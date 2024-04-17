import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Update = () => {
    const {user, updateUserProfile} = useContext(AuthContext);

    useEffect(() => {
      document.title = "Update Profile | Realm Rover";
    }, []);
    
    const Update = (e) => {
        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        let name = form.get("name");
        let photo = form.get("photo-url");

        if (photo === '') {
          photo = user?.photoURL;
        }
        if (name === '') {
          name = user?.displayName;
        }
    
        updateUserProfile(name, photo)
          .then(() => {
            console.log("profile updated");
            window.location.reload();
          })
          .catch();
      };
    

    return (
        <div data-aos="fade-left">
        <h1 className="text-4xl text-center my-10 font-bold animate__wobble animate__delay-2s">Update Profile</h1>
       <div className="flex my-14 justify-center p-10">
           <div className="glass w-full md:w-1/2 rounded-3xl">

            <div className="flex flex-col justify-around items-center p-5">
            <div className="rounded-full ">
                <img className="rounded-full w-40 h-40" src={user?.photoURL} alt="" />
                <h1 className="text-xl font-semibold text-center">{user?.displayName}</h1>
            </div>

            <div>
            <form onSubmit={Update} className="card-body">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="text" name="name" placeholder={user?.displayName} className="input input-bordered" />
           </div>
          <div className="form-control">
             <label className="label">
               <span className="label-text">Photo Url</span>
             </label>
             <input type="text" name="photo-url" placeholder={user?.photoURL} className="input input-bordered"  />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="text" name="photo-url" placeholder={user?.email} className="input input-bordered" readOnly />
           </div>
          
           <div className="form-control mt-6">
             <button className="btn bg-cyan-400 text-white">Update</button>
           </div>
          
         </form>
            </div>
            </div>
            
           
           </div>
       
       </div>
       
       </div>
    );
};

export default Update;