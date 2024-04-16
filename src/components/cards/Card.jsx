/* eslint-disable react/prop-types */
import { CiLocationOn} from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { IoResizeOutline } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Card({data}) {

  const {id, estate_title, description, price, status, image, area, location, segment_name} = data;

  return (
    <div className=" p-5 w-full lg:w-80" data-aos="fade-down">
      <div className="card w-full lg:w-80 min-h-[450px] glass">
  <figure><img className="h-45" src={image} alt={estate_title}/></figure>
  
  <div className="card-body p-5 ">
    <div className="flex justify-between">
    <h2 className="card-title font-bold text-[18px]">{estate_title}</h2>
    <div className={status === 'sale'? `badge badge-accent badge-outline`: `badge badge-secondary badge-outline`}>{status}</div>
    </div>
    
    <div className="flex flex-col gap-3">
    <p>{description}</p>
    <div className="flex items-center gap-2"> <CiCircleList /> {segment_name}</div>
    <div className="flex items-center gap-2"> <CiLocationOn /> {location}</div>
   <div className="flex items-center gap-2"> <IoResizeOutline />{area}</div>
   <div className="flex items-center gap-2"> <IoPricetagOutline />{price/ 1000000}M$</div>
   </div>
    <div className="flex my-3 justify-center items-center">
     <Link to={`/estate/${id}`}><button className="btn bg-gray-500 text-white">View Property</button></Link> 
    </div>
  </div>
</div>
    </div>
  )
}
