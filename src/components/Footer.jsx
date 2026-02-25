import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logo2 from '../assets/images/logo2.png';

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900/95 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-2 mb-5 group">
              <img src={logo2} alt="明日剧场" className="w-14 h-14 object-contain rounded-xl" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                明日剧场
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-sm">
              国内首个将元宇宙虚拟剧场概念具象化，融合视讯通讯与动作捕捉技术的沉浸式艺术展演空间。AIGC+元宇宙，戏剧、舞蹈、绘画、设计全方位数字艺术教育平台。
            </p>

            <a
              href="https://auqliwvr.manus.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 transition-colors text-sm font-medium mb-6"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              体验平台
            </a>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 mb-6">
              <a
                href="https://www.instagram.com/theateroftomorrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-transparent text-gray-400 hover:text-white"
                title="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://github.com/wuzhenhuo?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-slate-800 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-slate-500 text-gray-400 hover:text-white"
                title="GitHub"
              >
                <IconGithub />
              </a>
              <a
                href="https://x.com/WZhenhuo"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-slate-500 text-gray-400 hover:text-white"
                title="Twitter / X"
              >
                <IconX />
              </a>
            </div>

            <p className="text-xs text-gray-600">
              © 2024–2026 澳门未来视野科技有限公司. 保留所有权利.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">快速链接</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/platform', label: '平台介绍' },
                { to: '/courses', label: '课程体系' },
                { to: '/team', label: '团队介绍' },
                { to: '/research', label: '研究论文与奖项' },
                { to: '/media', label: '媒体报道' },
                { to: '/resources', label: '资源中心' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span>(853) 66810358</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span>+86 13810745684</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <span>tot@alexzhenwu.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-pink-400" />
                </div>
                <span>澳门青年创业孵化中心</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              北京师范大学未来设计学院种子基金支持项目
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: '2025中国元宇宙四星级供应商', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
                { label: '2023 Unity黑马计划', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
                { label: '2022全球数字科技创意大赛银奖', color: 'text-slate-300 bg-slate-400/10 border-slate-400/20' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
