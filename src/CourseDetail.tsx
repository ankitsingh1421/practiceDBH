// import React, { useState } from 'react';
// import { Course } from './types/course';
// import ChapterList from './ChapterList';
// import CourseHighlights from './CourseHighlights';
// import VideoPlayer from './VideoPlayer';

// interface CourseDetailProps {
//   course: Course;
//   onWatchClick: () => void;
// }

// const CourseDetail: React.FC<CourseDetailProps> = ({ course, onWatchClick }) => {
//   const [activeChapter, setActiveChapter] = useState(0);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Demo Video Section */}
//       <VideoPlayer 
//         videoUrl={course.demoVideo} 
//         title={`${course.title} - Course Preview`}
//       />

//       {/* Course Info */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-6">{course.title}</h1>

//         <CourseHighlights highlights={course.highlights} />

//         {/* Syllabus Section */}
//         <div className="bg-white rounded-lg p-6 shadow-md">
//           <h2 className="text-2xl font-semibold mb-6">Course Syllabus</h2>
//           <ChapterList
//             chapters={course.chapters}
//             activeChapter={activeChapter}
//             onChapterClick={setActiveChapter}
//             onVideoClick={() => onWatchClick()}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams to get the URL parameter
// import { courses } from './components/Data/course'; // Adjust the import path
// import { Course } from './types/course'; // Import the Course type if necessary
// import ChapterList from './ChapterList';
// import CourseHighlights from './CourseHighlights';
// import VideoPlayer from './VideoPlayer';
// import './styles/course.css'; // Import the CSS styles
// import BackButton from './BackButton';

// interface CourseDetailProps {
//     onWatchClick: () => void;
// }

// const CourseDetail: React.FC<CourseDetailProps> = ({ onWatchClick }) => {
//     const { id } = useParams(); // Get the course ID from the URL
//     const [course, setCourse] = useState<Course | null>(null);

//     // Fetch course details based on the 'id'
//     useEffect(() => {
//         const courseData = courses.find((course: any) => course.id === id);
//         setCourse(courseData || null); // Set course data to state or null if not found
//     }, [id]);

//     if (!course) {
//         return <div className="home-container min-h-screen" >Loading...</div>; // Show loading state while fetching course data
//     }

//     return (
//         <div className="home-container min-h-screen">

//             <BackButton />
//             {/* Demo Video Section */}
//             <VideoPlayer
//                 videoUrl={course.demoVideo}
//                 title={`${course.title} - Course Preview`}
//             />

//             {/* Course Info */}
//             <div className=" home-container max-w-7xl mx-auto px-4 py-8">
//                 <h1 className="text-4xl font-bold mb-6 text-white">{course.title}</h1>

//                 <CourseHighlights highlights={course.highlights} />

//                 {/* Syllabus Section */}
//                 <div className="bg-transparent border border-gray-500 rounded-lg p-6 shadow-md">
//                     <h2 className="text-2xl font-semibold mb-6 text-white">Course Syllabus</h2>
//                     <ChapterList
//                         chapters={course.chapters}
//                         activeChapter={0}
//                         onChapterClick={() => { }}
//                         onVideoClick={onWatchClick}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseDetail;


// import React, { useState, useEffect } from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { courses } from './components/Data/course';
// import { Course } from './types/course';
// import ChapterList from './ChapterList';
// import CourseHighlights from './CourseHighlights';
// import VideoPlayer from './VideoPlayer';
// import './styles/course.css';
// import Footer from './components/Footer/Footer';
// import { CourseNav } from './components/Courses/CourseNav';
// import { useNavigate } from 'react-router-dom';


// import BackButton from './BackButton';
// import { useUser } from '@clerk/clerk-react';
// import { Navbar } from './components/Navbar/Navbar';




// interface CourseDetailProps {
//     onWatchClick: () => void;
// }

// const CourseDetail: React.FC<CourseDetailProps> = ({ onWatchClick }) => {
//     const { id } = useParams();
//     const [course, setCourse] = useState<Course | null>(null);
//     const navigate = useNavigate();


//     const { user, isSignedIn } = useUser();


//     useEffect(() => {
//         const courseData = courses.find((course: any) => course.id === id);
//         setCourse(courseData || null);
//     }, [id]);

//     if (!course) {
//         return <div className="home-container min-h-screen">Loading...</div>;
//     }
//     const handleWatchClick = (videoUrl: string, chapterId: string) => {
//         Navigate(`/course/${chapterId}/play`, { state: { videoUrl } });
//     };

//     return (
//         <div className="home-container min-h-screen">
//             <Navbar />
//             {/* Home Section */}
//             <div id="home" className="flex flex-col items-center">
//                 <VideoPlayer
//                     videoUrl={course.demoVideo}
//                     title={`${course.title} - Course Preview`}
//                 />
//                 <div className="flex gap-4 mt-6">
//                     {isSignedIn ? <button
//                         className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium transition"
//                         onClick={() => handleWatchClick(video.url, chapter.id)}
//                     >
//                         Resume Course
//                     </button> :
//                         <button
//                             className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium transition"
//                         >
//                             Enroll Now
//                         </button>
//                     }
//                     <button
//                         className="bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium transition"
//                     >
//                         Watch Later
//                     </button>
//                 </div>
//             </div>

//             {/* Course Info Section */}
//             <div id="about" className="home-container max-w-7xl mx-auto px-4 py-8">
//                 <h1 className="text-4xl font-bold mb-6 text-white">{course.title}</h1>

//                 <CourseHighlights highlights={course.highlights} />

//                 {/* Syllabus Section */}
//                 <div id="courses" className="bg-transparent border border-gray-500 rounded-lg p-6 shadow-md">
//                     <h2 className="text-2xl font-semibold mb-6 text-white">Course Syllabus</h2>
//                     <ChapterList
//                         chapters={course.chapters}
//                         activeChapter={0}
//                         onChapterClick={() => { }}
//                         onVideoClick={onWatchClick}
//                     />
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default CourseDetail;








// new from here 

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from './components/Data/course';
import { Course } from './types/course';
import ChapterList from './ChapterList';
import CourseHighlights from './CourseHighlights';
import VideoPlayer from './VideoPlayer';
import './styles/course.css';
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { SignedOut, SignInButton, useUser } from '@clerk/clerk-react';
import ReviewComponent from './components/review/ReviewComponent';

interface CourseDetailProps {
    onWatchClick: (videoUrl: string) => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ onWatchClick }) => {
    const { id } = useParams();
    const [course, setCourse] = useState<Course | null>(null);
    const navigate = useNavigate();

    const { user, isSignedIn } = useUser();

    useEffect(() => {
        const courseData = courses.find((course: any) => course.id === id);
        setCourse(courseData || null);
    }, [id]);

    if (!course) {
        return <div className="home-container min-h-screen">Loading...</div>;
    }

    // Navigate to CoursePlayer
    const handleWatchClick = (videoUrl: string, chapterId: string) => {
        navigate(`/course/${id}/play`, { state: { videoUrl, chapterId } });
    };

    return (
        <div className="home-container min-h-screen">
            <Navbar />
            {/* Home Section */}
            <div id="home" className="flex flex-col items-center">
                <VideoPlayer
                    videoUrl={course.demoVideo}
                    title={`${course.title} - Course Preview`}
                    price={{
                        amount: course.price.amount,
                        originalAmount: course.price.originalAmount,
                        discount: course.price.discount,
                        currency: course.price.currency,
                    }}
                />

                <div className="flex gap-4 mt-6">
                    {isSignedIn ? (
                        <button
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium transition"
                            onClick={() =>
                                handleWatchClick(
                                    course.chapters[0].videos[0].url, // Start from the first video in the first chapter
                                    course.chapters[0].id
                                )
                            }
                        >
                            Resume Course
                        </button>
                    ) : (
                        <button
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium transition"

                        >
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className=" text-white px-8 py-3 rounded-full  font-medium hover:opacity-90 transition-opacity">
                                        Enroll Now
                                    </button>
                                </SignInButton>
                            </SignedOut>
                        </button>
                    )}
                    <button
                        className="bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium transition"
                    >
                        Watch Later
                    </button>
                </div>
            </div>

            {/* Course Info Section */}
            <div id="about" className="home-container max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6 text-white">{course.title}</h1>

                <CourseHighlights highlights={course.highlights} />

                {/* Syllabus Section */}
                <div id="courses" className="bg-transparent border border-gray-500 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-white">Course Syllabus</h2>
                    <ChapterList
                        chapters={course.chapters}
                        activeChapter={0}
                        onChapterClick={() => { }}
                        onVideoClick={onWatchClick}
                    />
                </div>
            </div>
            <div>
                <h1 style={{ fontSize: "30px", textAlign: "center", fontWeight: "600", color: "white" }} >Reviews and Testimonials</h1>
                <div >
                    <ReviewComponent />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CourseDetail;
