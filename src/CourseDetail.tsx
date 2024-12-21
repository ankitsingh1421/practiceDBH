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


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from './components/Data/course';
import { Course } from './types/course';
import ChapterList from './ChapterList';
import CourseHighlights from './CourseHighlights';
import VideoPlayer from './VideoPlayer';
import './styles/course.css';
import Footer from './components/Footer/Footer';
import { CourseNav } from './components/Courses/CourseNav';
import BackButton from './BackButton';

interface CourseDetailProps {
    onWatchClick: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ onWatchClick }) => {
    const { id } = useParams();
    const [course, setCourse] = useState<Course | null>(null);

    useEffect(() => {
        const courseData = courses.find((course: any) => course.id === id);
        setCourse(courseData || null);
    }, [id]);

    if (!course) {
        return <div className="home-container min-h-screen">Loading...</div>;
    }

    return (
        <div className="home-container min-h-screen">
            <CourseNav />
            {/* Home Section */}
            <div id="home" className="flex flex-col items-center">
                <VideoPlayer
                    videoUrl={course.demoVideo}
                    title={`${course.title} - Course Preview`}
                />
                <div className="flex gap-4 mt-6">
                    <button
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium transition"
                    >
                        Enroll Now
                    </button>
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
            <Footer />
        </div>
    );
};

export default CourseDetail;
