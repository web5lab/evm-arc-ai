import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatBot } from './ChatBot';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}