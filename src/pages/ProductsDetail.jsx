
import { Link, useParams } from "react-router-dom";

import useGetOneProducts from "../hooks/useGetOneProducts";

function ProductsDetail() {
 
  const route = useParams();

  const { data, isloading} = useGetOneProducts(route.id)
 

  return (
    <>

      {
          isloading == true && (

            <div className='flex items-center justify-center my-10'>

            <div className='border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-gray-600'> </div>

            <p className='font-bold'> Loading.....</p>
             </div>
          )
          
         
        }

        {
          isloading == false && (

    <div>
      <div className="bg-white w-full py-1">
        <div className="max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/">Home</Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>

          <Link to="/products">Product</Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>

          <span className="font-bold">Men clothes</span>
        </div>
      </div>

      <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto font-jost">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
          <div>
            <img className=" w-full h-f object-cover" src={data.image} />
          </div>

          <div>
            <h3 className=" text-lg uppercase"> {data.category}</h3>
            <h1 className="text-2xl font-bold"> {data.title}</h1>
            <h1 className="text-2xl font-bold text-red-500"> {data.price}$</h1>

            <div className=" flex  flex-col lg:flex-row items-start lg:items-center gap-4 my-8 ">
              <div className=" border border-gray-300 w-32 py-2 flex items-center justify-evenly">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>

                <button>1</button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
              <button className="bg-black px-8 py-2 text-white hover:bg-slate-400">
                Add to cart
              </button>
              <button className="bg-yellow-600 px-8 py-2 text-white hover:bg-yellow-400">
                Pay Now
              </button>
            </div>

            <hr />

            <p className="mt-4 text-gray-500">
              {data.description}
            
            </p>
          </div>
        </div>
      </div>


    </div>

          )
        }
        

    </>
  );
}

export default ProductsDetail;
