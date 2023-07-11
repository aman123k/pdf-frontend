import React from "react";
import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function HomePage() {
  const [image, setImage] = useState("");
  const [result, setResult] = useState("");

  const data = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", image);
    if (result === "") {
      console.log("loading");
    }
    const respose = await toast.promise(
      fetch("https://pdf-backend-nm70.onrender.com", {
        method: "post",
        body: formData,
      }),
      {
        loading: "loading data",
        success: "data loaded successfully",
        error: "faild to load data",
      }
    );
    const data = await respose.json();

    setResult(data);
  };
  return (
    <>
      <Header />
      <section className="mt-6 mx-5">
        <h1 className="font-bold text-center text-[#261700] text-xl mb-2">
          Chose a file
        </h1>
        <form className=" text-center ">
          <input
            type="file"
            accept=".pdf"
            name="file"
            className="font-Nunito font-medium "
            onChange={(e) => setImage(e.currentTarget.files[0])}
          />
          <div className=" mt-4 text-center">
            <button
              className=" select-none bg-green-800 hover:bg-green-700  mr-4 text-white py-2 px-4 tracking-wide font-Nunito rounded-3xl"
              onClick={(e) => data(e)}
            >
              Summarize Now
            </button>
            <Link to="/history">
              <span className=" cursor-pointer select-none bg-blue-900 text-white py-2 px-4 tracking-wide font-Nunito rounded-3xl">
                History
              </span>
            </Link>
          </div>
        </form>
        <div>
          <h1 className="font-bold text-[#261700] text-xl mb-2">
            Summarize Content
          </h1>
          <p className="w-[80%]">{result}</p>
        </div>
        <Toaster />
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
