import React from 'react';

interface VideoPlayerProps {
    videoUrl: string;
    title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
    return (
        <div className="mx-[100px] mt-10">
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                <video
                    className="w-full h-full object-contain"
                    controls
                    src={videoUrl}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-center">{title}</h2>
        </div>
    );
};

export default VideoPlayer;