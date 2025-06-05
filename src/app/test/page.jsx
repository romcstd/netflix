"use client"

import React, { useState, useEffect } from 'react';

const data = {
  
  "version": "1.0",
  "updated": "2025-06-05",
  "entertainment": {
    "localTV": [
      {
        "id": 1,
        "title": "Bet",
        "description": "At a private school where gambling determines social status...",
        "genre": ["TV Dramas", "Teen TV Shows", "US TV Shows"],
        "cast": ["Miku Martineau", "Ayo Solanke", "Clara Alexandrova"],
        "rating": "16+",
        "thumbnail": "blob:https://www.netflix.com/xyz",
        "link": "https://www.netflix.com/watch/81729868"
      },
      {
        "id": 2,
        "title": "Tastefully Yours",
        "description": "An arrogant heir meets a low-profile but stubborn chef...",
        "genre": ["Romantic TV Dramas", "TV Dramas", "Korean"],
        "cast": ["Kang Ha-neul", "Ko Min-si", "Kim Shin-rock"],
        "rating": "13+",
        "thumbnail": "blob:https://www.netflix.com/abc",
        "link": "https://www.netflix.com/watch/81971174"
      }
    ],
    "localMovies": [
      {
        "id": 11,
        "title": "Youth Glory",
        "description": "A noble and a royal unite against a looming threat...",
        "genre": ["Romantic TV Dramas", "TV Dramas", "Mainland Chinese TV Shows"],
        "cast": ["Song Weilong", "Bao Shangen", "Dai Luwa"],
        "rating": "13+",
        "thumbnail": "blob:https://www.netflix.com/def",
        "link": "https://www.netflix.com/watch/83073203"
      }
    ],
    "globalTV": [
      {
        "id": 13,
        "title": "Mad Unicorn",
        "description": "An aspiring entrepreneur comes up with a brilliant courier service idea...",
        "genre": ["TV Dramas", "Thai"],
        "cast": ["Natara", "Janeyeh Jiranorraphat", "Dr. Palang Rocksilp"],
        "rating": "16+",
        "thumbnail": "blob:https://www.netflix.com/ghi",
        "link": "https://www.netflix.com/watch/81595549"
      }
    ],
    "globalMovies": [
      {
        "id": 12,
        "title": "The Haunted Palace",
        "description": "A young woman confronts her shamanic powers...",
        "genre": ["Romantic TV Dramas", "TV Dramas", "Korean"],
        "cast": ["Yook Sung-jae", "Kim Ji-yeon", "Kim Ji-hun"],
        "rating": "13+",
        "thumbnail": "blob:https://www.netflix.com/jkl",
        "link": "https://www.netflix.com/watch/82031220"
      }
    ]
  }

};

const EntertainmentList = () => {
  const [selectedCategory, setSelectedCategory] = useState("localTV");

  const categories = Object.keys(data.entertainment);
  const items = data.entertainment[selectedCategory];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Entertainment Content</h1>

      {/* Category Selector */}
      <div className="mb-4 space-x-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Content */}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="border p-3 rounded shadow-sm">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
            <p className="text-xs text-gray-500">Rating: {item.rating}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">Watch</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntertainmentList;
