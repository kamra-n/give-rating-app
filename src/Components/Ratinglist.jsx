import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { AiOutlineClose} from "react-icons/ai";
export default function Ratinglist() {
    const { data, deleteFeedback } = useContext(AppContext);
    return (
        <div>
            {data && data?.map((v, i) => {
                return (<div className="card bg-white rounded-lg p-4 relative text-black my-6 relative" key={i}>
                    <p className="absolute rounded-full bg-pink-400  text-white w-12 h-12 flex justify-center items-center top-[-14px] left-[-16px]">{v.rating}</p>
                    <p className="p-4 text-justify">{v.message}</p>
                    <div className="absolute top-[5px] right-[7px] flex space-x-2">
                        <p className=" text-purple-800 text-lg font-bold cursor-pointer" onClick={() => { deleteFeedback(v.id) }}><AiOutlineClose /></p>
                    </div>
                </div>)
            })}
        </div>
    )
}
