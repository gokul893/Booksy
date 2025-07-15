import React, { useState } from 'react';
import { Search, TrendingUp, Users, Hash, BookOpen } from 'lucide-react';

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('books');

  const trendingBooks = [
    { title: "Fourth Wing", author: "Rebecca Yarros", readers: "12.3k" },
    { title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", readers: "8.7k" },
    { title: "Book Lovers", author: "Emily Henry", readers: "15.2k" },
    { title: "The Atlas Six", author: "Olivie Blake", readers: "9.1k" },
  ];

  const trendingUsers = [
    { username: "bookish_emma", followers: "45.2k", avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" },
    { username: "novel_insights", followers: "32.8k", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" },
    { username: "fantasy_realm", followers: "28.5k", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" },
  ];

  const trendingHashtags = [
    { tag: "#BookTok", posts: "156k" },
    { tag: "#FantasyReads", posts: "89k" },
    { tag: "#BookClub", posts: "76k" },
    { tag: "#MustRead2024", posts: "43k" },
  ];

  const filters = [
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'hashtags', label: 'Hashtags', icon: Hash },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif">Explore</h1>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search books, users, or hashtags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 transition-all text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-2">
          {filters.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                activeFilter === id
                  ? 'bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-700'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trending Books */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 bg-texture">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-serif">Trending Books</h2>
          </div>
          <div className="space-y-4">
            {trendingBooks.map((book, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="w-12 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 font-serif">{book.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-serif">by {book.author}</p>
                  <p className="text-sky-600 dark:text-sky-400 text-xs">{book.readers} readers</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Users */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 bg-texture">
          <div className="flex items-center space-x-2 mb-6">
            <Users className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-serif">Popular Readers</h2>
          </div>
          <div className="space-y-4">
            {trendingUsers.map((user, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-sky-100 dark:ring-sky-900"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 font-serif">@{user.username}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{user.followers} followers</p>
                </div>
                <button className="px-4 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium hover:bg-sky-200 dark:hover:bg-sky-800 transition-colors">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Hashtags */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 bg-texture">
        <div className="flex items-center space-x-2 mb-6">
          <Hash className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-serif">Trending Hashtags</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingHashtags.map((hashtag, index) => (
            <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 border border-sky-100 dark:border-sky-800 cursor-pointer hover:shadow-md transition-shadow">
              <h3 className="font-bold text-sky-700 dark:text-sky-300 mb-1 font-serif">{hashtag.tag}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{hashtag.posts} posts</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}