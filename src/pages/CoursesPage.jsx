import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Palette, 
  Brain,
  Clock,
  Target,
  Star,
  ArrowRight,
  Play,
  Sparkles,
  Globe,
  Zap,
  Camera,
  Music,
  Gamepad2,
  GraduationCap
} from 'lucide-react';

const CoursesPage = () => {
  const courses = [
    {
      title: "元宇宙數字表演課程",
      subtitle: "戏剧、舞蹈 - 面向专业学习者",
      description: "16周专业课程，融合传统戏剧表演与数字虚拟表演技术",
      duration: "16周",
      hours: "48学时",
      target: "戲劇表演專業學生、表演藝術愛好者、多媒體藝術創作者",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      color: "from-cyan-500 to-blue-600",
      link: "https://aohfekcw.manus.space/",
      modules: [
        "數字戲劇表演基礎",
        "數字角色表演技巧", 
        "跨時空協作創作",
        "數字戲劇作品創作"
      ]
    },
    {
      title: "明日剧场·数字艺术设计课程",
      subtitle: "中小学 - AIGC+元宇宙",
      description: "未来创艺工坊：AIGC × 元宇宙的数字艺术之旅",
      duration: "5阶段",
      hours: "灵活安排",
      target: "中小学生",
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500 to-pink-600",
      modules: [
        "认识数字艺术与元宇宙",
        "数字戏剧与AI角色创作",
        "AI编舞与虚拟舞蹈体验", 
        "AI绘画与数字设计",
        "元宇宙展演与互动"
      ]
    }
  ];

  const professionalModules = [
    {
      title: "模塊一：數字戲劇表演基礎",
      weeks: "第1-4周",
      topics: [
        "元宇宙與數字表演導論",
        "虛擬形象與表演身體",
        "動作捕捉基礎",
        "虛擬表演空間"
      ],
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "模塊二：數字角色表演技巧",
      weeks: "第5-8周", 
      topics: [
        "虛擬角色肢體表達",
        "虛擬角色情感表達",
        "虛擬角色交互表演",
        "中期呈現與評估"
      ],
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: "模塊三：跨時空協作創作",
      weeks: "第9-12周",
      topics: [
        "異地協同表演基礎",
        "數字劇場多媒體元素",
        "文化傳承與創新",
        "AI與數字表演"
      ],
      icon: <Globe className="w-6 h-6 text-green-400" />
    },
    {
      title: "模塊四：數字戲劇作品創作",
      weeks: "第13-16周",
      topics: [
        "數字戲劇創作構思",
        "數字戲劇排練（一）",
        "數字戲劇排練（二）",
        "數字戲劇作品展演"
      ],
      icon: <Star className="w-6 h-6 text-yellow-400" />
    }
  ];

  const k12Stages = [
    {
      stage: "第一阶段",
      title: "认识数字艺术与元宇宙",
      method: "讲解+体验：进入明日剧场虚拟空间，了解AIGC与数字展演",
      tech: "明日剧场平台，AI绘图工具",
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />
    },
    {
      stage: "第二阶段", 
      title: "数字戏剧与AI角色创作",
      method: "使用AI生成角色、场景、对话，创作短剧本并进行虚拟排练",
      tech: "ChatGPT对话、AI图像生成、数字舞台搭建",
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      stage: "第三阶段",
      title: "AI编舞与虚拟舞蹈体验", 
      method: "学习虚拟身体控制，使用AI生成舞蹈动作，自主设计数字舞台舞蹈",
      tech: "AI舞蹈生成、虚拟人动作捕捉（简易版）",
      icon: <Music className="w-6 h-6 text-pink-400" />
    },
    {
      stage: "第四阶段",
      title: "AI绘画与数字设计",
      method: "通过AIGC工具设计海报、人物、服饰、舞台场景，完成数字画展",
      tech: "AI绘图工具、3D场景搭建",
      icon: <Palette className="w-6 h-6 text-green-400" />
    },
    {
      stage: "第五阶段",
      title: "元宇宙展演与互动",
      method: "组织未来艺术节，学生在明日剧场元宇宙空间发布展览和表演，开展线上互动",
      tech: "明日剧场虚拟空间、多媒体互动",
      icon: <Globe className="w-6 h-6 text-yellow-400" />
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "沈浸式學習體驗",
      description: "利用明日劇場平台多場景特性，讓學生在不同風格的虛擬劇場中學習表演"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "技術與藝術融合",
      description: "結合傳統表演理論與數字技術應用，培養學生同時具備藝術表現力和技術操作能力"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "跨地域協作教學",
      description: "邀請不同地區的表演藝術家通過平台進行遠程授課，組織跨地域合作表演項目"
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: "多元評價體系",
      description: "過程性評價與作品評價相結合，包括課堂參與度、階段性練習、期末作品展演"
    }
  ];

  const outcomes = [
    "数字戏剧 - 虚拟戏剧表演作品",
    "数字舞蹈 - AI编舞与虚拟舞蹈视频", 
    "AIGC绘画+设计 - AI绘画与创意设计作品集",
    "元宇宙策展 - 明日剧场线上艺术展览",
    "小组合作与线上交流成果"
  ];

  const highlights = [
    {
      title: "人人都能创造",
      description: "借助AI降低技术门槛，帮助所有学生轻松创作高质量作品",
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "跨空间互动", 
      description: "支持不同学校、不同地区的学生在元宇宙空间合作、展示与交流",
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      title: "融合传统文化",
      description: "鼓励学生用数字艺术重新演绎中华优秀传统故事，激发文化自信",
      icon: <Star className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                课程体系
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-300">
                AIGC+元宇宙数字艺术教育
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              融合现代科技与艺术表演，构建全方位数字艺术教育生态
              <br />
              <span className="text-lg text-gray-400">
                戏剧、舞蹈、绘画、设计四大方向，满足不同学习需求
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              两大课程体系
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              面向不同学习群体，提供专业化和普及化的数字艺术教育方案
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${course.color} rounded-lg group-hover:scale-110 transition-transform`}>
                      {course.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                      <CardDescription className="text-gray-400">{course.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">{course.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-white font-medium text-sm">{course.duration}</div>
                      <div className="text-gray-400 text-xs">课程时长</div>
                    </div>
                    <div className="text-center">
                      <BookOpen className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <div className="text-white font-medium text-sm">{course.hours}</div>
                      <div className="text-gray-400 text-xs">学时安排</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-white font-medium text-sm">适用对象</div>
                      <div className="text-gray-400 text-xs">{course.target}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-medium text-sm">课程模块：</h4>
                    {course.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{module}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white cursor-pointer`}
                    onClick={() => course.link && window.open(course.link, '_blank')}
                  >
                    了解详情
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Course Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              元宇宙數字表演課程详情
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              16周专业课程，四大模块循序渐进，培养数字时代表演艺术人才
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalModules.map((module, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {module.icon}
                    <div>
                      <CardTitle className="text-white text-lg">{module.title}</CardTitle>
                      <CardDescription className="text-gray-400">{module.weeks}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* K12 Course Details */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              数字艺术设计课程详情
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              五个阶段递进式学习，让中小学生轻松掌握数字艺术创作技能
            </p>
          </div>

          <div className="space-y-6">
            {k12Stages.map((stage, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-3">
                      {stage.icon}
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400 mb-2">
                        {stage.stage}
                      </Badge>
                      <h3 className="text-white font-semibold">{stage.title}</h3>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-gray-300 font-medium text-sm mb-1">教学方式：</h4>
                    <p className="text-gray-400 text-sm">{stage.method}</p>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium text-sm mb-1">技术支持：</h4>
                    <p className="text-gray-400 text-sm">{stage.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              教学方法与特色
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              创新教学模式，融合技术与艺术，培养面向未来的创新人才
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition-colors">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Outcomes */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                课程成果
              </h2>
              <p className="text-gray-400 mb-8">
                学生将通过课程学习，创作出多样化的数字艺术作品，展示在明日剧场平台上
              </p>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                课程亮点
              </h2>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-start space-x-3">
                      {highlight.icon}
                      <div>
                        <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-gray-400 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            开启数字艺术学习之旅
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            选择适合您的课程，在明日剧场平台上探索数字艺术的无限可能
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3">
              <GraduationCap className="w-5 h-5 mr-2" />
              报名专业课程
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3">
              <Palette className="w-5 h-5 mr-2" />
              体验K12课程
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;

