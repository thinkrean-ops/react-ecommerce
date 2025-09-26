
import Card from '../components/Card'
import useGetAllProducts from '../hooks/useGetAllProducts'

function Products() {

const {data,isloading} = useGetAllProducts()


  return (
    <div className=' my-10 max-w-[90%] lg:max-w-5xl mx-auto'>
        <h1 className='text-center text-3xl uppercase font-bold'>ALL PRODUCTS</h1>

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">

        {
          data.map(item => (

          <Card key={item.id} data={item}/>

          ))}


        </div>

          )
        }


    </div>
  )
}

export default Products