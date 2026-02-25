import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Globe,
  Zap,
  ArrowRight,
  Play,
  BookOpen,
  Palette,
  Brain,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  GraduationCap,
  Building2,
} from 'lucide-react';

// 导入轮播图片
import img001tot from '../assets/images/001tot.JPG';
import dancer1 from '../assets/images/dancer1.jpg';
import dancer2 from '../assets/images/dancer2.JPG';
import dancer4 from '../assets/images/dancer4.JPG';
import dancer5 from '../assets/images/dancer5.JPG';
import dancer7 from '../assets/images/dancer7.jpg';
import dancer8 from '../assets/images/dancer8.JPG';

// 图片轮播组件
const ImageCarousel = ({ images, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * images.length));
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextImage, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative group ${className}`}>
      <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-purple-900/40" style={{ aspectRatio: '16/7' }}>
        <img
          src={images[currentIndex]}
          alt={`轮播图片 ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onClick={nextImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
      </div>

      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-5 h-1.5 bg-cyan-400'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  const courseSystemImages = [img001tot, dancer1, dancer2, dancer4, dancer5, dancer7, dancer8];

  const features = [
    {
      icon: <Globe className="w-7 h-7 text-cyan-400" />,
      iconBg: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30",
      topBorder: "from-cyan-400 to-cyan-600",
      title: "数智虚拟展演平台",
      description: "国内首个元宇宙虚拟剧场，融合视讯通讯与动作捕捉技术",
      link: "/platform",
      linkColor: "text-cyan-400 hover:text-cyan-300",
    },
    {
      icon: <BookOpen className="w-7 h-7 text-purple-400" />,
      iconBg: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
      topBorder: "from-purple-400 to-purple-600",
      title: "线上专业版操作手册",
      description: "详细的平台使用指南，支持多种动作捕捉设备",
      link: "/manual",
      linkColor: "text-purple-400 hover:text-purple-300",
    },
    {
      icon: <Palette className="w-7 h-7 text-pink-400" />,
      iconBg: "from-pink-500/20 to-pink-600/10 border-pink-500/30",
      topBorder: "from-pink-400 to-rose-500",
      title: "数字艺术设计课程",
      description: "AIGC+元宇宙，戏剧、舞蹈、绘画、设计全方位课程",
      link: "/courses",
      linkColor: "text-pink-400 hover:text-pink-300",
    },
  ];

  const achievements = [
    { text: "2025 AI元宇宙1000优秀产品（四星级）", color: "from-yellow-500/20 to-amber-600/10", border: "border-yellow-500/30", icon: "★★★★" },
    { text: "2025中国元宇宙星级供应商（四星级）", color: "from-yellow-500/20 to-amber-600/10", border: "border-yellow-500/30", icon: "★★★★" },
    { text: "2024 AI元宇宙1000优秀产品（三星级）", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30", icon: "★★★" },
    { text: "2025廣州科技創新創業大賽港澳台賽優勝獎", color: "from-cyan-500/20 to-cyan-600/10", border: "border-cyan-500/30", icon: "🏆" },
    { text: "2024中国教育学会课题立项", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/30", icon: "📚" },
    { text: "2023中國國際大學生雙創賽銀獎", color: "from-slate-400/20 to-slate-500/10", border: "border-slate-400/30", icon: "🥈" },
    { text: "2023理創大賽銀獎（索尼/理光）", color: "from-slate-400/20 to-slate-500/10", border: "border-slate-400/30", icon: "🥈" },
    { text: "2023入選Unity黑馬計劃", color: "from-emerald-500/20 to-emerald-600/10", border: "border-emerald-500/30", icon: "🚀" },
    { text: "2022TCDIG全球數字科技創意設計大賽銀獎", color: "from-slate-400/20 to-slate-500/10", border: "border-slate-400/30", icon: "🥈" },
  ];

  const locations = [
    { name: "澳门青年创业孵化中心", icon: <Building2 className="w-6 h-6" />, color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "聚能湾国家级科技企业孵化中心（上海）", icon: <Building2 className="w-6 h-6" />, color: "text-purple-400", bg: "bg-purple-400/10" },
    { name: "北京师范大学未来设计美术馆（珠海）", icon: <GraduationCap className="w-6 h-6" />, color: "text-pink-400", bg: "bg-pink-400/10" },
    { name: "澳门科技大学人文艺术学院", icon: <GraduationCap className="w-6 h-6" />, color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "香港科技大学霍英东研究院", icon: <GraduationCap className="w-6 h-6" />, color: "text-purple-400", bg: "bg-purple-400/10" },
    { name: "中关村AI北纬社区", icon: <MapPin className="w-6 h-6" />, color: "text-pink-400", bg: "bg-pink-400/10" },
  ];

  const courses = [
    {
      title: "AIGC数字艺术创作",
      description: "结合人工智能技术的数字艺术创作课程",
      duration: "12周",
      level: "初级-高级",
      color: "border-l-cyan-400",
      badge: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30",
    },
    {
      title: "元宇宙虚拟展演",
      description: "虚拟现实技术在艺术展演中的应用",
      duration: "16周",
      level: "中级-高级",
      color: "border-l-purple-400",
      badge: "bg-purple-400/10 text-purple-400 border-purple-400/30",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/60 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              国内首个元宇宙虚拟剧场
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                明日剧场
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              AIGC + 元宇宙 · 戏剧 · 舞蹈 · 绘画 · 设计
              <br />
              <span className="text-gray-400 text-base">将元宇宙虚拟剧场概念具象化的沉浸式艺术展演空间</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                onClick={() => window.open('https://auqliwvr.manus.space/', '_blank')}
              >
                <Play className="w-5 h-5 mr-2" />
                立即体验平台
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-gray-300 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 px-8 transition-all duration-300"
                onClick={() => window.open('https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/android/TOT_v1.3.0.apk', '_blank')}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                下载移动版（安卓）
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { value: "9+", label: "国际奖项" },
                { value: "6+", label: "合作机构" },
                { value: "2", label: "专业课程体系" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 三大核心模块视频 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/60 ring-1 ring-white/10">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-2xl blur-sm -z-10" />
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV1wjEvzNEjP&t=104&autoplay=0"
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ overflow: 'hidden' }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              三大核心模块
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              融合最新科技与艺术创作，打造全方位数字艺术体验
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/60 border-slate-700/60 hover:border-slate-600 transition-all duration-300 group overflow-hidden relative"
              >
                {/* Top gradient border */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.topBorder}`} />
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.iconBg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={feature.link}>
                    <Button variant="ghost" className={`${feature.linkColor} p-0 h-auto font-medium text-sm`}>
                      了解详情 <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 两大课程体系 */}
      <section className="py-16 bg-slate-800/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <ImageCarousel images={courseSystemImages} className="max-w-4xl mx-auto" />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              两大课程体系
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              专业的数字艺术教育体系，培养未来创意人才
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`bg-slate-800/60 border-slate-700/60 border-l-4 ${course.color} hover:border-l-4 transition-all duration-300`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full border ${course.badge}`}>
                      {course.duration}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded-full border ${course.badge}`}>
                      {course.level}
                    </span>
                  </div>
                  <Link to="/courses">
                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0 h-auto text-sm font-medium">
                      了解详情 <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              获奖成果
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-4" />
            <p className="text-gray-400">在数字艺术和科技创新领域获得的广泛认可</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${item.color} border ${item.border} hover:scale-[1.02] transition-transform duration-200`}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <p className="text-white text-sm font-medium leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-slate-800/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              合作机构
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-4" />
            <p className="text-gray-400">与知名院校和机构建立战略合作关系</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 transition-all duration-200 group"
              >
                <div className={`w-10 h-10 rounded-lg ${loc.bg} flex items-center justify-center flex-shrink-0 ${loc.color} group-hover:scale-110 transition-transform duration-200`}>
                  {loc.icon}
                </div>
                <p className="text-gray-300 text-sm font-medium leading-snug">{loc.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-purple-600/15 to-pink-500/15" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur -z-10" />
            <div className="relative p-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-4">
                <Zap className="w-3 h-3" />
                立即开始
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                开启您的数字艺术之旅
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                加入明日剧场，探索 AIGC 与元宇宙的无限可能
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                  onClick={() => window.open('https://auqliwvr.manus.space/', '_blank')}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  立即体验
                </Button>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 px-8 transition-all duration-300"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    联系咨询
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
