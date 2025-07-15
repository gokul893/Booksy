import React, { useState } from 'react';
import { Book, BookOpen, Bookmark, Clock, Star } from 'lucide-react';
import { mockBooks } from '../../data/mockData';

export default function Library() {
  const [activeTab, setActiveTab] = useState('read');

  const tabs = [
    { id: 'read', label: 'Read Books', icon: BookOpen, count: 156 },
    { id: 'reading', label: 'Currently Reading', icon: Book, count: 3 },
    { id: 'wishlist', label: 'Want to Read', icon: Bookmark, count: 47 },
    { id: 'history', label: 'Reading History', icon: Clock, count: 156 },
  ];

  const readBooks = [
    { ...mockBooks[0], rating: 5, dateRead: '2024-01-15', review: 'Absolutely loved this!' },
    { ...mockBooks[1], rating: 4, dateRead: '2024-01-10', review: 'Great sci-fi adventure!' },
    { ...mockBooks[2], rating: 4, dateRead: '2024-01-05', review: 'Kept me guessing until the end.' },
  ];

  const currentlyReading = [
    {
      id: '4',
      title: 'The Seven Moons of Maali Almeida',
      author: 'Shehan Karunatilaka',
      cover: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      progress: 65,
      genre: 'Literary Fiction'
    },
    {
      id: '5',
      title: 'Babel',
      author: 'R.F. Kuang',
      cover: 'https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      progress: 23,
      genre: 'Dark Academia'
    }
  ];

  const wishlist = [
    {
      id: '6',
      title: 'The Atlas Six',
      author: 'Olivie Blake',
      cover: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      genre: 'Dark Fantasy'
    },
    {
      id: '7',
      title: 'Mexican Gothic',
      author: 'Silvia Moreno-Garcia',
      cover: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      genre: 'Gothic Horror'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-amber-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-serif">My Library</h1>
        <p className="text-gray-600 dark:text-gray-400 font-serif">Track your reading journey</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-2xl p-4">
          <div className="text-2xl font-bold">156</div>
          <div className="text-sky-100 text-sm">Books Read</div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-4">
          <div className="text-2xl font-bold">3</div>
          <div className="text-blue-100 text-sm">Currently Reading</div>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl p-4">
          <div className="text-2xl font-bold">47</div>
          <div className="text-indigo-100 text-sm">Want to Read</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-4">
          <div className="text-2xl font-bold">4.2</div>
          <div className="text-purple-100 text-sm">Avg Rating</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-8 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
        {tabs.map(({ id, label, icon: Icon, count }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all flex-1 ${
              activeTab === id
                ? 'bg-white dark:bg-gray-700 text-sky-700 dark:text-sky-300 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="font-medium font-serif">{label}</span>
            <span className="text-sm opacity-75">({count})</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 bg-texture">
        {activeTab === 'read' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 font-serif">Books You've Read</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {readBooks.map((book) => (
                <div key={book.id} className="border border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex space-x-4">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-16 h-22 object-cover rounded-lg ring-1 ring-gray-200 dark:ring-gray-600"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 font-serif">{book.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-serif">by {book.author}</p>
                      <div className="flex items-center space-x-1 mb-2">
                        {renderStars(book.rating)}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Read on {book.dateRead}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reading' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 font-serif">Currently Reading</h3>
            <div className="space-y-4">
              {currentlyReading.map((book) => (
                <div key={book.id} className="border border-gray-200 dark:border-gray-600 rounded-xl p-4">
                  <div className="flex space-x-4">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-16 h-22 object-cover rounded-lg ring-1 ring-gray-200 dark:ring-gray-600"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 font-serif">{book.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 font-serif">by {book.author}</p>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="text-sky-600 dark:text-sky-400 font-medium">{book.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-sky-500 to-sky-600 h-2 rounded-full"
                            style={{ width: `${book.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 font-serif">Want to Read</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((book) => (
                <div key={book.id} className="border border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex space-x-4">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-16 h-22 object-cover rounded-lg ring-1 ring-gray-200 dark:ring-gray-600"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 font-serif">{book.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-serif">by {book.author}</p>
                      <span className="inline-block bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-xs px-2 py-1 rounded-full">
                        {book.genre}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}