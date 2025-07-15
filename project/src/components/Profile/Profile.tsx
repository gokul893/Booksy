import React, { useState } from 'react';
import { Settings, MapPin, Calendar, Link2, BookOpen, Users, Star } from 'lucide-react';
import { currentUser } from '../../data/mockData';

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);

  const recentPosts = [
    {
      id: '1',
      book: 'Project Hail Mary',
      rating: 4,
      date: '2024-01-14'
    },
    {
      id: '2',
      book: 'The Seven Husbands of Evelyn Hugo',
      rating: 5,
      date: '2024-01-10'
    }
  ];

  const favoriteGenres = ['Fantasy', 'Science Fiction', 'Mystery', 'Historical Fiction'];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6 bg-texture">
        {/* Cover Photo */}
        <div className="h-32 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400"></div>
        
        {/* Profile Info */}
        <div className="px-6 pb-6">
          <div className="flex items-end space-x-4 -mt-16">
            <img
              src={currentUser.avatar}
              alt={currentUser.fullName}
              className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover ring-2 ring-sky-100 dark:ring-sky-900"
            />
            <div className="flex-1 pt-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 font-serif">{currentUser.fullName}</h1>
              <p className="text-gray-600 dark:text-gray-400">@{currentUser.username}</p>
            </div>
            <div className="flex space-x-2 pt-4">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-6 py-2 rounded-xl font-medium transition-colors ${
                  isFollowing
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    : 'bg-sky-600 text-white hover:bg-sky-700'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-800 dark:text-gray-200 mb-4 font-serif">{currentUser.bio}</p>
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Joined March 2023</span>
              </div>
              <div className="flex items-center space-x-1">
                <Link2 className="w-4 h-4" />
                <a href="#" className="text-sky-600 dark:text-sky-400 hover:underline">bookblog.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center bg-texture">
          <BookOpen className="w-8 h-8 text-sky-600 dark:text-sky-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{currentUser.booksRead}</div>
          <div className="text-gray-600 dark:text-gray-400 font-serif">Books Read</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center bg-texture">
          <Users className="w-8 h-8 text-sky-600 dark:text-sky-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{currentUser.followers.toLocaleString()}</div>
          <div className="text-gray-600 dark:text-gray-400 font-serif">Followers</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center bg-texture">
          <Users className="w-8 h-8 text-sky-600 dark:text-sky-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{currentUser.following.toLocaleString()}</div>
          <div className="text-gray-600 dark:text-gray-400 font-serif">Following</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 bg-texture">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif">Recent Activity</h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-gray-100 font-medium font-serif">Rated "{post.book}"</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {Array.from({ length: post.rating }, (_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Genres */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 bg-texture">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif">Favorite Genres</h3>
          <div className="grid grid-cols-2 gap-3">
            {favoriteGenres.map((genre, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 border border-sky-100 dark:border-sky-800 rounded-xl p-3 text-center"
              >
                <span className="text-sky-700 dark:text-sky-300 font-medium font-serif">{genre}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 font-serif">Reading Goals 2024</h4>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-serif">Books Read</span>
                <span className="font-bold text-sky-600 dark:text-sky-400">156 / 200</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-sky-500 to-sky-600 h-3 rounded-full"
                  style={{ width: '78%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}