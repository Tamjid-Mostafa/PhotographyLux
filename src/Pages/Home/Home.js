import React from "react";

const Home = () => {
    const myStyle = {
        minHeight: "400px",
        backgroundImage: `url("https://i.ibb.co/ySQ03kH/pexels-arina-dmitrieva-14093489.jpg")`
    }
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center h-screen"
      style={myStyle}
      title="Bali, Indonesia"
    >
        
      <div className="flex flex-col justify-center items-center absolute inset-0 bg-black opacity-75 text-center text-white p-10">
        <h2 className="font-serif text-2xl md:text-3xl">
          Finding customers for your new business
        </h2>
        <p>
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find syour first customers.
        </p>
        <button className="bg-transparent hover:bg-white text-white font-bold hover:text-black py-2 px-4 my-4 border border-white rounded inline-flex items-center">
          <span>Find out more</span>
          <svg
            className="ml-2 w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
