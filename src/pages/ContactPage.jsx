import React, { useState } from 'react';
import pic3 from '../assets/images/pic3.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Building,
  Users,
  MessageSquare,
  Send,
  Globe,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Building className="w-6 h-6 text-cyan-400" />,
      title: "公司信息",
      details: [
        "澳门未来视野科技有限公司",
        "专注数字艺术与元宇宙技术",
        "北京师范大学未来设计学院种子基金支持"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      title: "联系电话",
      details: [
        "(853) 66810358",
        "+86 13810745684",
        "工作时间：周一至周五 9:00-18:00",
        "紧急联系请发送邮件"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-green-400" />,
      title: "电子邮箱",
      details: [
        "tot@alexzhenwu.com"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6 text-yellow-400" />,
      title: "办公地址",
      details: [
        "澳门特别行政区",
        "澳门青年创业孵化中心",
        "其他合作地点遍布粤港澳大湾区"
      ]
    }
  ];

  const locations = [
    {
      name: "澳门总部",
      address: "澳门青年创业孵化中心",
      description: "项目总部，负责整体运营和战略规划",
      status: "总部",
      icon: <Building className="w-5 h-5 text-cyan-400" />
    },
    {
      name: "上海研发中心",
      address: "聚能湾国家级科技企业孵化中心",
      description: "技术研发和产品创新中心",
      status: "研发中心",
      icon: <Users className="w-5 h-5 text-purple-400" />
    },
    {
      name: "珠海学术中心",
      address: "北京师范大学未来设计美术馆",
      description: "学术研究和教育合作基地",
      status: "学术合作",
      icon: <Globe className="w-5 h-5 text-green-400" />
    },
    {
      name: "北京展示中心",
      address: "798深澜AI中心",
      description: "技术展示和文化推广中心",
      status: "展示中心",
      icon: <MessageSquare className="w-5 h-5 text-yellow-400" />
    },
    {
      name: "广州科研中心",
      address: "香港科技大学霍英东研究院",
      description: "科技创新与人才培养合作基地",
      status: "科研合作",
      icon: <Globe className="w-5 h-5 text-blue-400" />
    },
    {
      name: "北京AI创新中心",
      address: "中关村AI北纬社区",
      description: "人工智能技术应用与产业对接中心",
      status: "创新合作",
      icon: <Users className="w-5 h-5 text-orange-400" />
    }
  ];

  const cooperationTypes = [
    {
      title: "教育合作",
      description: "与学校、培训机构合作开展数字艺术教育",
      features: ["课程开发", "师资培训", "学生交流", "设备支持"],
      icon: <Users className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "技术合作",
      description: "与科技公司、研究机构开展技术研发合作",
      features: ["联合研发", "技术授权", "专利申请", "成果转化"],
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: "文化合作",
      description: "与文化机构合作推广数字艺术和传统文化",
      features: ["展览策划", "文化传承", "艺术创作", "国际交流"],
      icon: <MessageSquare className="w-8 h-8 text-green-400" />
    }
  ];

  const aigcTools = [
    {
      title: "明日剧场数智展演平台",
      description: "国内首个元宇宙虚拟剧场平台",
      url: "https://auqliwvr.manus.space/",
      icon: <Globe className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "AI图像设计师",
      description: "智能产品设计和概念生成工具",
      url: "https://v0-image-upload-app-lime-wuzhednhuo-1982.vercel.app/",
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: "AI视频设计师",
      description: "专业的AI视频生成和编辑工具",
      url: "https://v0-modern-movie-generator-ui.vercel.app/",
      icon: <MessageSquare className="w-6 h-6 text-green-400" />
    },
    {
      title: "AI图像设计1",
      description: "基于Flux的智能图像生成工具",
      url: "https://flux-fal-openai-appgit-xcdjrcva2qcycdx42scnda.streamlit.app/",
      icon: <ExternalLink className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "AI图像设计2",
      description: "高级AI图像创作和编辑平台",
      url: "https://app-flux-wuzhenhuo-2024-1982-1987.streamlit.app/",
      icon: <ExternalLink className="w-6 h-6 text-pink-400" />
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    alert('感谢您的留言，我们会尽快回复！');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                联系我们
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-300">
                开启数字艺术合作之旅
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              欢迎与我们联系，探讨数字艺术教育、技术合作和文化创新的无限可能
              <br />
              <span className="text-lg text-gray-400">
                我们期待与您共同推动数字艺术事业的发展
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src={pic3} alt="联系我们" className="w-1/2 h-auto object-cover mx-auto" />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              联系方式
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              多种联系方式，确保您能够便捷地与我们取得联系
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-slate-800 rounded-lg w-fit">
                    {info.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              办公地点
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              我们在粤港澳大湾区设有多个办公地点，为您提供就近服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-800 rounded-lg p-3">
                      {location.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400">
                          {location.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg">{location.name}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {location.address}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Types */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              合作方式
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              我们提供多种合作模式，满足不同机构和个人的合作需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cooperationTypes.map((type, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-slate-800 rounded-lg w-fit">
                    {type.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-400 mb-6">
                    {type.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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

      {/* AIGC Design Tools Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AIGC 设计工具
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              由 <a 
                href="https://auqliwvr.manus.space/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                Theater of Tomorrow
              </a> 开发的专业AI设计工具集
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aigcTools.map((tool, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-white text-lg">{tool.title}</CardTitle>
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
                    立即体验
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              在线留言
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              请填写以下表单，我们会在24小时内回复您的咨询
            </p>
          </div>

          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">姓名 *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">邮箱 *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
                      placeholder="请输入您的邮箱地址"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">机构/公司</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
                      placeholder="请输入您的机构或公司名称"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">咨询主题 *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="">请选择咨询主题</option>
                      <option value="education">教育合作</option>
                      <option value="technology">技术合作</option>
                      <option value="culture">文化合作</option>
                      <option value="business">商务洽谈</option>
                      <option value="support">技术支持</option>
                      <option value="other">其他咨询</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">留言内容 *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none resize-none"
                    placeholder="请详细描述您的需求或问题，我们会根据您的具体情况提供专业建议..."
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    发送留言
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              常见问题
            </h2>
            <p className="text-xl text-gray-400">
              以下是一些常见问题的解答，如有其他疑问请随时联系我们
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-white font-medium mb-2">如何开始与明日剧场的合作？</h3>
              <p className="text-gray-400">
                您可以通过邮件、电话或在线留言的方式联系我们。我们会根据您的具体需求，安排专业团队与您详细沟通，制定合适的合作方案。
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-white font-medium mb-2">明日剧场平台支持哪些设备？</h3>
              <p className="text-gray-400">
                平台支持多种设备，包括PC端、移动端，以及各类动作捕捉设备如Azure Kinect、Sony Mocopi等。我们会根据您的具体需求推荐最适合的设备配置。
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-white font-medium mb-2">是否提供技术培训和支持？</h3>
              <p className="text-gray-400">
                是的，我们提供完整的技术培训和持续的技术支持服务。包括平台使用培训、设备操作指导、课程开发支持等，确保合作伙伴能够顺利使用我们的平台。
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-white font-medium mb-2">合作的费用如何计算？</h3>
              <p className="text-gray-400">
                我们提供灵活的合作模式和定价方案，会根据合作规模、使用需求、服务内容等因素制定个性化的报价。请联系我们获取详细的报价信息。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            立即开始合作
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            加入明日剧场生态，共同推动数字艺术教育和文化创新发展
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
              onClick={() => window.location.href = 'mailto:tot@alexzhenwu.com?subject=合作咨询&body=您好，我想咨询关于明日剧场的合作事宜。'}
            >
              <Mail className="w-5 h-5 mr-2" />
              发送邮件咨询
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3"
              onClick={() => window.open('https://wa.me/85366810358', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              电话联系我们
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

