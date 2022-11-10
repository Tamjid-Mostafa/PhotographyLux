import { useLoaderData, useNavigate } from "react-router-dom";
import PackagePriceTable from "../PackagePrice/PackagePriceTable";
import { AuthContext } from "../../context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
import toast from "react-hot-toast";


const ServiceDetails = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const { _id, service_name, photo, description, price, itemId } =
    useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://photographylux-server.vercel.app/reviews?service_name=${service_name}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service_name]);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewSubmit = form.review.value;
    const userReviews = {
      itemId,
      service_name: service_name,
      photo: photo,
      name: user?.displayName,
      picture: user?.photoURL,
      text: reviewSubmit,
      email: user?.email,
    };
      

    // console.log(userReviews);

    fetch("https://photographylux-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          const allReviews = [...reviews, userReviews];setReviews(allReviews);
          toast.success('Thanks or your feedback');
          form.reset();
          
        }
      })
      .catch((er) => console.error(er));
  };
  const navigate = useNavigate();
  const userHandle = () => {
    if(!user?.uid){
      toast.error("Please Log In to Submit Review");
      navigate('/login');
      
    }
  }

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 ">
      {/* Service Details Section */}
      <>
        <div className="px-10 container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl-grid-cols-2 gap-5 md:justify-items-center">
          <div className=" rounded-lg my-24 md:my-16">
            <img className="" src={photo} alt="" />
          </div>

          <div className="max-w-xl">
            <h1 className=" my-16 md:my-6 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
              {service_name}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </>

      {/* Review Section */}

      <div className="my-5  xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
        <div className="py-16">
          <div className="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
            <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              What's our customers say
            </h2>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="swiper mySwiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review._id} review={review}>
                  <div className="swiper-wrapper pb-6">
                    <div className="swiper-slide !bg-transparent">
                      <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
                        <img
                          className="mx-auto !h-16 !w-16 rounded-full"
                          src={review.picture}
                          alt="user avatar"
                          height="220"
                          width="220"
                          loading="lazy"
                        />
                        <p className="text-lg w-2/4 mx-auto">
                          <span className="font-serif">"</span>{review.text}<span className="font-serif">"</span>
                        </p>
                        <div>
                          <h6 className="text-xl font-semibold leading-none mb-5">
                            {review.name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>

      <>
        {/* Submit Review */}

        <div className=" flex flex-col justify-center bg-white dark:bg-gray-900">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 transition duration-300 delay-0"
            >
              <div className="blur-[106px]  bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
              <div className="blur-[106px]  bg-gradient-to-r from-pink-400 to-yellow-300"></div>
            </div>
            <div className=" xl:container m-auto px-6 text-gray-500 md:px-12">
              <div className="m-auto space-y-8 sm:w-4/5 md:w-3/5 xl:w-2/5">
                <div className="p-8 md:py-12">
                  <h2 className="mt-20 mb-8 text-3xl font-bold text-gray-800 dark:text-white text-center">
                    Share your opinion.
                  </h2>
                  <form onSubmit={handleReview} action="" className="space-y-8">
                    <div className="space-y-4">
                      <div className="relative flex items-center">
                        <HiChatAlt2 className="w-6 h-6 absolute left-4 inset-y-0 my-auto"></HiChatAlt2>
                        <input
                          type="text"
                          name="review"
                          id="review"
                          autoComplete="review"
                          placeholder="Very Awesome"
                          className="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                        />
                        <div className="absolute right-1">
                          <button onClick={userHandle} className="relative flex h-10 w-10 sm:w-max ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span className="hidden relative text-gray-800 dark:text-white font-semibold sm:block">
                              Submit
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="relative w-5 h-5 text-white dark:text-gray-900 sm:hidden"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-500 text-md text-center font-semibold">
                      I'm eager to know your opinion.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <PackagePriceTable></PackagePriceTable>
    </div>
  );
};

export default ServiceDetails;
