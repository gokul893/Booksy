import React, { useState } from 'react';
import { Heart, MessageCircle, Lightbulb, Plus } from 'lucide-react';
import { mockBookIdeas } from '../../data/mockData';

export default function BookIdeas() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newIdea, setNewIdea] = useState({
    title: '',
    genre: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle idea submission
    setNewIdea({ title: '', genre: '', description: '' });
    setShowCreateForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-serif">Book Ideas</h1>
          <p className="text-gray-600 dark:text-gray-400 font-serif">Share and discover creative story concepts</p>
        </div>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-4 py-2 rounded-xl font-medium hover:from-sky-600 hover:to-sky-700 transition-all shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>New Idea</span>
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8 bg-texture">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif">Share Your Book Idea</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Book title"
                value={newIdea.title}
                onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                required
              />
              <select
                value={newIdea.genre}
                onChange={(e) => setNewIdea({ ...newIdea, genre: e.target.value })}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                required
              >
                <option value="">Select genre</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Sci-Fi">Science Fiction</option>
                <option value="Romance">Romance</option>
                <option value="Mystery">Mystery</option>
                <option value="Thriller">Thriller</option>
                <option value="Historical">Historical Fiction</option>
              </select>
            </div>
            <textarea
              placeholder="Describe your book idea..."
              value={newIdea.description}
              onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-serif"
              required
            />
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-sky-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-sky-700 transition-colors"
              >
                Share Idea
              </button>
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockBookIdeas.map((idea) => (
          <div key={idea.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-md transition-shadow bg-texture">
            <div className="flex items-start space-x-3 mb-4">
              <img
                src={idea.user.avatar}
                alt={idea.user.fullName}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-100 dark:ring-sky-900"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 font-serif">{idea.user.fullName}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">@{idea.user.username}</p>
              </div>
              <div className="flex items-center space-x-1 text-amber-500">
                <Lightbulb className="w-4 h-4" />
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 font-serif">{idea.title}</h4>
              <span className="inline-block bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-xs px-2 py-1 rounded-full mb-3">
                {idea.genre}
              </span>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-serif">{idea.description}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{idea.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-sky-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">{idea.comments.length}</span>
                </button>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {new Date(idea.timestamp).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}