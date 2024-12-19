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

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the URL parameter
import { courses } from './components/Data/course'; // Adjust the import path
import { Course } from './types/course'; // Import the Course type if necessary
import ChapterList from './ChapterList';
import CourseHighlights from './CourseHighlights';
import VideoPlayer from './VideoPlayer';
import './styles/course.css'; // Import the CSS styles
import BackButton from './BackButton';

interface CourseDetailProps {
    onWatchClick: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ onWatchClick }) => {
    const { id } = useParams(); // Get the course ID from the URL
    const [course, setCourse] = useState<Course | null>(null);

    // Fetch course details based on the 'id'
    useEffect(() => {
        const courseData = courses.find((course: any) => course.id === id);
        setCourse(courseData || null); // Set course data to state or null if not found
    }, [id]);

    if (!course) {
        return <div className="home-container min-h-screen" >Loading...</div>; // Show loading state while fetching course data
    }

    return (
        <div className="home-container min-h-screen">

            <BackButton />
            {/* Demo Video Section */}
            <VideoPlayer
                videoUrl={course.demoVideo}
                title={`${course.title} - Course Preview`}
            />

            {/* Course Info */}
            <div className=" home-container max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6 text-white">{course.title}</h1>

                <CourseHighlights highlights={course.highlights} />

                {/* Syllabus Section */}
                <div className="bg-transparent border border-gray-500 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-white">Course Syllabus</h2>
                    <ChapterList
                        chapters={course.chapters}
                        activeChapter={0}
                        onChapterClick={() => { }}
                        onVideoClick={onWatchClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
