import { Course } from '../../types/course';

export const courses: Course[] = [
    {
        id: '1',
        title: 'Web Development Fundamentals',
        description: 'Master the basics of web development with HTML, CSS, and JavaScript',
        image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=800&q=80',
        demoVideo: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        highlights: [
            'Build responsive websites from scratch',
            'Learn modern JavaScript ES6+',
            'Master CSS layouts and animations',
            'Understand web development best practices',
            'Create interactive user interfaces'
        ],
        chapters: [
            {
                id: 1,
                title: 'HTML Fundamentals',
                videos: [
                    {
                        id: 'v1',
                        title: 'Introduction to HTML',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v2',
                        title: 'HTML Elements & Tags',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 2,
                title: 'CSS Styling',
                videos: [
                    {
                        id: 'v3',
                        title: 'CSS Basics',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v4',
                        title: 'Flexbox & Grid',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        title: 'React Mastery',
        description: 'Become a professional React developer',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
        demoVideo: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        highlights: [
            'Build modern React applications',
            'State management with hooks',
            'Performance optimization',
            'Component design patterns',
            'Testing React applications'
        ],
        chapters: [
            {
                id: 1,
                title: 'React Basics',
                videos: [
                    {
                        id: 'v1',
                        title: 'Introduction to React',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v2',
                        title: 'Components & Props',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            },
            {
                id: 2,
                title: 'Advanced Concepts',
                videos: [
                    {
                        id: 'v3',
                        title: 'Hooks in Depth',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    },
                    {
                        id: 'v4',
                        title: 'Context API',
                        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    }
                ]
            }
        ]
    }
];