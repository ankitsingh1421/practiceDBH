import React from 'react';
import './components/Courses/Videoplayer.css'
interface VideoPlayerProps {
    videoUrl: string;
    title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
    return (
        <div className="flex flex-col items-center mx-auto">
            <div
                className="w-[800px] h-[400px] bg-transparent rounded-lg overflow-hidden shadow-lg other"
                style={{ marginTop: '100px' }}
            >
                <img
                    style={{
                        borderRadius: "20px",
                    }}
                    className="w-full h-full object-cover"
                    src={videoUrl}
                    alt={title}
                />
            </div>
            <h2 className="text-xl text-white font-semibold mt-4 text-center">{title}</h2>
        </div>
    );
};

export default VideoPlayer;
