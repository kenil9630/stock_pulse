import React from 'react';
import { Bell, LineChart, Newspaper, Plus } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    {
      icon: <Plus className="w-5 h-5" />,
      title: 'Track New Stock',
      description: 'Add a new stock to your watchlist'
    },
    {
      icon: <Newspaper className="w-5 h-5" />,
      title: 'Summarize News',
      description: 'Get AI-powered news summaries'
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: 'Set Alerts',
      description: 'Create custom price alerts'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-4 text-left transition-colors group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                {action.icon}
              </div>
              <div>
                <h3 className="font-medium">{action.title}</h3>
                <p className="text-sm text-gray-400">{action.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <LineChart className="w-6 h-6 text-blue-500" />
            <h3 className="font-semibold">Market Overview</h3>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { label: 'S&P 500', value: '+1.2%' },
              { label: 'NASDAQ', value: '+0.8%' },
              { label: 'DOW', value: '+0.5%' }
            ].map((index) => (
              <div key={index.label} className="flex justify-between items-center">
                <span className="text-gray-400">{index.label}</span>
                <span className="text-emerald-500">{index.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}