import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  BookOpen, 
  ExternalLink, 
  MapPin,
  Calendar,
  Users,
  Trophy,
  Star,
  FileText,
  Globe,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react';

const ResearchPage = () => {
  const papers = [
    {
      title: "Theatre of Tomorrow - A Virtual Exhibition and Performing Arts Platform Created by Digital Game Technology",
      author: "Wu, Z. (2023)",
      publisher: "Singapore, Springer Nature Singapore",
      type: "国际会议论文",
      link: "https://doi.org/10.1007/978-981-99-8248-6_41",
      description: "探讨数字游戏技术在虚拟展览和表演艺术平台中的应用，提出了明日剧场的技术架构和创新理念。",
      keywords: ["虚拟现实", "数字表演", "游戏技术", "元宇宙"]
    },
    {
      title: "人工智能赋能交互电影数字角色的创作实践研究",
      author: "吴振",
      publisher: "现代电影技术，No.5/2025，46-52",
      type: "期刊论文",
      link: "https://kns.cnki.net/kcms2/article/abstract?v=h5hbu4VP4UTPji-zdsXjMQEIEZNm-VxBeX7GYWbJCbkzF0NZS8DhGITHIbNUq9Wn0oEhOoijvcYm7OtI7ROEKXcuYL-XtLT_6CeAkqZdGfNJYFM4Ro-JXME2hWc5vkbvkqPKsVuvvh5huiDrAWswv-r2uXMn2O1cUTJZFChUtXE=&uniplatform=NZKPT",
      description: "研究人工智能技术在交互电影数字角色创作中的应用，探索AI驱动的数字人在影视制作中的实践价值。",
      keywords: ["人工智能", "数字角色", "交互电影", "AIGC"]
    },
    {
      title: "A Study of The Role of Immersive Intelligent Virtual Environments and Digital Avatars in Enhancing Students' Sense of Belonging",
      author: "2024 International Symposium on Ecological Design Engineering, Artificial Intelligence, and Sustainable Development",
      publisher: "2024ISEDEAISD (Ei Compendex)",
      type: "国际会议论文",
      description: "研究沉浸式智能虚拟环境和数字化身在增强学生归属感方面的作用，为数字教育提供理论支撑。",
      keywords: ["虚拟环境", "数字化身", "教育技术", "归属感"]
    }
  ];

  const awards = [
    {
      title: "AI元宇宙1000优秀产品目录与示范案例",
      year: "2025",
      organization: "AI元宇宙1000评选委员会",
      description: "获得四星级认证，入选优秀产品目录与示范案例",
      level: "国家级",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "中国元宇宙星级供应商",
      year: "2025",
      organization: "中国元宇宙产业联盟",
      description: "获得四星级供应商认证",
      level: "国家级",
      icon: <Star className="w-6 h-6 text-purple-400" />
    },
    {
      title: "AI元宇宙1000优秀产品目录与示范案例",
      year: "2024",
      organization: "AI元宇宙1000评选委员会",
      description: "获得三星级认证，入选优秀产品目录与示范案例",
      level: "国家级",
      icon: <Award className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "中国元宇宙星级供应商",
      year: "2024",
      organization: "中国元宇宙产业联盟",
      description: "获得三星级供应商认证",
      level: "国家级",
      icon: <Trophy className="w-6 h-6 text-green-400" />
    },
    {
      title: "廣州科技創新創業大賽港澳台賽優勝獎",
      year: "2025",
      organization: "香港科技大學百萬獎金創業大賽",
      description: "在广州赛中获得优胜奖",
      level: "区域级",
      icon: <Award className="w-6 h-6 text-blue-400" />
    },
    {
      title: "中国教育学会课题立项",
      year: "2024",
      organization: "中国教育学会",
      description: "《沉浸交互式技术支持下的艺术融合教学模式的构建》课题",
      level: "国家级",
      icon: <Star className="w-6 h-6 text-orange-400" />
    },
    {
      title: "深圳前海粤港澳台青年创新创业大赛推送獎",
      year: "2024",
      organization: "深圳前海粤港澳台青年创新创业大赛组委会",
      description: "获得推送奖",
      level: "区域级",
      icon: <Award className="w-6 h-6 text-pink-400" />
    },
    {
      title: "澳門科技周参展",
      year: "2024",
      organization: "澳門科技周组委会",
      description: "项目参展展示",
      level: "区域级",
      icon: <Trophy className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "上海進博會参展",
      year: "2024",
      organization: "中国国际进口博览会",
      description: "项目参展展示",
      level: "国家级",
      icon: <Star className="w-6 h-6 text-red-400" />
    },
    {
      title: "江門科創大賽入围",
      year: "2024",
      organization: "江門科創大賽组委会",
      description: "入围江門科創大賽",
      level: "区域级",
      icon: <Award className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "中國國際大學生雙創賽銀獎",
      year: "2023",
      organization: "中国国际大学生创新创业大赛组委会",
      description: "获得银奖",
      level: "国家级",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "理創大賽銀獎",
      year: "2023",
      organization: "理创大赛组委会（索尼/理光）",
      description: "获得银奖",
      level: "行业级",
      icon: <Star className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Unity黑馬計劃入选",
      year: "2023",
      organization: "Unity Technologies",
      description: "项目被Unity官方认可，入选黑马计划",
      level: "行业级",
      icon: <Award className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "TCDIG全球數字科技創意設計大賽銀獎",
      year: "2022",
      organization: "TCDIG全球数字科技创意设计大赛组委会",
      description: "获得银奖",
      level: "国际级",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />
    }
  ];

  const applications = [
    {
      location: "澳门青年创业孵化中心",
      region: "澳门",
      status: "运营中",
      description: "作为项目发源地，为澳门青年创业者提供数字艺术创作平台",
      features: ["创业孵化", "艺术创作", "技术培训"],
      icon: <MapPin className="w-6 h-6 text-cyan-400" />
    },
    {
      location: "聚能湾国家级科技企业孵化中心",
      region: "上海",
      status: "运营中", 
      description: "在上海设立技术研发中心，推动平台技术升级和产业化应用",
      features: ["技术研发", "产业孵化", "人才培养"],
      icon: <Lightbulb className="w-6 h-6 text-purple-400" />
    },
    {
      location: "北京师范大学未来设计美术馆",
      region: "珠海",
      status: "合作中",
      description: "与高等院校合作，开展数字艺术教育和学术研究",
      features: ["学术研究", "教育实践", "展览展示"],
      icon: <BookOpen className="w-6 h-6 text-green-400" />
    },
    {
      location: "798深澜AI中心",
      region: "北京",
      status: "合作中",
      description: "在北京艺术区设立展示中心，推广数字艺术创作理念",
      features: ["艺术展示", "技术交流", "文化推广"],
      icon: <Globe className="w-6 h-6 text-yellow-400" />
    },
    {
      location: "香港科技大学霍英东研究院",
      region: "广州",
      status: "合作中",
      description: "与香港科技大学合作，推动科技创新与人才培养",
      features: ["科研合作", "技术转化", "人才交流"],
      icon: <BookOpen className="w-6 h-6 text-blue-400" />
    },
    {
      location: "中关村AI北纬社区",
      region: "北京",
      status: "合作中",
      description: "在中关村AI核心区域设立合作基地，推动人工智能技术应用",
      features: ["AI技术", "产业对接", "创新孵化"],
      icon: <Lightbulb className="w-6 h-6 text-orange-400" />
    }
  ];

  const impacts = [
    {
      title: "技术创新",
      value: "8+",
      description: "核心技术模块",
      details: "人文艺术、互动体验、网络技术、图形学、动作捕捉、人工智能、数字资产、虚拟现实"
    },
    {
      title: "教育应用",
      value: "100+",
      description: "受益学生数量",
      details: "通过课程体系和平台应用，已有超过100名学生受益于数字艺术教育"
    },
    {
      title: "文化传承",
      value: "5+",
      description: "非遗文化项目",
      details: "已收录热巴舞等多项非物质文化遗产，推动传统文化数字化传承"
    },
    {
      title: "国际影响",
      value: "3+",
      description: "国际合作项目",
      details: "与多个国际机构建立合作关系，推广中国数字艺术创新成果"
    }
  ];

  const futureDirections = [
    {
      title: "技术升级",
      description: "持续优化动作捕捉精度，增强AI数字人表现力，提升虚拟现实体验质量",
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "教育拓展", 
      description: "扩大课程覆盖范围，开发更多适合不同年龄段的数字艺术教育内容",
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      title: "文化传承",
      description: "收录更多中华优秀传统文化内容，推动文化创新性发展",
      icon: <Star className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "国际推广",
      description: "加强国际交流合作，将中国数字艺术创新成果推向世界舞台",
      icon: <Globe className="w-6 h-6 text-green-400" />
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
                学术成果
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-300">
                研究论文 · 获奖荣誉 · 落地应用
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              明日剧场项目在学术研究、技术创新和产业应用方面取得了丰硕成果
              <br />
              <span className="text-lg text-gray-400">
                推动数字艺术教育发展，促进传统文化创新传承
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              研究论文
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              在国际会议和权威期刊发表多篇学术论文，推动数字艺术领域理论发展
            </p>
          </div>

          <div className="space-y-8">
            {papers.map((paper, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400">
                          {paper.type}
                        </Badge>
                        <FileText className="w-4 h-4 text-gray-400" />
                      </div>
                      <CardTitle className="text-white text-lg mb-2">{paper.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        <div className="mb-1">{paper.author}</div>
                        <div className="text-sm">{paper.publisher}</div>
                      </CardDescription>
                    </div>
                    {paper.link && (
                      <a 
                        href={paper.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        查看论文
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{paper.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              获奖荣誉
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              凭借技术创新和艺术表现力，获得多项重要奖项和行业认可
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-800 rounded-lg p-3">
                      {award.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs border-yellow-500/50 text-yellow-400">
                          {award.level}
                        </Badge>
                        <span className="text-gray-400 text-sm">{award.year}</span>
                      </div>
                      <CardTitle className="text-white text-lg">{award.title}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm">
                        {award.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              落地应用
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              在多个重要机构和城市成功落地，推动数字艺术教育和文化创新发展
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-800 rounded-lg p-3">
                      {app.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs border-green-500/50 text-green-400">
                          {app.status}
                        </Badge>
                        <span className="text-gray-400 text-sm">{app.region}</span>
                      </div>
                      <CardTitle className="text-white text-lg">{app.location}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              项目影响力
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              通过数据展示明日剧场项目在技术创新、教育应用和文化传承方面的成果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{impact.value}</div>
                  <div className="text-white font-semibold mb-2">{impact.description}</div>
                  <div className="text-gray-400 text-sm mb-4">{impact.title}</div>
                  <p className="text-gray-500 text-xs">{impact.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Directions */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              未来发展方向
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              持续创新发展，推动数字艺术教育和文化传承事业向更高水平迈进
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureDirections.map((direction, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg p-3">
                    {direction.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{direction.title}</h3>
                    <p className="text-gray-400 text-sm">{direction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Collaboration */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            学术合作与交流
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            欢迎学术机构、研究人员和教育工作者与我们开展合作交流
          </p>
          <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">学术交流</h4>
                <p className="text-gray-400 text-sm">参与学术会议、研讨会和论文发表</p>
              </div>
              <div>
                <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">教育合作</h4>
                <p className="text-gray-400 text-sm">共同开发课程、培训师资和学生交流</p>
              </div>
              <div>
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">技术创新</h4>
                <p className="text-gray-400 text-sm">联合研发新技术、申请专利和成果转化</p>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3">
                联系我们开展合作
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;

