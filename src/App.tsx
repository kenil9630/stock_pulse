import React from 'react';
import { Activity, Bell, ChevronDown, Search, Settings, TrendingUp, User } from 'lucide-react';
import Header from './components/Header';
import WelcomeBanner from './components/WelcomeBanner';
import NewsFeed from './components/NewsFeed';
import QuickActions from './components/QuickActions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <WelcomeBanner />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <NewsFeed />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;