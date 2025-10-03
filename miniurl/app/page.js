'use client';

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, generate a mock short URL
    const randomId = Math.random().toString(36).substring(2, 8);
    setShortUrl(`${window.location.origin}/${randomId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="bg-white shadow-xl p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Shorten Your URL</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="url"
            placeholder="Enter your URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
          >
            Generate Short URL
          </button>
        </form>

        {shortUrl && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md text-center break-words">
            <span className="text-blue-900 font-semibold">Short URL: </span>
            <a href={shortUrl} className="text-blue-700 hover:underline" target="_blank">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
