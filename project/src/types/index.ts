export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  booksRead: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  pages: number;
  publishedYear: number;
}

export interface BookPost {
  id: string;
  user: User;
  book: Book;
  rating: number;
  review: string;
  datePosted: string;
  likes: number;
  comments: Comment[];
  isLiked: boolean;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  timestamp: string;
}

export interface BookIdea {
  id: string;
  user: User;
  title: string;
  genre: string;
  description: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}