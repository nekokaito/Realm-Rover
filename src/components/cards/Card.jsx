/* eslint-disable react/prop-types */

export default function Card({data}) {

  const {estate_title, description, price, status, image, facilities, area, location, segment_name} = data;

  return (
    <div className=" p-5 w-full lg:w-80" data-aos="fade-down">
      <div className="card w-full lg:w-80 min-h-[750px] glass">
  <figure><img className="h-45" src={image} alt={estate_title}/></figure>
  
  <div className="card-body">
    <div className="flex justify-between">
    <h2 className="card-title font-bold text-[18px]">{estate_title}</h2>
    <div className={status === 'sale'? `badge badge-accent badge-outline`: `badge badge-secondary badge-outline`}>{status}</div>
    </div>
    <p>{description}</p>
    <div className="flex flex-col gap-2">
    <p><span className="font-bold">Segment:</span> {segment_name} </p>
    <p><span className="font-bold">Area:</span> <span className=" font-thin">{area}</span></p>
    <p><span className="font-bold">Location:</span> {location}</p>
    </div>
    <div className="px-5">
    <ul className="list-disc">
        {
            facilities.map((facility, i) => <li key={i}>{facility}</li>)
        }
    </ul>
    </div>
    <p><span className="font-bold">Price:</span> {price/ 1000000}M$</p>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary">View Property</button>
    </div>
  </div>
</div>
    </div>
  )
}
