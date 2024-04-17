import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us | Realm Rover";
      }, []);
    return (
        <div data-aos="fade-left">
            <div className="hero rounded-3xl my-10 min-h-screen bg-base-200 " style={{backgroundImage: 'url(https://mrwallpaper.com/images/hd/real-estate-low-angle-shot-c9wnxm14uva0ydio.jpg)'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-white md:text-gray-700  font-bold">Contact Us</h1>
      <p className="py-6 text-white md:text-gray-700">We understand that sometimes you might have questions, concerns, or simply want to connect with us. We encourage you to reach out to our dedicated team through the various channels we provide.</p>
    </div>
    <div className="card shrink-0 w-full  max-w-sm shadow-2xl glass" data-aos="fade-down">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="full name" className="input input-bordered" required />
        </div>
        
        <div className="form-control" >
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Phone</span>
          </label>
          <input type="text" placeholder="+880" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-cyan-400 border-none text-white">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>

<div className="collapse mt-10 mb-2 collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  1. How do I place an order?
  </div>
  <div className="collapse-content"> 
    <p>Placing an order with Realm Rover is easy! Simply browse our website, add the desired items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information, and you're all set. If you encounter any difficulties, our customer support team is here to assist you.</p>
  </div>
</div>
<div className="collapse mb-2 collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  2. What payment methods do you accept?
  </div>
  <div className="collapse-content"> 
    <p>We accept various payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment gateways. Rest assured that your payment information is encrypted and secure.</p>
  </div>
</div>
<div className="collapse mb-10 collapse-plus bg-base-200" >
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
 3. How can I track my order?
  </div>
  <div className="collapse-content"> 
    <p>Once your order has been processed and shipped, you will receive a confirmation email with tracking information. You can use this information to track the status of your delivery through our website.</p>
  </div>
</div>


        </div>
    );
};

export default Contact;