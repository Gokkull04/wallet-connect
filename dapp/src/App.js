import React from 'react';
import Button from './button';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold">wallet-connect</div>
            <Button />
          </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">Welcome to Wallet Connect</h1>
      </main>
    </div>
  );
}

export default App;
