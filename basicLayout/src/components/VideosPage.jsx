import React from 'react';

const videos = [
  { title: 'Intro to Data Structures', duration: '15 mins', thumbnail: '/path-to-thumbnail' },
  { title: 'Operating Systems Tutorial', duration: '20 mins', thumbnail: '/path-to-thumbnail' },
  { title: 'Machine Learning Crash Course', duration: '25 mins', thumbnail: '/path-to-thumbnail' },
  // Add more videos here
];

const VideosPage = () => {
  return (
    <div id="videos" className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4">
            <img src={video.thumbnail} alt={video.title} className="w-full rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{video.title}</h3>
            <p className="mt-2 text-gray-600">{video.duration}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Watch Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideosPage;
