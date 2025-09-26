import { Link } from "react-router-dom";

function Card(props) {
  const { data } = props;
  console.log(data);
  return (
    <Link
      to={`/product/${data.id}`}
      className="border border-gray-400 group"
    >
      <figure className="p-2 h-[280px] lg:h-[280px] overflow-hidden">
        <img
          className=" w-full h-full object-cover group-hover:scale-110"
          src={data.image}
          alt=" "
        />
      </figure>
      <div className="py-2 px-2 ">
        <h3 className="line-clamp-1">{data.title}</h3>
        <p className="font-bold text-red-500">${data.price}</p>
      </div>
    </Link>
  );
}

export default Card;
