import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo2 from '../assets/images/logo2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: '首页', href: '/' },
    { name: '平台介绍', href: '/platform' },
    { name: '课程体系', href: '/courses' },
    { name: '团队介绍', href: '/team' },
    { name: '研究论文与奖项', href: '/research' },
    { name: '媒体报道', href: '/media' },
    { name: '资源中心', href: '/resources' },
    { name: '联系我们', href: '/contact' },
  ];

  const isActiveRoute = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/85 backdrop-blur-lg border-b border-slate-700/50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={logo2} alt="明日剧场" className="w-12 h-12 object-contain rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              明日剧场
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400 whitespace-nowrap rounded-md ${
                  isActiveRoute(item.href)
                    ? 'text-cyan-400'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
                {isActiveRoute(item.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              onClick={() => window.open('https://auqliwvr.manus.space/', '_blank')}
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              体验平台
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white hover:bg-slate-700/50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/98 rounded-xl mt-2 border border-slate-700/50 shadow-xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    isActiveRoute(item.href)
                      ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/60'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isActiveRoute(item.href) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 flex-shrink-0" />
                  )}
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white"
                  onClick={() => window.open('https://auqliwvr.manus.space/', '_blank')}
                >
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  体验平台
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
