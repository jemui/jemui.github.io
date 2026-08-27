import type { Project } from "@/types/project";

export const iosProjects: Project[] = [
  {
    title: "To-Do App",
    description: "Create, complete, search, and delete tasks. Task data is stored and retrieved through Firebase.",
    video: "/movs/ios/to-do-app.mp4",
    githubLink: "https://github.com/jemui/to-do-app",
  },
  {
    title: "Weather App",
    description: "Retrieves the current weather from the OpenWeather API based on location or a user-inputted city.",
    video: "/movs/ios/weather-app.mp4",
    githubLink: "https://github.com/jemui/weather-app",
  },
  {
    title: "Hacker News App",
    description: "Retrieves the top stories from the Hacker News API using SwiftUI. Stories are viewable when tapped, with more loaded via a 'Show More' button.",
    video: "/movs/ios/hacker-news-app.mp4",
    githubLink: "https://github.com/jemui/hacker-news-app",
  },
  {
    title: "Chat App",
    description: "Allows user account creation, login, and chat with other users. Data is authenticated and stored with Firebase.",
    video: "/movs/ios/chat-app.mp4",
    githubLink: "https://github.com/jemui/chat-app",
  },
];