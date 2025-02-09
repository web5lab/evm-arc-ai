import React, { useState } from 'react';
import { Copy, Plus, Trash2, Eye, EyeOff, RefreshCw } from 'lucide-react';

export function ApiKeysPage() {
  const [showKey, setShowKey] = useState<string | null>(null);
  const [apiKeys] = useState([
    { id: '1', name: 'Production Key', key: 'sk_live_123...abc', created: '2024-03-15', lastUsed: '2 hours ago' },
    { id: '2', name: 'Development Key', key: 'sk_test_456...xyz', created: '2024-03-10', lastUsed: '5 days ago' },
  ]);

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    // Add toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">API Keys</h1>
            <p className="text-gray-600 mt-1">Manage your API access credentials</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="w-5 h-5" />
            Create New Key
          </button>
        </div>

        {/* Security Notice */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
          <h3 className="text-sm font-medium text-orange-800 mb-2">Security Notice</h3>
          <p className="text-sm text-orange-700">
            Your API keys carry many privileges. Keep them secure and never share them in publicly accessible areas.
          </p>
        </div>

        {/* API Keys List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    API Key
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Used
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {apiKeys.map((apiKey) => (
                  <tr key={apiKey.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">{apiKey.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                          {showKey === apiKey.id ? apiKey.key : apiKey.key.replace(/(?<=^.{8}).*(?=.{4}$)/g, '•••')}
                        </code>
                        <button
                          onClick={() => setShowKey(showKey === apiKey.id ? null : apiKey.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          {showKey === apiKey.id ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => handleCopyKey(apiKey.key)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-500">{apiKey.created}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-500">{apiKey.lastUsed}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                      <button className="text-gray-400 hover:text-orange-500">
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}