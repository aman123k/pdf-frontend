import React, { useEffect, useState } from "react";
import Header from "./Header";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
function History() {
  const [history, setHistory] = useState([]);
  const data = async () => {
    const response = await fetch(
      "https://pdf-backend-nm70.onrender.com/history"
    );
    const data = await response.json();
    setHistory(data);
  };
  const navigator = useNavigate();

  const hendelDelete = async (id) => {
    toast.success("summary deleted successfully");
    await fetch(`https://pdf-backend-nm70.onrender.com/history/${id}`);
    navigator("/");
  };
  useEffect(() => {
    data();
  }, []);
  console.log(history);
  return (
    <>
      <Header />
      {!(history.length === 0) ? (
        history.map((item, index) => {
          return (
            <div key={item._id} className="mx-5 my-3">
              <h1 className="text-xl font-bold font-Nunito flex items-center justify-between">
                <span className="pr-1">
                  {index + 1}. {item.name}
                </span>
                <span
                  onClick={() => hendelDelete(item._id)}
                  className="bg-red-500 rounded-s-lg rounded-e-lg py-2 px-1 cursor-pointer mr-2 "
                >
                  <MdOutlineDeleteOutline className="font-Nunito text-white" />
                </span>
              </h1>
              <p className="px-4 mt-3 font-Nunito tracking-wide">
                {item.summary}
              </p>
              <Toaster />
            </div>
          );
        })
      ) : (
        <div className="mt-10 text-center">
          <h1 className=" font-Nunito text-[#261700] font-bold text-3xl">
            Summary not Found
          </h1>
          <img
            src="https://media.tenor.com/w2RXshjPCgwAAAAC/folder-walk.gif"
            alt="empty"
            className="ml-[50%] translate-x-[-50%] w-[37%]"
          />
          <Link to="/">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-3xl mt-7">
              Go back to Home
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default History;
