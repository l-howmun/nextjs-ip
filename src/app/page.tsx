'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [ipv4, setIpv4] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        const response = await fetch('/api/ip');
        const data = await response.json();
        setIpv4(data.ipv4);
      } catch (error) {
        console.error('Error fetching IP:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIpData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          What is my IPv4?
        </h1>
        
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-lg font-mono text-center text-gray-800 dark:text-white">{ipv4}</p>
          </div>
        )}
      </main>
    </div>
  );
}
