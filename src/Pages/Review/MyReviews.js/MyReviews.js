import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import MyReviewRow from "./MyReviewRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my_reviews?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  const handleDelete = id => {
      const proceed = window.confirm('Confirm?')
      console.log(id);
      if(proceed){
          fetch(`http://localhost:5000/my_reviews/${id}`,{
            
                method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                  toast.success('succesfully removed')
                  const remaining = myReviews.filter(myRev => myRev._id !== id);
                  console.log(remaining);
                  setMyReviews(remaining);
              }
          })
      }

  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="py-12">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-800  md:text-4xl dark:text-white">
              Reviews
            </h2>
          </div>

          {myReviews.map((myReview) => <MyReviewRow 
          key={myReview._id}
          myReview={myReview}
          handleDelete={handleDelete}
          ></MyReviewRow>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
