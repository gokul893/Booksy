import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import Navigation from './components/Layout/Navigation';
import Feed from './components/Feed/Feed';
import CreatePost from './components/Post/CreatePost';
import Explore from './components/Explore/Explore';
import BookIdeas from './components/Ideas/BookIdeas';
import Library from './components/Library/Library';
import Profile from './components/Profile/Profile';
import ThemeToggle from './components/Layout/ThemeToggle';
import Logo from './components/Layout/Logo';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeTab, setActiveTab] = useState('feed');

  const handleLogin = (email: string, password: string) => {
    // Simulate login
    setIsAuthenticated(true);
  };

  const handleSignup = (email: string, password: string, fullName: string, username: string) => {
    // Simulate signup
    setIsAuthenticated(true);
  };

  const handleLike = (postId: string) => {
    // Handle like functionality
    console.log('Liked post:', postId);
  };

  const handleComment = (postId: string, comment: string) => {
    // Handle comment functionality
    console.log('Commented on post:', postId, comment);
  };

  const handleCreatePost = (post: any) => {
    // Handle create post functionality
    console.log('Created post:', post);
    setActiveTab('feed');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-paper-light dark:bg-paper-dark bg-texture transition-colors duration-200">
        {!isAuthenticated ? (
          <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 transition-colors duration-200">
            <div className="w-full max-w-md">
              {/* Logo */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <Logo className="w-12 h-12" />
                  <span className="text-3xl font-bold font-serif bg-gradient-to-r from-sky-600 to-sky-700 dark:from-sky-400 dark:to-sky-500 bg-clip-text text-transparent">
                    Booksy
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-serif">Connect with fellow book lovers</p>
                
                {/* Theme Toggle */}
                <div className="flex justify-center mt-4">
                  <ThemeToggle />
                </div>
              </div>

              {authMode === 'login' ? (
                <LoginForm
                  onLogin={handleLogin}
                  onSwitchToSignup={() => setAuthMode('signup')}
                />
              ) : (
                <SignupForm
                  onSignup={handleSignup}
                  onSwitchToLogin={() => setAuthMode('login')}
                />
              )}
            </div>
          </div>
        ) : (
          <>
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            
            <main className="pt-20 pb-20 md:pt-16 md:pb-4">
              {activeTab === 'feed' && (
                <Feed onLike={handleLike} onComment={handleComment} />
              )}
              {activeTab === 'explore' && <Explore />}
              {activeTab === 'post' && <CreatePost onCreatePost={handleCreatePost} />}
              {activeTab === 'ideas' && <BookIdeas />}
              {activeTab === 'library' && <Library />}
              {activeTab === 'profile' && <Profile />}
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;