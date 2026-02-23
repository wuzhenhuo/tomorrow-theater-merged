import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, ExternalLink, Instagram, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">明日剧场</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              国内首个将元宇宙虚拟剧场概念具象化，融合视讯通讯与动作捕捉技术的沉浸式艺术展演空间。AIGC+元宇宙，戏剧、舞蹈、绘画、设计全方位数字艺术教育平台。
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <a 
                href="https://auqliwvr.manus.space/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                体验平台
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/theateroftomorrow/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://github.com/wuzhenhuo?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://x.com/WZhenhuo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300"
                title="Twitter/X"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
            
            <p className="text-sm text-gray-500">
              © 2024-2026 澳门未来视野科技有限公司. 保留所有权利.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/platform" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  平台介绍
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  课程体系
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  团队介绍
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  研究论文与奖项
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  媒体报道
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  资源中心
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(853) 66810358</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+86 13810745684</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>tot@alexzhenwu.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>澳门青年创业孵化中心</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              北京师范大学未来设计学院种子基金支持项目
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">2025中国元宇宙四星级供应商</span>
              <span className="text-gray-500 text-sm">2023年Unity黑马计划</span>
              <span className="text-gray-500 text-sm">2022全球数字科技创意大赛银奖</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
