import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

interface BackButtonProps {
    onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
    const navigate = useNavigate();  // Initialize useNavigate hook

    const handleBackClick = () => {
        navigate('/');  // Redirect to home page
        onClick();  // Call the passed onClick handler if needed
    };

    return (
        <button
            onClick={handleBackClick}  // Trigger handleBackClick on button click
            className="fixed top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 z-10"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    );
};

export default BackButton;
