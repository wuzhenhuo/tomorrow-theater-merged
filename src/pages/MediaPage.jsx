import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Newspaper, 
  ExternalLink, 
  Calendar,
  Building,
  Search,
  Filter
} from 'lucide-react';

const MediaPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const mediaReports = [
    {
      title: "\"一人公司\"三位创业者如此\"出圈\"",
      date: "2026年2月17日",
      source: "法治周末报",
      link: "https://mp.weixin.qq.com/s/1ODW2zZU8HQHJTuboExigg",
      year: "2026"
    },
    {
      title: "「明日剧场」：立足湾区的多模态AI线上交互展演与生成式内容创作生态",
      date: "2025年12月18日",
      source: "澳门市民日报",
      link: "https://shimin.expo.macauo2o.com/blog-details.html?id=2001624428016082946&share=1",
      year: "2025"
    },
    {
      title: "「明日系列文化科技」从澳门起航",
      date: "2025年2月1日",
      source: "中国新闻网",
      link: "https://m.chinanews.com/wap/detail/chs/zw/hm679d880c6e9bde64d68002af.shtml",
      year: "2025"
    },
    {
      title: "澳门未来视野「明日剧场」亮相上海进博会",
      date: "2024年11月9日",
      source: "中国新闻网",
      link: "https://m.chinanews.com/wap/detail/chs/zw/hm672f29d6698c7f57ec283225.shtml",
      year: "2024"
    },
    {
      title: "澳门未来视野「明日剧场」亮相第七届上海进博会",
      date: "2024年11月8日",
      source: "澳门市民日报",
      link: "https://shimin.expo.macauo2o.com/blog-details.html?id=1854834635613732866&share=1",
      year: "2024"
    },
    {
      title: "未来视野「明日剧场」亮相澳门「2024科技周暨创科成果展」",
      date: "2024年10月22日",
      source: "澳门市民日报",
      link: "https://shimin.expo.macauo2o.com/blog-details.html?id=1846526118876217346&share=1",
      year: "2024"
    },
    {
      title: "未来视野「明日剧场」亮相澳门「2024科技周暨创科成果展」",
      date: "2024年10月16日",
      source: "中国新闻网",
      link: "https://m.chinanews.com/wap/detail/chs/zw/hm670fbfd92e1aca397647b1d0.shtml",
      year: "2024"
    },
    {
      title: "未来视野「明日剧场」 亮相京港澳高质量发展",
      date: "2024年9月28日",
      source: "澳门市民日报",
      link: "https://shimin.expo.macauo2o.com/player/detail?id=1839842247514324994&share=1",
      year: "2024"
    },
    {
      title: "未来视野「明日剧场」亮相京港澳高质量发展科技项目路演对接会",
      date: "2024年9月29日",
      source: "中国新闻网",
      link: "https://m.chinanews.com/wap/detail/chs/zw/hm66f8367e7b5e8d6ce00c9869.shtml",
      year: "2024"
    },
    {
      title: "「明日剧场」人工智能虚拟剧场亮相上海「未见UNSEEN第二届学研工作坊论坛」",
      date: "2024年6月15日",
      source: "中国新闻网",
      link: "https://m.chinanews.com/wap/detail/cht/zw/fthm666c75d219074f3b767c03ea.shtml",
      year: "2024"
    },
    {
      title: "明日剧场团队数字光雕作品《生生不息》亮相湾区2024深圳设计周",
      date: "2024年5月1日",
      source: "百度",
      link: "https://mbd.baidu.com/newspage/data/landingsuper?sShare=1&context=%7B%22nid%22%3A%22news_10198061216420434404%22,%22sourceFrom%22%3A%22bjh%22%7D",
      year: "2024"
    },
    {
      title: "「明日剧场」团队数字光雕作品《生生不息》亮相湾区2024深圳设计周",
      date: "2024年4月30日",
      source: "中国新闻网",
      link: "https://m.chinanews.com/wap/detail/cht/zw/fthm6630c9b92a73d526b92077b1.shtml",
      year: "2024"
    },
    {
      title: "「明日剧场」项目入驻澳门青创中心，打造艺、科、教相融数智化教育链路",
      date: "2024年4月",
      source: "北师大未来设计学院",
      link: "https://mp.weixin.qq.com/s/w2pSuoeLxQOAtbpKzeWqsA",
      year: "2024"
    },
    {
      title: "澳门市民日报，澳门青年创业孵化中心「明日剧场」应邀参加北京市三帆中学艺术节",
      date: "2024年4月",
      source: "MO微资讯",
      link: "https://mp.weixin.qq.com/s/Q50NsH-Q3BUIyQ0eUeW-wg",
      year: "2024"
    },
    {
      title: "澳门「明日剧场-超时空沉浸式智慧展演平台」应邀参加北京市三帆中学艺术节",
      date: "2024年4月",
      source: "中国新闻网",
      link: "https://m.chinanews.com/wap/detail/chs/zw/hm660c05c72dafab52d80ff442.shtml",
      year: "2024"
    },
    {
      title: "「明日剧场」 超时空的沉浸式智慧展演平台",
      date: "2024年3月",
      source: "澳门青年创业孵化中心",
      link: "https://mp.weixin.qq.com/s/fYwm2rKGK7flUL_Uy-UMiw",
      year: "2024"
    },
    {
      title: "探索「明日剧场」 | 虚拟线上展演平台的无限可能",
      date: "2024年2月",
      source: "其境在线",
      link: "https://mp.weixin.qq.com/s/fSZ1rZILvRrQ1Y6829sI_A",
      year: "2024"
    },
    {
      title: "「明日剧场」科技团队入驻澳门青创中心",
      date: "2024年2月",
      source: "澳门《市民日报》",
      link: "https://news.shimindaily.net/news/article?id=c5365169-7593-4c6c-87a8-e3f21d7cb652",
      year: "2024"
    },
    {
      title: "「明日剧场」科技团队入驻澳门青创中心",
      date: "2024年2月",
      source: "中国新闻网",
      link: "https://m.chinanews.com/wap/detail/chs/zw/hm65e08f05ff57516a9f6e75b7.shtml",
      year: "2024"
    },
    {
      title: "黑马计划 | 「明日剧场」—面向未来的元宇宙展演平台",
      date: "2023年11月",
      source: "Unity官方",
      link: "https://mp.weixin.qq.com/s/Kd40NVfTvSoluuAYgrh_og",
      year: "2023"
    },
    {
      title: "「明日剧场」：面向未来的沉浸式展演平台",
      date: "2022年9月",
      source: "MOCA艺术",
      link: "https://mp.weixin.qq.com/s/YBabTNniIeFdkUygs1Ju-A",
      year: "2022"
    },
    {
      title: "Wizard of technology casts his spell",
      date: "2022年3月",
      source: "中国日报",
      link: "https://enapp.chinadaily.com.cn/a/202203/16/AP623196b8a3104446d8d134e7.html",
      year: "2022"
    },
    {
      title: "北师大「未来设计种子基金」项目｜明日剧场：未来展演平台",
      date: "2022年2月",
      source: "北师大未来设计学院",
      link: "https://mp.weixin.qq.com/s/wQxRuQ6TDugZAWyoT9R_eQ",
      year: "2022"
    }
  ];

  const years = ['all', '2026', '2025', '2024', '2023', '2022'];

  const filteredReports = mediaReports.filter(report => {
    const matchesFilter = filter === 'all' || report.year === filter;
    const matchesSearch = searchTerm === '' || 
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.source.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const reportsByYear = filteredReports.reduce((acc, report) => {
    if (!acc[report.year]) {
      acc[report.year] = [];
    }
    acc[report.year].push(report);
    return acc;
  }, {});

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                媒体报道
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              各界媒体对「明日剧场」的关注与报道，共同见证我们的成长与探索
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索报道..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Year Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <Button
                    key={year}
                    onClick={() => setFilter(year)}
                    variant={filter === year ? "default" : "outline"}
                    size="sm"
                    className={filter === year 
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0"
                      : "border-slate-600 text-gray-300 hover:bg-slate-700"
                    }
                  >
                    {year === 'all' ? '全部' : year}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Reports */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredReports.length === 0 ? (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">没有找到相关报道</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.keys(reportsByYear)
                .sort((a, b) => b - a)
                .map((year) => (
                  <div key={year}>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                        {year}年
                      </div>
                      <div className="flex-1 h-px bg-slate-700 ml-4"></div>
                      <span className="text-gray-400 ml-4">{reportsByYear[year].length} 篇报道</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {reportsByYear[year].map((report, index) => (
                        <Card 
                          key={index} 
                          className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                          onClick={() => window.open(report.link, '_blank')}
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-400 mb-2">
                                {report.source}
                              </Badge>
                              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <CardTitle className="text-white text-lg leading-tight group-hover:text-cyan-400 transition-colors line-clamp-3">
                              {report.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {report.date}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              媒体报道统计
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{mediaReports.length}</div>
              <div className="text-gray-400">总报道数</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {new Set(mediaReports.map(r => r.source)).size}
              </div>
              <div className="text-gray-400">媒体来源</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {mediaReports.filter(r => r.source.includes('新闻网')).length}
              </div>
              <div className="text-gray-400">新闻网报道</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5</div>
              <div className="text-gray-400">报道年份</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              媒体合作
            </h2>
            <p className="text-gray-300 mb-6">
              欢迎媒体朋友关注和报道明日剧场的最新动态
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3">
                <Building className="w-5 h-5 mr-2" />
                媒体联系
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
