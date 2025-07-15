import React, { useState } from 'react';
import { Star, Image, Search } from 'lucide-react';

interface CreatePostProps {
  onCreatePost: (post: any) => void;
}

export default function CreatePost({ onCreatePost }: CreatePostProps) {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookGenre, setBookGenre] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      bookTitle,
      bookAuthor,
      bookGenre,
      rating,
      review,
      timestamp: new Date().toISOString(),
    };
    onCreatePost(newPost);
    // Reset form
    setBookTitle('');
    setBookAuthor('');
    setBookGenre('');
    setRating(0);
    setReview('');
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <button
        key={i}
        type="button"
        onMouseEnter={() => setHoveredRating(i + 1)}
        onMouseLeave={() => setHoveredRating(0)}
        onClick={() => setRating(i + 1)}
        className="transition-colors"
      >
        <Star
          className={`w-8 h-8 ${
            i < (hoveredRating || rating)
              ? 'text-amber-400 fill-current'
              : 'text-gray-300 dark:text-gray-600'
          }`}
        />
      </button>
    ));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 bg-texture">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-serif">Share a Book</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Book Search */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-serif">
              Search for a book
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title or author..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 transition-all text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-serif">
                Book Title *
              </label>
              <input
                type="text"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 transition-all text-gray-900 dark:text-gray-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-serif">
                Author *
              </label>
              <input
                type="text"
                value={bookAuthor}
                onChange={(e) => setBookAuthor(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 transition-all text-gray-900 dark:text-gray-100"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-serif">
              Genre
            </label>
            <select
              value={bookGenre}
              onChange={(e) => setBookGenre(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 transition-all text-gray-900 dark:text-gray-100"
            >
              <option value="">Select a genre</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Science Fiction</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Biography">Biography</option>
              <option value="History">History</option>
              <option value="Self-Help">Self-Help</option>
            </select>
          </div>

          {/* Book Cover Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-serif">
              Book Cover
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-sky-400 dark:hover:border-sky-500 transition-colors cursor-pointer">
              <Image className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 dark:text-gray-400 font-serif">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">PNG, JPG up to 5MB</p>
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 font-serif">
              Your Rating *
            </label>
            <div className="flex space-x-1">
              {renderStars()}
            </div>
          </div>

          {/* Review */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-serif">
              Your Review
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              placeholder="Share your thoughts about this book..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 transition-all resize-none text-gray-900 dark:text-gray-100 font-serif"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-sky-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
          >
            Share Book
          </button>
        </form>
      </div>
    </div>
  );
}