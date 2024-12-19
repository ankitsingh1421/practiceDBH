// import React from 'react';
// import { Chapter } from './components/Data/course';
// import { ChevronDown, Play } from 'lucide-react';

// interface ChapterListProps {
//     chapters: Chapter[];
//     activeChapter: number;
//     onChapterClick: (index: number) => void;
//     onVideoClick: (videoUrl: string, title: string) => void;
// }

// const ChapterList: React.FC<ChapterListProps> = ({
//     chapters,
//     activeChapter,
//     onChapterClick,
//     onVideoClick
// }) => {
//     return (
//         <div className="space-y-4">
//             {chapters.map((chapter, index) => (
//                 <div key={chapter.id} className="border rounded-lg overflow-hidden">
//                     <div
//                         className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100"
//                         onClick={() => onChapterClick(index)}
//                     >
//                         <h3 className="text-lg font-medium">
//                             {chapter.id}. {chapter.title}
//                         </h3>
//                         <ChevronDown className={`w-5 h-5 transform transition-transform ${activeChapter === index ? 'rotate-180' : ''
//                             }`} />
//                     </div>
//                     {activeChapter === index && (
//                         <div className="p-4 space-y-2">
//                             {chapter.videos.map((video) => (
//                                 <div
//                                     key={video.id}
//                                     className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
//                                 >
//                                     <span className="flex items-center">
//                                         <Play className="w-4 h-4 text-purple-500 mr-2" />
//                                         {video.title}
//                                     </span>
//                                     <button
//                                         className="text-purple-500 hover:text-purple-700"
//                                         onClick={() => onVideoClick(video.url, video.title)}
//                                     >
//                                         Watch
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChapterList;

import React, { useState } from 'react';
import { Chapter } from './components/Data/course'; // Ensure you have the correct import
import { ChevronDown, Play } from 'lucide-react';

interface ChapterListProps {
    chapters: Chapter[];
    activeChapter: number;
    onChapterClick: (index: number) => void;
    onVideoClick: (videoUrl: string, title: string) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({
    chapters,
    activeChapter,
    onChapterClick,
    onVideoClick
}) => {
    // State to track which chapter is expanded
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

    // Toggle the visibility of chapter content
    const toggleChapter = (index: number) => {
        if (expandedChapter === index) {
            // If the chapter is already expanded, collapse it
            setExpandedChapter(null);
        } else {
            // Otherwise, expand the clicked chapter
            setExpandedChapter(index);
        }
    };

    return (
        <div className="space-y-4">
            {chapters.map((chapter, index) => (
                <div key={chapter.id} className="border rounded-lg bg-navy-950 text-black overflow-hidden">
                    <div
                        className="flex justify-between items-center text-white p-4 cursor-pointer"
                        onClick={() => toggleChapter(index)}  // Toggle onClick
                    >
                        <h3 className="text-lg font-medium">
                            {chapter.id}. {chapter.title}
                        </h3>
                        <ChevronDown
                            className={`w-5 h-5 transform transition-transform ${expandedChapter === index ? 'rotate-180' : ''}`}
                        />
                    </div>

                    {/* Show chapter videos if it's the active chapter and expanded */}
                    {expandedChapter === index && (
                        <div className="p-4 space-y-2">
                            {chapter.videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="flex items-center justify-between p-2 hover:bg-blue-950 text-white rounded"
                                >
                                    <span className="flex items-center">
                                        <Play className="w-4 h-4 text-purple-500 mr-2" />
                                        {video.title}
                                    </span>
                                    <button
                                        className="hidden lg:block text-purple-500 hover:text-purple-700"
                                        onClick={() => onVideoClick(video.url, video.title)}
                                    >
                                        Watch
                                    </button>
                                    <img
                                        height={"100px"}
                                        width={"100px"}
                                        src='/comindTag-removebg-preview.png'
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ChapterList;
