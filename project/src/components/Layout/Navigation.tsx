import React from 'react';
import { Home, Search, PlusSquare, Book, User, Lightbulb } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'feed', icon: Home, label: 'Feed' },
  { id: 'explore', icon: Search, label: 'Explore' },
  { id: 'post', icon: PlusSquare, label: 'Post' },
  { id: 'ideas', icon: Lightbulb, label: 'Ideas' },
  { id: 'library', icon: Book, label: 'Library' },
  { id: 'profile', icon: User, label: 'Profile' },
];

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-2 z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b backdrop-blur-lg bg-white/95 dark:bg-gray-900/95">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-around md:justify-start md:space-x-8">
          <div className="hidden md:flex items-center space-x-3 mr-8">
            <Logo className="w-10 h-10" />
            <span className="text-xl font-bold font-serif bg-gradient-to-r from-sky-600 to-sky-700 dark:from-sky-400 dark:to-sky-500 bg-clip-text text-transparent">
              Booksy
            </span>
          </div>
          
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 px-2 py-2 rounded-lg transition-all duration-200 ${
                activeTab === id
                  ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30'
                  : 'text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs md:text-sm font-medium">{label}</span>
            </button>
          ))}
          
          <div className="hidden md:flex items-center ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}