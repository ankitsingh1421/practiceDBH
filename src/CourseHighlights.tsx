import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CourseHighlightsProps {
  highlights: string[];
}

const CourseHighlights: React.FC<CourseHighlightsProps> = ({ highlights }) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">About this Course</h2>
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="text-purple-500 mr-2" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseHighlights;