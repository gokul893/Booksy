import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, Star } from 'lucide-react';
import { BookPost as BookPostType } from '../../types';

interface BookPostProps {
  post: BookPostType;
  onLike: (postId: string) => void;
  onComment: (postId: string, comment: string) => void;
}

export default function BookPost({ post, onLike, onComment }: BookPostProps) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment(post.id, newComment);
      setNewComment('');
    }
  };

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
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6 bg-texture">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.fullName}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-100 dark:ring-sky-900"
          />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 font-serif">{post.user.fullName}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">@{post.user.username}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Book Info */}
      <div className="px-4 pb-4">
        <div className="flex space-x-4">
          <img
            src={post.book.cover}
            alt={post.book.title}
            className="w-20 h-28 object-cover rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-gray-600"
          />
          <div className="flex-1">
            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1 font-serif">{post.book.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-serif">by {post.book.author}</p>
            <div className="flex items-center space-x-1 mb-2">
              {renderStars(post.rating)}
            </div>
            <span className="inline-block bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-xs px-2 py-1 rounded-full">
              {post.book.genre}
            </span>
          </div>
        </div>
      </div>

      {/* Review */}
      {post.review && (
        <div className="px-4 pb-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-serif">{post.review}</p>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onLike(post.id)}
              className={`flex items-center space-x-2 transition-colors ${
                post.isLiked ? 'text-red-500' : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{post.likes}</span>
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-sky-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{post.comments.length}</span>
            </button>
            <button className="text-gray-500 dark:text-gray-400 hover:text-green-500 transition-colors">
              <Share className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs text-gray-400 dark:text-gray-500">{post.datePosted}</span>
        </div>
      </div>

      {/* Comments */}
      {showComments && (
        <div className="border-t border-gray-100 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50">
          {post.comments.map((comment) => (
            <div key={comment.id} className="flex space-x-3 mb-3">
              <img
                src={comment.user.avatar}
                alt={comment.user.fullName}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-700 rounded-lg px-3 py-2">
                  <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 font-serif">{comment.user.fullName}</p>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-serif">{comment.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          <form onSubmit={handleComment} className="flex space-x-3 mt-4">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
              alt="Your avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}