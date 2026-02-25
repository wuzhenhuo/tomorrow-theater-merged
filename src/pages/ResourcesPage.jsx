import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Smartphone, 
  Monitor, 
  Camera, 
  Gamepad2,
  Settings,
  Eye,
  Upload,
  Play,
  Users,
  Zap,
  HelpCircle,
  X,
  ZoomIn,
  BookOpen,
  Code,
  ExternalLink,
  Palette,
  Video,
  Image,
  Sparkles,
  Globe,
  Wrench
} from 'lucide-react';

// 导入图片
import tot001 from '../assets/images/TOT001.png';
import jiemian1 from '../assets/images/JIEMIAN1.png';
import tot003 from '../assets/images/TOT003.png';
import tot006 from '../assets/images/TOT006.png';
import tot007 from '../assets/images/TOT007.png';
import tot010 from '../assets/images/TOT010.png';
import tot017 from '../assets/images/TOT017.png';
import tot020 from '../assets/images/TOT020.png';

// 图片放大组件
const ImageModal = ({ src, alt, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center p-4" 
      onClick={onClose}
      style={{ zIndex: 9999 }}
    >
      <div className="relative max-w-6xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

// 可点击放大的图片组件
const ClickableImage = ({ src, alt, className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`relative group cursor-pointer ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all duration-300"
          onClick={() => setIsModalOpen(true)}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          点击放大
        </div>
      </div>
      <ImageModal
        src={src}
        alt={alt}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('manual');

  // 操作手册数据
  const characters = [
    {
      name: "电视机人",
      description: "可与摄像头互动，支持自定义颜色",
      features: ["摄像头互动", "自定义颜色", "实时面部捕捉"]
    },
    {
      name: "宇航员",
      description: "男、女角色可选",
      features: ["科幻风格", "性别选择", "太空主题"]
    },
    {
      name: "卡通小狼人",
      description: "可爱卡通风格角色",
      features: ["卡通风格", "动物形象", "趣味互动"]
    }
  ];

  const devices = [
    { name: "Sony Mocopi", status: "推荐", description: "便携式动作捕捉设备，适合家庭使用" },
    { name: "Azure Kinect", status: "推荐", description: "高精度动作捕捉，专业级体验" },
    { name: "诺亦腾惯性动捕", status: "专业", description: "专业级惯性动作捕捉系统" },
    { name: "青瞳光学动捕系统", status: "专业", description: "高精度光学动作捕捉系统" }
  ];

  const areas = [
    { name: "艺术馆区域", icon: <Upload className="w-6 h-6" />, description: "展示数字装置与概念设计图，可上传图片进行互动展示", features: ["虚拟美术馆", "图片上传", "互动展示"], image: tot007 },
    { name: "国际剧场区域", icon: <Play className="w-6 h-6" />, description: "五座风格各异的虚拟剧场，专为线上展演活动设置", features: ["多风格剧场", "咖啡吧社交", "影片上传"], image: tot010 },
    { name: "实验剧场", icon: <Camera className="w-6 h-6" />, description: "两角落设操控台，支持动作捕捉接口连接", features: ["操控台", "动捕接口", "实时画面"], image: tot017 },
    { name: "莎士比亚环形剧院", icon: <Users className="w-6 h-6" />, description: "舞台地仓与看台，可前往音乐时尚秀舞台和国风剧场", features: ["环形设计", "多层结构", "传送门"], image: tot020 }
  ];

  const steps = [
    { title: "软件下载与安装", description: "下载主程序安装档案和动捕设备接口模组", icon: <Download className="w-5 h-5" />, image: tot001 },
    { title: "登录设定", description: "输入姓名、选择场景、填写房间号、选择角色", icon: <Settings className="w-5 h-5" />, image: jiemian1 },
    { title: "操作界面", description: "学习快捷键操作和设置选单功能", icon: <Gamepad2 className="w-5 h-5" />, image: tot003 },
    { title: "视角与场景互动", description: "切换视角、使用地图导航、探索各个区域", icon: <Eye className="w-5 h-5" />, image: tot006 }
  ];

  // 学习资源数据
  const books = [
    { id: 1, title: "数字艺术", author: "克里斯蒂安·保罗", publisher: "机械工业出版社2021年第3版", description: "全面介绍数字艺术的发展历程、技术基础和创作实践" },
    { id: 2, title: "虚拟艺术", author: "奥利弗·格劳", publisher: "清华大学出版社2007年版", description: "探讨虚拟现实技术在艺术创作中的应用和影响" },
    { id: 3, title: "文化、技术与社会中的身体", author: "克里斯·希林", publisher: "北京大学出版社2011年版", description: "分析身体在数字化社会中的角色和意义" },
    { id: 4, title: "元宇宙与数字世界的未来", author: "周晓鹏", publisher: "社会科学文献出版社2023年版", description: "深入解析元宇宙概念及其对未来社会的影响" },
    { id: 5, title: "空间叙事学", author: "龙迪勇", publisher: "生活·读书·新知三联书店2015版", description: "研究空间叙事的理论框架和实践方法" },
    { id: 6, title: "台湾数位表演与科技剧场", author: "邱志勇", publisher: "2023年", description: "台湾数字表演和科技剧场的发展历史与创作实践" }
  ];

  const techTools = [
    { name: "TouchDesigner (TD)", description: "实时交互多媒体内容的视觉编程环境", icon: <Code className="w-6 h-6" />, color: "from-blue-500 to-cyan-500", category: "创作工具" },
    { name: "Theater for Tomorrow (ToT)", description: "集成现代技术的剧院平台", icon: <Globe className="w-6 h-6" />, color: "from-purple-500 to-pink-500", category: "表演平台" },
    { name: "Unity3D (U3D)", description: "创建交互式3D和VR体验的游戏引擎", icon: <Wrench className="w-6 h-6" />, color: "from-indigo-500 to-purple-500", category: "开发引擎" }
  ];

  const aigcTools = [
    { name: "明日剧场数智展演平台", description: "综合性数智展演平台", url: "https://auqliwvr.manus.space/", icon: <Globe className="w-6 h-6" />, color: "from-purple-500 to-indigo-500" },
    { name: "AI产品设计师", description: "AI驱动产品设计工具", url: "https://v0-image-upload-app-lime-wuzhednhuo-1982.vercel.app/", icon: <Palette className="w-6 h-6" />, color: "from-cyan-500 to-blue-500" },
    { name: "AI视频设计师", description: "AI视频生成和编辑工具", url: "https://v0-modern-movie-generator-ui.vercel.app/", icon: <Video className="w-6 h-6" />, color: "from-pink-500 to-rose-500" },
    { name: "AI图像设计1", description: "基于Flux技术的图像生成", url: "https://flux-fal-openai-appgit-xcdjrcva2qcycdx42scnda.streamlit.app/", icon: <Image className="w-6 h-6" />, color: "from-emerald-500 to-teal-500" },
    { name: "AI图像设计2", description: "专业AI图像创作平台", url: "https://app-flux-wuzhenhuo-2024-1982-1987.streamlit.app/", icon: <Sparkles className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                资源中心
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-300">
                操作手册 · 学习资源 · AIGC工具
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              丰富的学习资源和专业工具，助力您的数字艺术创作之旅
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setActiveTab('manual')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'manual'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <Settings className="w-5 h-5 mr-2" />
              操作手册
            </Button>
            <Button
              onClick={() => setActiveTab('learning')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'learning'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              学习资源
            </Button>
            <Button
              onClick={() => setActiveTab('aigc')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'aigc'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              AIGC工具
            </Button>
          </div>
        </div>
      </section>

      {/* Manual Tab */}
      {activeTab === 'manual' && (
        <>
          {/* Character Selection */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  角色选择与设备支持
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  「明日剧场」提供多款虚拟角色供选择，支持电脑端与手机移动端操作
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {characters.map((character, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white text-center">{character.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-center">{character.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {character.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">支持的动作捕捉设备</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {devices.map((device, index) => (
                  <div key={index} className="bg-slate-900/30 rounded-lg p-6 border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-semibold">{device.name}</h4>
                      <Badge variant={device.status === "推荐" ? "default" : "secondary"} className="text-xs">
                        {device.status}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm">{device.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Operation Steps */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  操作步骤与使用指南
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  四个简单步骤，快速上手明日剧场平台
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                          {step.icon}
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                          <CardDescription className="text-gray-400">{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ClickableImage src={step.image} alt={step.title} className="mb-4" />
                      <p className="text-gray-300 text-sm">点击图片可放大查看详细内容</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Virtual Areas */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  虚拟空间导览
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  探索明日剧场的四大核心区域，每个区域都有独特的功能和体验
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {areas.map((area, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                          {area.icon}
                        </div>
                        <CardTitle className="text-white text-xl">{area.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-400">{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ClickableImage src={area.image} alt={area.name} className="mb-4" />
                      <div className="space-y-2">
                        {area.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Learning Tab */}
      {activeTab === 'learning' && (
        <>
          {/* Reference Books */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  参考书目
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  精选的理论著作，为您的学习提供坚实的理论基础
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                  <Card key={book.id} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-3">
                        <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <Badge className="mb-2 text-xs">[{book.id}]</Badge>
                          <CardTitle className="text-white text-lg">{book.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-gray-400 text-sm">
                        <p><span className="font-semibold">作者：</span>{book.author}</p>
                        <p><span className="font-semibold">出版：</span>{book.publisher}</p>
                        <p className="mt-3">{book.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Tools */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  技术工具
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  专业的创作工具和平台，支持您的数字表演创作实践
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {techTools.map((tool, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${tool.color} mb-6 text-white`}>
                        {tool.icon}
                      </div>
                      <Badge className="mb-2">{tool.category}</Badge>
                      <h3 className="text-xl font-bold text-white mb-4">{tool.name}</h3>
                      <p className="text-gray-400">{tool.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* AIGC Tab */}
      {activeTab === 'aigc' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AIGC 设计工具
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                由 <a 
                  href="https://auqliwvr.manus.space/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  Theater of Tomorrow
                </a> 开发的AI驱动设计工具集
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aigcTools.map((tool, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${tool.color} flex-shrink-0`}>
                        {tool.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg group-hover:text-cyan-400 transition-colors">
                          {tool.name}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                      onClick={() => window.open(tool.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      访问工具
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Download Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              立即下载体验
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              开始您的虚拟表演之旅，探索数字艺术的无限可能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => window.open('https://auqliwvr.manus.space/', '_blank')}
              >
                <Monitor className="w-5 h-5 mr-2" />
                电脑版体验
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3"
                onClick={() => window.open('https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/android/TOT_v1.3.0.apk', '_blank')}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                下载移动版（安卓系统）
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
