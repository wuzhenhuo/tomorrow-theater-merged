import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Sparkles, 
  Users, 
  Globe, 
  Zap, 
  Award, 
  ArrowRight,
  Play,
  BookOpen,
  Palette,
  Brain,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// 导入轮播图片
import dancer1 from '../assets/images/dancer1.jpg';
import dancer2 from '../assets/images/dancer2.JPG';
import dancer4 from '../assets/images/dancer4.JPG';
import dancer8 from '../assets/images/dancer8.JPG';
import dancer5 from '../assets/images/dancer5.JPG';
import dancer7 from '../assets/images/dancer7.jpg';

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
    // 随机选择初始图片
    setCurrentIndex(Math.floor(Math.random() * images.length));
  }, [images.length]);

  return (
    <div className={`relative group ${className}`}>
      <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/7' }}>
        <img
          src={images[currentIndex]}
          alt={`轮播图片 ${currentIndex + 1}`}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={nextImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      {/* 导航按钮 */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
      
      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  // 三大核心模块轮播图片
  const coreModuleImages = [dancer1, dancer2, dancer4, dancer8];
  
  // 两大课程体系轮播图片
  const courseSystemImages = [dancer5, dancer7];

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "数智虚拟展演平台",
      description: "国内首个元宇宙虚拟剧场，融合视讯通讯与动作捕捉技术",
      link: "/platform"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-400" />,
      title: "线上专业版操作手册",
      description: "详细的平台使用指南，支持多种动作捕捉设备",
      link: "/manual"
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      title: "数字艺术设计课程",
      description: "AIGC+元宇宙，戏剧、舞蹈、绘画、设计全方位课程",
      link: "/courses"
    }
  ];

  const achievements = [
    "2025AI元宇宙1000优秀产品目录与示范案例（四星级）",
    "2025中国元宇宙星级供应商（四星级）",
    "2024AI元宇宙1000优秀产品目录与示范案例（三星级）",
    "2025廣州科技創新創業大賽港澳台賽優勝獎",
    "2024中国教育学会课题立项",
    "2023中國國際大學生雙創賽銀獎",
    "2023理創大賽銀獎（索尼/理光）",
    "2023入選Unity黑馬計劃",
    "2022TCDIG全球數字科技創意設計大賽銀獎"
  ];

  const locations = [
    "澳门青年创业孵化中心",
    "聚能湾国家级科技企业孵化中心（上海）",
    "北京师范大学未来设计美术馆（珠海）",
    "澳门科技大学人文艺术学院",
    "香港科技大学霍英东研究院",
    "中关村AI北纬社区"
  ];

  const courses = [
    {
      title: "AIGC数字艺术创作",
      description: "结合人工智能技术的数字艺术创作课程",
      duration: "12周",
      level: "初级-高级"
    },
    {
      title: "元宇宙虚拟展演",
      description: "虚拟现实技术在艺术展演中的应用",
      duration: "16周",
      level: "中级-高级"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                明日剧场
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AIGC+元宇宙，戏剧、舞蹈、绘画、设计<br />
              国内首个将元宇宙虚拟剧场概念具象化的沉浸式艺术展演空间
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => window.open('https://auqliwvr.manus.space/', '_blank')}
              >
                <Play className="w-5 h-5 mr-2" />
                体验平台
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3"
                onClick={() => window.open('https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/android/TOT_v1.3.0.apk', '_blank')}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                下载移动版（安卓系统）
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 三大核心模块轮播图片 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <ImageCarousel 
              images={coreModuleImages} 
              className="max-w-4xl mx-auto"
            />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              三大核心模块
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              融合最新科技与艺术创作，打造全方位数字艺术体验
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={feature.link}>
                    <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0">
                      了解详情 <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 两大课程体系轮播图片 */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <ImageCarousel 
              images={courseSystemImages} 
              className="max-w-4xl mx-auto"
            />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              两大课程体系
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              专业的数字艺术教育体系，培养未来创意人才
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>课程时长: {course.duration}</span>
                    <span>难度: {course.level}</span>
                  </div>
                  <Link to="/courses" className="mt-4 inline-block">
                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                      了解详情 <ArrowRight className="w-4 h-4 ml-2" />
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              获奖成果
            </h2>
            <p className="text-xl text-gray-300">
              在数字艺术和科技创新领域获得的认可
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600 text-center">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <p className="text-white font-medium">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              合作机构
            </h2>
            <p className="text-xl text-gray-300">
              与知名院校和机构建立战略合作关系
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <p className="text-white font-medium">{location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              开启您的数字艺术之旅
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              加入明日剧场，探索AIGC与元宇宙的无限可能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => window.open('https://auqliwvr.manus.space/', '_blank')}
              >
                <Zap className="w-5 h-5 mr-2" />
                立即体验
              </Button>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  联系咨询
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

