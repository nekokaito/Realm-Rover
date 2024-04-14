import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";
import Header from "./header/Header";
import { Toaster } from 'react-hot-toast';


const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <>
        <Toaster />
        <div data-aos="zoom-in-down">
            <Header></Header>
            <Estate data={data}></Estate>
        </div>
        </>
       
    );
};

export default Home;