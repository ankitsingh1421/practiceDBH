import React, { useState, useRef } from 'react';
import { chapters } from './chapterVideoPlayer' // Adjust the path based on your file structure
import './styles/course.css';

const ChapterPlayer = () => {
    const [selectedVideo, setSelectedVideo] = useState(chapters[0].videos[0]);
    const [progress, setProgress] = useState(0); // Current video progress
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
    const videoRef = useRef(null);

    
    // Handle video selection
    const handleVideoClick = (video: any) => {
        setSelectedVideo(video);
        if (videoRef.current) {
            videoRef.current.load();
        }
    };

    // Handle video progress update
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            const progressPercentage = (currentTime / duration) * 100;
            setProgress(progressPercentage);
        }
    };

    // Handle chapter toggle (expand/collapse)
    const toggleChapter = (index: React.SetStateAction<number | null>) => {
        setExpandedChapter(expandedChapter === index ? null : index);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Left side - Chapter list */}
            <div className="w-full md:w-1/4 bg-white p-4 overflow-y-auto shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Course Chapters</h2>
                <ul>
                    {chapters.map((chapter: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; videos: any[]; }, index: React.SetStateAction<number | null>) => (
                        <li key={chapter.id}>
                            <div
                                className="p-4 cursor-pointer bg-gray-200 rounded mb-3"
                                onClick={() => toggleChapter(index)}
                            >
                                {chapter.title}
                            </div>
                            {expandedChapter === index && (
                                <div className="pl-4">
                                    {chapter.videos.map((video) => (
                                        <div
                                            key={video.id}
                                            className="text-gray-800 hover:bg-gray-300 p-2 cursor-pointer"
                                            onClick={() => handleVideoClick(video)}
                                        >
                                            {video.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side - Video player */}
            <div className="w-full md:w-3/4 p-6 bg-gray-50 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold mb-4">{selectedVideo.title}</h1>

                <div className="w-full max-w-4xl">
                    <video
                        ref={videoRef}
                        controls
                        src={selectedVideo.url}
                        onTimeUpdate={handleTimeUpdate}
                        className="w-full h-auto rounded-lg shadow-lg"
                    >
                        Your browser does not support the video tag.
                    </video>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-300 h-4 mt-4 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                        Progress: {progress.toFixed(2)}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChapterPlayer;
