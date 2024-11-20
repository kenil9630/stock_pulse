import React from 'react';
import { ChevronRight, MessageSquare, Share2, TrendingUp } from 'lucide-react';

export default function NewsFeed() {
  const news = [
    {
      title: 'Tesla Reports Record Q4 Earnings',
      exchange: 'NASDAQ',
      timestamp: '2 hours ago',
      summary: 'Tesla exceeded analyst expectations with Q4 earnings showing a 30% YoY growth...',
      sentiment: 'positive',
      aiInsight: 'Strong buy signal based on technical indicators and fundamental analysis.',
      comments: 24,
      shares: 156
    },
    {
      title: 'Fed Announces New Interest Rate Policy',
      exchange: 'NYSE',
      timestamp: '4 hours ago',
      summary: 'Federal Reserve maintains current interest rates, signals potential cuts in 2024...',
      sentiment: 'neutral',
      aiInsight: 'Market volatility expected in financial sector stocks.',
      comments: 89,
      shares: 234
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Latest Market News</h2>
        <button className="text-blue-500 hover:text-blue-400 flex items-center space-x-1">
          <span>View All</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-blue-500 font-medium">
                    {item.exchange}
                  </span>
                  <span className="text-sm text-gray-400">{item.timestamp}</span>
                </div>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.summary}</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-500/10 rounded-lg">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-blue-500">AI Insight</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">{item.aiInsight}</p>
            </div>

            <div className="flex items-center space-x-6 mt-4">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-500">
                <MessageSquare className="w-4 h-4" />
                <span>{item.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-500">
                <Share2 className="w-4 h-4" />
                <span>{item.shares}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}