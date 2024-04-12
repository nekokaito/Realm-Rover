/* eslint-disable react/prop-types */

export default function Card({data}) {

  const {estate_title, description, price, status, image} = data;

  return (
    <div className="w-80" data-aos="fade-down">
      <div className="card w-80 min-h-[420px] glass">
  <figure><img className="h-45" src={image} alt={estate_title}/></figure>
  
  <div className="card-body">
    <div className="flex justify-between">
    <h2 className="card-title text-[18px]">{estate_title}</h2>
    <div className={status === 'sale'? `badge badge-accent badge-outline`: `badge badge-secondary badge-outline`}>{status}</div>
    </div>
    <p>{description}</p>
    <ul></ul>
    <p>{price/ 1000000}M $</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">View Property</button>
    </div>
  </div>
</div>
    </div>
  )
}
