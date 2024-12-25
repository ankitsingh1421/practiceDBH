// import React, { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/clerk-react";

// interface Review {
//     stars: number;
//     comment: string;
//     username: string;
// }

// const ReviewComponent: React.FC = () => {
//     const { user } = useUser();
//     const [reviews, setReviews] = useState<Review[]>([]);
//     const [newReview, setNewReview] = useState<Review>({ stars: 0, comment: "", username: "" });
//     const [popupReview, setPopupReview] = useState<string | null>(null);
//     const [showAll, setShowAll] = useState<boolean>(false);

//     // Load reviews from local storage
//     useEffect(() => {
//         const storedReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
//         setReviews(storedReviews);
//     }, []);

//     // Save reviews to local storage
//     const saveReviews = (updatedReviews: Review[]) => {
//         localStorage.setItem("reviews", JSON.stringify(updatedReviews));
//     };

//     const toggleStar = (index: number) => {
//         setNewReview((prevReview) => {
//             const newStars = prevReview.stars === index + 1 ? index : index + 1;
//             return { ...prevReview, stars: newStars };
//         });
//     };

//     const handleSubmit = () => {
//         if (!newReview.comment.trim()) {
//             alert("Please write a comment.");
//             return;
//         }

//         const updatedReviews = [
//             ...reviews,
//             { ...newReview, username: user?.firstName || "Anonymous" },
//         ];
//         setReviews(updatedReviews);
//         saveReviews(updatedReviews);
//         setNewReview({ stars: 0, comment: "", username: "" });
//     };

//     return (
//         <div className="p-4 text-white">
//             {/* Reviews Section */}
//             <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
//                 {(showAll ? reviews : reviews.slice(0, 4)).map((review, index) => (
//                     <div
//                         key={index}
//                         className="p-4 bg-teal-800 rounded shadow-md text-white"
//                     >
//                         <div className="flex items-center">
//                             {Array.from({ length: 5 }).map((_, starIndex) => (
//                                 <span
//                                     key={starIndex}
//                                     className={`mr-1 text-lg ${starIndex < review.stars
//                                         ? "text-yellow-400"
//                                         : "text-gray-400"
//                                         }`}
//                                 >
//                                     ★
//                                 </span>
//                             ))}
//                         </div>
//                         <p className="mt-2 font-bold">{review.username}</p>
//                         <p>
//                             {review.comment.length > 100 ? (
//                                 <>
//                                     {popupReview === review.comment ? (
//                                         <>
//                                             {review.comment}
//                                             <button
//                                                 onClick={() => setPopupReview(null)}
//                                                 className="text-orange-500 underline ml-2"
//                                             >
//                                                 View Less
//                                             </button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             {review.comment.slice(0, 100)}...
//                                             <button
//                                                 onClick={() => setPopupReview(review.comment)}
//                                                 className="text-orange-500 underline ml-2"
//                                             >
//                                                 Read More
//                                             </button>
//                                         </>
//                                     )}
//                                 </>
//                             ) : (
//                                 review.comment
//                             )}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* View More / View Less Button */}
//             {reviews.length > 4 && (
//                 <div className="text-center mt-4">
//                     <button
//                         onClick={() => setShowAll(!showAll)}
//                         className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded"
//                     >
//                         {showAll ? "View Less" : "View More"}
//                     </button>
//                 </div>
//             )}

//             {/* Add Review Section */}
//             <div
//                 className="mt-8"
//                 style={{ height: "300px", width: "700px", marginLeft: "200px" }}
//             >
//                 <h3
//                     className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
//                     style={{ fontSize: "40px" }}
//                 >
//                     Add a Review
//                 </h3>
//                 <div className="flex justify-center">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                         <span
//                             key={index}
//                             className={`text-lg cursor-pointer ${index < newReview.stars ? "text-white" : "text-gray-500"
//                                 } p-1 rounded`}
//                             onClick={() => toggleStar(index)}
//                         >
//                             ★
//                         </span>
//                     ))}
//                 </div>
//                 <textarea
//                     style={{ height: "150px" }}
//                     className="w-full mt-4 p-2 rounded bg-navy-950/80"
//                     placeholder="Write your review..."
//                     value={newReview.comment}
//                     onChange={(e) =>
//                         setNewReview({ ...newReview, comment: e.target.value })
//                     }
//                 ></textarea>
//                 <SignedIn>
//                     <button
//                         onClick={handleSubmit}
//                         className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded "
//                         style={{ marginLeft: "600px" }}
//                     >
//                         Submit
//                     </button>
//                 </SignedIn>
//                 <SignedOut>
//                     <SignInButton mode="modal">
//                         <button
//                             className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded "
//                             style={{ marginLeft: "600px" }}
//                         >
//                             Submit
//                         </button>
//                     </SignInButton>
//                 </SignedOut>
//             </div>

//             {/* Popup Modal for Full Review */}
//             {popupReview && (
//                 <div
//                     className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//                     onClick={() => setPopupReview(null)}
//                 >
//                     <div
//                         className="bg-white text-black p-4 rounded shadow-lg max-w-lg w-full overflow-y-auto max-h-96"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <button
//                             className="absolute top-2 right-2 text-gray-500"
//                             onClick={() => setPopupReview(null)}
//                         >
//                             ✕
//                         </button>
//                         <p>{popupReview}</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ReviewComponent;



// // import React, { useState, useEffect } from "react";
// // import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/clerk-react";

// // interface Review {
// //     stars: number;
// //     comment: string;
// //     username: string;
// // }

// // const ReviewComponent: React.FC = () => {
// //     const { user } = useUser();
// //     const [reviews, setReviews] = useState<Review[]>([]);
// //     const [newReview, setNewReview] = useState<Review>({ stars: 0, comment: "", username: "" });
// //     const [popupReview, setPopupReview] = useState<string | null>(null);
// //     const [showAll, setShowAll] = useState<boolean>(false);

// //     // Load reviews from local storage
// //     useEffect(() => {
// //         const storedReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
// //         setReviews(storedReviews);
// //     }, []);

// //     // Save reviews to local storage
// //     const saveReviews = (updatedReviews: Review[]) => {
// //         localStorage.setItem("reviews", JSON.stringify(updatedReviews));
// //     };

// //     const toggleStar = (index: number) => {
// //         setNewReview((prevReview) => {
// //             const newStars = prevReview.stars === index + 1 ? index : index + 1;
// //             return { ...prevReview, stars: newStars };
// //         });
// //     };

// //     const handleSubmit = () => {
// //         if (!newReview.comment.trim()) {
// //             alert("Please write a comment.");
// //             return;
// //         }

// //         const updatedReviews = [
// //             ...reviews,
// //             { ...newReview, username: user?.firstName || "Anonymous" },
// //         ];
// //         setReviews(updatedReviews);
// //         saveReviews(updatedReviews);
// //         setNewReview({ stars: 0, comment: "", username: "" });
// //     };

// //     return (
// //         <div className="p-4 text-white">
// //             {/* Reviews Section */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
// //                 {(showAll ? reviews : reviews.slice(0, 4)).map((review, index) => (
// //                     <div
// //                         key={index}
// //                         className="p-4 bg-teal-800 rounded shadow-md text-white"
// //                     >
// //                         <div className="flex items-center">
// //                             {Array.from({ length: 5 }).map((_, starIndex) => (
// //                                 <span
// //                                     key={starIndex}
// //                                     className={`mr-1 text-lg ${starIndex < review.stars
// //                                         ? "text-yellow-400"
// //                                         : "text-gray-400"
// //                                         }`}
// //                                 >
// //                                     ★
// //                                 </span>
// //                             ))}
// //                         </div>
// //                         <p className="mt-2 font-bold">{review.username}</p>
// //                         <p className="mt-2">
// //                             {review.comment.length > 100 ? (
// //                                 <>
// //                                     {popupReview === review.comment ? (
// //                                         <>
// //                                             {review.comment}
// //                                             <button
// //                                                 onClick={() => setPopupReview(null)}
// //                                                 className="text-orange-500 underline ml-2"
// //                                             >
// //                                                 View Less
// //                                             </button>
// //                                         </>
// //                                     ) : (
// //                                         <>
// //                                             {review.comment.slice(0, 100)}...
// //                                             <button
// //                                                 onClick={() => setPopupReview(review.comment)}
// //                                                 className="text-orange-500 underline ml-2"
// //                                             >
// //                                                 Read More
// //                                             </button>
// //                                         </>
// //                                     )}
// //                                 </>
// //                             ) : (
// //                                 review.comment
// //                             )}
// //                         </p>
// //                     </div>
// //                 ))}
// //             </div>

// //             {/* View More / View Less Button */}
// //             {reviews.length > 4 && (
// //                 <div className="text-center mt-4">
// //                     <button
// //                         onClick={() => setShowAll(!showAll)}
// //                         className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded"
// //                     >
// //                         {showAll ? "View Less" : "View More"}
// //                     </button>
// //                 </div>
// //             )}

// //             {/* Add Review Section */}
// //             <div className="mt-8 mx-auto max-w-2xl">
// //                 <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-2xl sm:text-3xl">
// //                     Add a Review
// //                 </h3>
// //                 <div className="flex justify-center mt-4">
// //                     {Array.from({ length: 5 }).map((_, index) => (
// //                         <span
// //                             key={index}
// //                             className={`text-lg cursor-pointer ${index < newReview.stars ? "text-white" : "text-gray-500"
// //                                 } p-1 rounded`}
// //                             onClick={() => toggleStar(index)}
// //                         >
// //                             ★
// //                         </span>
// //                     ))}
// //                 </div>
// //                 <textarea
// //                     className="w-full mt-4 p-2 rounded bg-navy-950/80 text-gray-200"
// //                     placeholder="Write your review..."
// //                     value={newReview.comment}
// //                     onChange={(e) =>
// //                         setNewReview({ ...newReview, comment: e.target.value })
// //                     }
// //                 ></textarea>
// //                 <div className="flex justify-center mt-4">
// //                     <SignedIn>
// //                         <button
// //                             onClick={handleSubmit}
// //                             className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded"
// //                         >
// //                             Submit
// //                         </button>
// //                     </SignedIn>
// //                     <SignedOut>
// //                         <SignInButton mode="modal">
// //                             <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded">
// //                                 Submit
// //                             </button>
// //                         </SignInButton>
// //                     </SignedOut>
// //                 </div>
// //             </div>

// //             {/* Popup Modal for Full Review */}
// //             {popupReview && (
// //                 <div
// //                     className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
// //                     onClick={() => setPopupReview(null)}
// //                 >
// //                     <div
// //                         className="bg-white text-black p-4 rounded shadow-lg max-w-lg w-full overflow-y-auto max-h-96"
// //                         onClick={(e) => e.stopPropagation()}
// //                     >
// //                         <button
// //                             className="absolute top-2 right-2 text-gray-500"
// //                             onClick={() => setPopupReview(null)}
// //                         >
// //                             ✕
// //                         </button>
// //                         <p>{popupReview}</p>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default ReviewComponent;



import React, { useState, useEffect } from "react";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/clerk-react";

interface Review {
    stars: number;
    comment: string;
    username: string;
}

const ReviewComponent: React.FC = () => {
    const { user } = useUser();
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newReview, setNewReview] = useState<Review>({ stars: 0, comment: "", username: "" });
    const [popupReview, setPopupReview] = useState<string | null>(null);
    const [showAll, setShowAll] = useState<boolean>(false);

    // Load reviews from local storage
    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
        setReviews(storedReviews);
    }, []);

    // Save reviews to local storage
    const saveReviews = (updatedReviews: Review[]) => {
        localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    };

    const toggleStar = (index: number) => {
        setNewReview((prevReview) => {
            const newStars = prevReview.stars === index + 1 ? index : index + 1;
            return { ...prevReview, stars: newStars };
        });
    };

    const handleSubmit = () => {
        if (!newReview.comment.trim()) {
            alert("Please write a comment.");
            return;
        }

        const updatedReviews = [
            ...reviews,
            { ...newReview, username: user?.firstName || "Anonymous" },
        ];
        setReviews(updatedReviews);
        saveReviews(updatedReviews);
        setNewReview({ stars: 0, comment: "", username: "" });
    };

    return (
        <div className="p-4 text-white">
            {/* Reviews Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(showAll ? reviews : reviews.slice(0, 4)).map((review, index) => (
                    <div
                        key={index}
                        className="p-4 bg-navy-950/80 rounded shadow-md text-white"
                    >
                        <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                <span
                                    key={starIndex}
                                    className={`mr-1 text-lg ${starIndex < review.stars
                                        ? "text-yellow-400"
                                        : "text-gray-400"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="mt-2 font-bold">{review.username}</p>
                        <p>
                            {review.comment.length > 100 ? (
                                <>
                                    {popupReview === review.comment ? (
                                        <>
                                            {review.comment}
                                            <button
                                                onClick={() => setPopupReview(null)}
                                                className="text-orange-500 underline ml-2"
                                            >
                                                View Less
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            {review.comment.slice(0, 100)}...
                                            <button
                                                onClick={() => setPopupReview(review.comment)}
                                                className="text-orange-500 underline ml-2"
                                            >
                                                Read More
                                            </button>
                                        </>
                                    )}
                                </>
                            ) : (
                                review.comment
                            )}
                        </p>
                    </div>
                ))}
            </div>

            {/* View More / View Less Button */}
            {reviews.length > 4 && (
                <div className="text-center mt-4">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded"
                    >
                        {showAll ? "View Less" : "View More"}
                    </button>
                </div>
            )}

            {/* Add Review Section */}
            <div
                className="mt-8"
                style={{ height: "300px", width: "700px", marginLeft: "200px" }}
            >
                <h3
                    className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                    style={{ fontSize: "40px" }}
                >
                    Add a Review
                </h3>
                <div className="flex justify-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span
                            key={index}
                            className={`text-lg cursor-pointer ${index < newReview.stars ? "text-white" : "text-gray-500"
                                } p-1 rounded`}
                            onClick={() => toggleStar(index)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <textarea
                    style={{ height: "150px" }}
                    className="w-full mt-4 p-2 rounded bg-navy-950/80"
                    placeholder="Write your review..."
                    value={newReview.comment}
                    onChange={(e) =>
                        setNewReview({ ...newReview, comment: e.target.value })
                    }
                ></textarea>
                <SignedIn>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded mt-4"
                        style={{ marginLeft: "600px" }}
                    >
                        Submit
                    </button>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded mt-4"
                            style={{ marginLeft: "600px" }}
                        >
                            Submit
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>

            {/* Popup Modal for Full Review */}
            {popupReview && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={() => setPopupReview(null)}
                >
                    <div
                        className="bg-white text-black p-4 rounded shadow-lg max-w-lg w-full overflow-y-auto max-h-96"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500"
                            onClick={() => setPopupReview(null)}
                        >
                            X
                        </button>
                        <p>{popupReview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewComponent;
