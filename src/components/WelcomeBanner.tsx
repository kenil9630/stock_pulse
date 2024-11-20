import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function WelcomeBanner() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{getGreeting()}, John! 👋</h1>
          <p className="text-gray-400">
            You're tracking 3 exchanges and 20 stocks
          </p>
        </div>
        <div className="bg-blue-500/10 p-4 rounded-xl">
          <TrendingUp className="w-8 h-8 text-blue-500" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[
          { label: 'Active Alerts', value: '12', change: '+2.4%' },
          { label: 'News Summaries', value: '156', change: '+12.3%' },
          { label: 'Market Sentiment', value: 'Bullish', change: '+5.7%' },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm"
          >
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
            <p className="text-emerald-500 text-sm mt-1">{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}