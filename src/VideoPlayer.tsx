import React from 'react';

interface VideoPlayerProps {
    videoUrl: string;
    title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
    return (
        <div className="mx-[20px] sm:mx-[40px] md:mx-[100px] ">
            <div className="w-full aspect-video bg-transparent rounded-lg overflow-hidden shadow-lg">
                <img
                    style={{
                        borderRadius: "20px"
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
