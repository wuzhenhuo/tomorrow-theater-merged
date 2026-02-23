import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Users, 
  Zap, 
  Database, 
  Camera, 
  Brain,
  Award,
  MapPin,
  ExternalLink
} from 'lucide-react';

const PlatformPage = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "超越时空限制",
      description: "打破地理与时间的藩籬，艺术家可透过虚拟化身，在雲端合作创作并以数字资产形式永久保存。观众亦可透过VR、电脑或平板等设备「走进」剧场，实现远距观演与互动。"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "多元社交与互动空间",
      description: "平台不仅是虚拟剧场，亦是虚拟博物馆与公共社交天地。用户可自定义虚拟形象，参与艺术作品展示、互动交流、表演与创作教学。"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "异地教育与实践",
      description: "学生与表演爱好者可通过交互设备与虚拟老师进行即时学习与实作，并进入逼真的虚拟舞台环境，如英国莎士比亚环形剧场、赛博朋克风格空间、黑匣子实验剧场、水上剧场或园林戏台。"
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "数字资产与保存",
      description: "创作者的虚拟内容可永久存储为可持续加工的数字资产，观众则能获得深度沉浸式体验，这也将激励更多中国艺术家进行创造性转化与创新性发展。"
    },
    {
      icon: <Camera className="w-8 h-8 text-pink-400" />,
      title: "文化传承与数位展演",
      description: "平台兼具虚拟剧场与数位博物馆功能。已成功将非遗文化热巴舞的传承者索朗亚次的舞蹈数据收录其中，未来也将陆续加入更多非物质文化展演内容。"
    }
  ];

  const modules = [
    {
      title: "数位美术馆",
      description: "观众可以上传自己的绘画、装置作品，举办数字个展"
    },
    {
      title: "数位剧场",
      description: "提供多种风格舞台，如黑匣子实验剧场、鏡框式舞台、古典戏台等"
    },
    {
      title: "视讯会议系统",
      description: "支援远距团队协作与即时研讨"
    },
    {
      title: "动作数据库",
      description: "收录表演动作资料供分析与应用"
    },
    {
      title: "运动捕捉模块",
      description: "兼容各型光学、红外与慣性动捕系统，实现高度还原的角色演绎"
    },
    {
      title: "人工智慧模组",
      description: "结合AIGC驱动的数字人，担任讲解员，教师，演员，推动智能演艺发展"
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
    "澳门青年创业孵化中心（澳门）",
    "聚能湾国家级科技企业孵化中心（上海）",
    "北京师范大学未来设计美术馆（珠海）",
    "798深澜AI中心（北京）",
    "香港科技大学霍英东研究院（广州）",
    "中关村AI北纬社区（北京）"
  ];

  const papers = [
    {
      title: "Theatre of Tomorrow - A Virtual Exhibition and Performing Arts Platform Created by Digital Game Technology",
      author: "Wu, Z. (2023)",
      publisher: "Singapore, Springer Nature Singapore",
      link: "https://doi.org/10.1007/978-981-99-8248-6_41"
    },
    {
      title: "人工智能赋能交互电影数字角色的创作实践研究",
      author: "吴振",
      publisher: "现代电影技术，No.5/2025，46-52",
      link: "https://kns.cnki.net/kcms2/article/abstract?v=h5hbu4VP4UTPji-zdsXjMQEIEZNm-VxBeX7GYWbJCbkzF0NZS8DhGITHIbNUq9Wn0oEhOoijvcYm7OtI7ROEKXcuYL-XtLT_6CeAkqZdGfNJYFM4Ro-JXME2hWc5vkbvkqPKsVuvvh5huiDrAWswv-r2uXMn2O1cUTJZFChUtXE=&uniplatform=NZKPT"
    },
    {
      title: "A Study of The Role of Immersive Intelligent Virtual Environments and Digital Avatars in Enhancing Students' Sense of Belonging",
      author: "2024 International Symposium on Ecological Design Engineering, Artificial Intelligence, and Sustainable Development",
      publisher: "2024ISEDEAISD (Ei Compendex)"
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
                「明日劇場」
              </span>
              <br />
              数智虚拟展演平台
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              由北京師範大學未來設計學院種子基金支持，視覺藝術家吳振擔任項目負責人。
              結合現代科技與劇場表演、身體動態、造型藝術與空間設計，構建起一個以人工智慧與數字表演為核心的創新平台。
            </p>
          </div>
        </div>
      </section>

      {/* Project Introduction */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                项目简介
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  你是否曾幻想，在虛擬空間中打造專屬替身，結交志同道合的朋友，並沉浸於充滿未來感的數字演藝創作世界中？「明日劇場」數智虛擬展演平台，正是為此而生。
                </p>
                <p>
                  「明日劇場」結合現代科技與劇場表演、身體動態、造型藝術與空間設計，構建起一個以人工智慧與數字表演為核心，涵蓋人文藝術、互動體驗、網絡技術、圖形學、動作捕捉等八大模塊的創新平台。
                </p>
                <p>
                  這是國內首個將元宇宙虛擬劇場概念具象化，並融合視訊通訊與動作捕捉技術的沉浸式藝術展演空間。
                </p>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">核心特色</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">八大模块创新平台</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">元宇宙虚拟剧场</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Camera className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300">动作捕捉技术</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">沉浸式艺术展演</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              创新功能与应用场景
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              作为一项开创性实验平台，「明日劇場」大幅拓宽了传统剧场的应用边界
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modular Architecture */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              模组化架构与技术特色
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              「明日劇場」将整体场景设于漂浮于外太空的虚拟宇宙中，各式剧场星球灵感来自中国国家大剧院、苏州园林、水上剧场与莎士比亚环球剧院
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-slate-900/30 rounded-lg p-6 border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                <h3 className="text-white font-semibold mb-3">{module.title}</h3>
                <p className="text-gray-400 text-sm">{module.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">版本支持</h3>
              <p className="text-gray-400 mb-4">
                「明日劇場」基于不同的硬件需求分为三个版本，分别使用Unreal、Unity开发
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">专业版 Pro</span>
                <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm">工作室版 Studio</span>
                <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm">基础版 Base</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              学术成果
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              平台在学术研究和产业应用方面取得了丰硕成果
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Research Papers */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">研究论文</h3>
              <div className="space-y-6">
                {papers.map((paper, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700">
                    <CardContent className="p-6">
                      <h4 className="text-white font-medium mb-2">{paper.title}</h4>
                      <p className="text-gray-400 text-sm mb-1">{paper.author}</p>
                      <p className="text-gray-500 text-sm mb-3">{paper.publisher}</p>
                      {paper.link && (
                        <a 
                          href={paper.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm"
                        >
                          查看论文
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards and Locations */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">获奖情况</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">落地应用</h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            联系我们
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            了解更多关于明日剧场平台的信息，或洽谈合作事宜
          </p>
          <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-white font-semibold mb-2">公司</h4>
                <p className="text-gray-400">澳门未来视野科技有限公司</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">电话</h4>
                <p className="text-gray-400">(853) 66810358</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">邮箱</h4>
                <p className="text-gray-400">tot@alexzhenwu.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;

