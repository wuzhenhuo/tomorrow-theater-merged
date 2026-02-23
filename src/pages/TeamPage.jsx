import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  GraduationCap,
  Trophy,
  Star,
  Briefcase,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const TeamPage = () => {
  // 主创团队
  const teamMembers = [
    {
      name: "吴振",
      role: "创意总监 / 项目负责人",
      description: "澳门科技大学数字媒体博士，北京舞蹈学院副教授、硕士生导师，国家二级舞台美术设计，澳门国际青年智库理事、研究员。美国加州大学欧文分校访问学者。",
      image: "/team/wuzhen.png",
      positions: [
        "北京舞蹈学院副教授",
        "澳门国际青年智库理事、研究员",
        "硕士生导师",
        "国家二级舞台美术设计",
        "西那瓦大学艺术与哲学学院客座教授及博士生导师（泰国）",
        "《照明工程学报》青年编委"
      ],
      achievements: [
        "2022年北京冬残奥会开闭幕式多媒体设计",
        "国家科技创新奖（科技部备案）",
        "理创大赛大湾区二等奖"
      ],
      expertise: [
        "数字媒体艺术创作",
        "多媒体视觉设计",
        "舞台美术设计",
        "人工智能应用",
        "跨媒介展演技术"
      ]
    },
    {
      name: "欧阳嘉玲（澳门）",
      role: "项目策划",
      description: "澳门国际青年智库秘书长，负责项目整体策划与协调。",
      image: "/team/jialing.png"
    },
    {
      name: "樊一鸣（澳大利亚）",
      role: "市场总监",
      description: "视觉艺术家，澳门大学硕士，负责市场推广与品牌建设。",
      image: "/team/fanyiming.png"
    },
    {
      name: "王莹",
      role: "设计总监",
      description: "北京师范大学（珠海）硕士，负责视觉设计与用户体验。",
      image: "/team/wangyin.png"
    }
  ];

  // 艺术指导
  const artAdvisors = [
    {
      name: "Tony Brown",
      role: "艺术顾问",
      description: "法国巴黎国立高等美院终身教授",
      image: "/team/tony.png"
    },
    {
      name: "高鹏",
      role: "学术顾问",
      description: "北京师范大学未来设计学院院长",
      image: "/team/gaopeng.png"
    }
  ];

  // AI员工
  const aiEmployees = [
    {
      name: "Bernard",
      role: "首席程序员",
      description: "AI驱动的开发助手，负责技术支持与代码优化",
      image: "/team/bernard.png"
    },
    {
      name: "Claw",
      role: "首席经理",
      description: "AI项目管理助手，负责项目协调与进度追踪",
      image: "/team/claw.png"
    }
  ];

  // 技术支持及合作伙伴
  const partners = {
    academic: [
      "澳门科技大学",
      "澳门国际青年智库",
      "澳门舞蹈家协会",
      "北京师范大学未来设计学院（珠海）",
      "天津传媒学院",
      "香港科技大学霍英东研究院"
    ],
    technology: [
      "索尼 (SONY)",
      "理光 (RICOH)",
      "HTC",
      "微软中国",
      "亚马逊云 (AWS)",
      "华为 (HUAWEI)",
      "Unity Technologies"
    ],
    industry: [
      "北京澜景科技有限公司enlightv",
      "北京诺亦腾科技有限公司 (Noitom)",
      "上海青瞳科技有限公司 (Chingmu Technology)",
      "Ltd. Bite Dance-PICO"
    ]
  };

  // 公司核心价值观
  const coreValues = [
    { en: "Keep an open mind", zh: "保持开放" },
    { en: "Move forward bravely", zh: "勇往直前" },
    { en: "Full of passion", zh: "充满激情" },
    { en: "Embracing technology and art", zh: "拥抱科技与艺术" },
    { en: "To build and create", zh: "创建未来" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                团队介绍
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-300">
                未来视野科技有限公司
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              汇聚国际顶尖学者与专业团队，引领跨媒介数字展演创作的前沿发展
            </p>
          </div>
        </div>
      </section>

      {/* Lead Team Member - 吴振 */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">项目负责人</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Image */}
              <div className="lg:col-span-1 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/50 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                      <img 
                        src={teamMembers[0].image} 
                        alt={teamMembers[0].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-3">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{teamMembers[0].name}</h3>
                <p className="text-cyan-400 text-lg mb-2">{teamMembers[0].role}</p>
                <p className="text-gray-400 text-sm">{teamMembers[0].description}</p>
              </div>

              {/* Details */}
              <div className="lg:col-span-2">
                {/* Positions */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-cyan-400" />
                    主要职务
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {teamMembers[0].positions.map((position, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                        {position}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                    主要成就
                  </h4>
                  <div className="space-y-3">
                    {teamMembers[0].achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                        <Award className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-cyan-400" />
                    专业领域
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[0].expertise.map((skill, index) => (
                      <Badge key={index} variant="outline" className="border-cyan-500/50 text-cyan-400 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">主创团队</h2>
            <p className="text-gray-400">跨学科的专业团队，推动数字艺术创新</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-cyan-400 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Art Advisors */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">艺术指导</h2>
            <p className="text-gray-400">国际知名专家提供学术与艺术指导</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {artAdvisors.map((advisor, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{advisor.name}</CardTitle>
                  <CardDescription className="text-purple-400 font-medium">
                    {advisor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{advisor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Employees */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI 员工</h2>
            <p className="text-gray-400">AI驱动的团队成员，24小时提供支持</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {aiEmployees.map((employee, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                    <img 
                      src={employee.image} 
                      alt={employee.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{employee.name}</CardTitle>
                  <CardDescription className="text-cyan-400 font-medium">
                    {employee.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{employee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">公司核心价值观</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center hover:border-cyan-500/50 transition-colors">
                  <p className="text-white font-semibold text-lg mb-2">{value.zh}</p>
                  <p className="text-gray-400 text-sm">{value.en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">技术支持及合作伙伴</h2>
            <p className="text-gray-400">与知名院校、科技公司和行业机构建立战略合作关系</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Academic Partners */}
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-cyan-400 mr-2" />
                <h3 className="text-white font-semibold">学术机构</h3>
              </div>
              <div className="space-y-2">
                {partners.academic.map((partner, index) => (
                  <div key={index} className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Partners */}
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-purple-400 mr-2" />
                <h3 className="text-white font-semibold">科技公司</h3>
              </div>
              <div className="space-y-2">
                {partners.technology.map((partner, index) => (
                  <div key={index} className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Partners */}
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">行业伙伴</h3>
              </div>
              <div className="space-y-2">
                {partners.industry.map((partner, index) => (
                  <div key={index} className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              加入我们的团队
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              如果您对数字艺术充满热情，欢迎与我们联系
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                <span>tot@alexzhenwu.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                <span>+86 13810745684</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
