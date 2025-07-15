import React from 'react';
import { BookPost as BookPostType } from '../../types';
import BookPost from './BookPost';
import { mockPosts } from '../../data/mockData';

interface FeedProps {
  onLike: (postId: string) => void;
  onComment: (postId: string, comment: string) => void;
}

export default function Feed({ onLike, onComment }: FeedProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-serif">Your Reading Feed</h1>
        <p className="text-gray-600 dark:text-gray-400 font-serif">Discover what your friends are reading</p>
      </div>

      <div className="space-y-6">
        {mockPosts.map((post) => (
          <BookPost
            key={post.id}
            post={post}
            onLike={onLike}
            onComment={onComment}
          />
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="mt-12 bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-sky-100 dark:border-sky-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif">📚 AI Recommendations for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "The Midnight Library",
              author: "Matt Haig",
              reason: "Based on your love for philosophical fiction"
            },
            {
              title: "Klara and the Sun",
              author: "Kazuo Ishiguro",
              reason: "Similar to your recent sci-fi reads"
            },
            {
              title: "Circe",
              author: "Madeline Miller",
              reason: "Popular among readers like you"
            }
          ].map((book, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 font-serif">{book.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-serif">by {book.author}</p>
              <p className="text-xs text-sky-600 dark:text-sky-400">{book.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}