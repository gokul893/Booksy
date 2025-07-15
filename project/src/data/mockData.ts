import { User, Book, BookPost, BookIdea } from '../types';

export const currentUser: User = {
  id: '1',
  username: 'bookworm_sarah',
  email: 'sarah@example.com',
  fullName: 'Sarah Johnson',
  avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  bio: 'Passionate reader | Fantasy & Sci-Fi lover | Currently reading 📚',
  followers: 1247,
  following: 892,
  booksRead: 156
};

export const mockUsers: User[] = [
  {
    id: '2',
    username: 'mystery_maven',
    email: 'alex@example.com',
    fullName: 'Alex Chen',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    bio: 'Mystery and thriller enthusiast 🕵️‍♀️',
    followers: 856,
    following: 432,
    booksRead: 98
  },
  {
    id: '3',
    username: 'classic_reader',
    email: 'emily@example.com',
    fullName: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    bio: 'Classic literature professor | Teaching the beauty of timeless stories',
    followers: 2341,
    following: 156,
    booksRead: 487
  }
];

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    cover: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
    genre: 'Historical Fiction',
    pages: 400,
    publishedYear: 2017
  },
  {
    id: '2',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
    genre: 'Science Fiction',
    pages: 496,
    publishedYear: 2021
  },
  {
    id: '3',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    cover: 'https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
    genre: 'Psychological Thriller',
    pages: 336,
    publishedYear: 2019
  }
];

export const mockPosts: BookPost[] = [
  {
    id: '1',
    user: mockUsers[0],
    book: mockBooks[0],
    rating: 5,
    review: 'Absolutely mesmerizing! This book had me completely captivated from the first page. The storytelling is brilliant and the characters feel so real. Evelyn Hugo is unforgettable.',
    datePosted: '2024-01-15',
    likes: 42,
    comments: [
      {
        id: '1',
        user: currentUser,
        text: 'This is on my TBR list! Your review convinced me to read it next.',
        timestamp: '2024-01-15T14:30:00Z'
      }
    ],
    isLiked: false
  },
  {
    id: '2',
    user: currentUser,
    book: mockBooks[1],
    rating: 4,
    review: 'Andy Weir does it again! This sci-fi adventure had me on the edge of my seat. The science is fascinating and the humor keeps it light despite the heavy subject matter.',
    datePosted: '2024-01-14',
    likes: 38,
    comments: [],
    isLiked: true
  },
  {
    id: '3',
    user: mockUsers[1],
    book: mockBooks[2],
    rating: 4,
    review: 'A psychological thriller that keeps you guessing until the very end. The twist was unexpected and well-executed. Perfect for mystery lovers!',
    datePosted: '2024-01-13',
    likes: 56,
    comments: [
      {
        id: '2',
        user: mockUsers[2],
        text: 'The ending blew my mind! Didn\'t see it coming at all.',
        timestamp: '2024-01-13T16:45:00Z'
      }
    ],
    isLiked: true
  }
];

export const mockBookIdeas: BookIdea[] = [
  {
    id: '1',
    user: currentUser,
    title: 'The Time Librarian',
    genre: 'Fantasy',
    description: 'A librarian discovers that certain books in her collection are portals to different time periods. She must navigate through history to prevent someone from altering the timeline.',
    likes: 23,
    comments: [],
    timestamp: '2024-01-12T10:00:00Z'
  },
  {
    id: '2',
    user: mockUsers[0],
    title: 'Digital Ghosts',
    genre: 'Sci-Fi Thriller',
    description: 'In a world where consciousness can be uploaded to the cloud, a detective investigates murders where the victims\' digital souls have gone missing.',
    likes: 45,
    comments: [],
    timestamp: '2024-01-11T15:30:00Z'
  }
];