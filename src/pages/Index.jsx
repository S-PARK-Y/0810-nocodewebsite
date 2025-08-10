import { useState } from "react";
import { Calendar, Mail, Phone, Globe, Award, BookOpen, Briefcase, Code, Languages, Users, TrendingUp, MessageSquare, Clock, Users2, Lightbulb, Target, BarChart3, Palette, Rocket } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "教育背景", icon: <BookOpen className="h-4 w-4" /> },
    { id: "impact", label: "数字说话", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "skills", label: "能力标签", icon: <Code className="h-4 w-4" /> },
    { id: "projects", label: "项目经验", icon: <Briefcase className="h-4 w-4" /> },
    { id: "tools", label: "工具箱", icon: <Languages className="h-4 w-4" /> }
  ];

  const projectSteps = [
    {
      title: "市场调研",
      description: "分析心理健康应用市场趋势和用户需求",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-amber-500/20 text-amber-600"
    },
    {
      title: "竞品分析",
      description: "研究10+竞品功能特点和商业模式",
      icon: <Target className="h-6 w-6" />,
      color: "bg-orange-500/20 text-orange-600"
    },
    {
      title: "产品定位",
      description: "确定AI驱动的情感陪伴产品方向",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-yellow-500/20 text-yellow-600"
    },
    {
      title: "用户画像",
      description: "构建5类典型用户画像和使用场景",
      icon: <Users2 className="h-6 w-6" />,
      color: "bg-amber-500/20 text-amber-600"
    },
    {
      title: "UI/UX设计",
      description: "设计温暖治愈的视觉风格和交互流程",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-orange-500/20 text-orange-600"
    },
    {
      title: "MVP开发",
      description: "2周内完成核心功能原型开发",
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-yellow-500/20 text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl rounded-lg overflow-hidden border border-amber-200">
        {/* Profile Header */}
        <div className="p-6 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-amber-300 to-orange-300 flex items-center justify-center text-amber-800 text-4xl font-bold shadow-lg shadow-amber-300/50">
                王
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-amber-800">王晓宇 · WANG XIAOYU</h1>
              <p className="text-xl mt-2 text-amber-600">AI 产品经理</p>
              <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-4">
                <div className="flex items-center text-amber-700">
                  <Mail className="h-4 w-4 mr-1" />
                  <span>15623175269@163.com</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>+86 156-2317-5269</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <Globe className="h-4 w-4 mr-1" />
                  <span>Beijing / Remote</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start mt-2 gap-4">
                <div className="flex items-center text-amber-700">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2002-10-11</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <Award className="h-4 w-4 mr-1" />
                  <span>中共党员</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-amber-200">
          <nav className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "border-b-2 border-amber-500 text-amber-700 bg-amber-100/50"
                    : "text-amber-600/70 hover:text-amber-700 hover:bg-amber-50/50"
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="px-6 py-8">
          {activeTab === "education" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-amber-600" />
                教育背景
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-amber-200">
                  <thead className="bg-amber-100/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">学校 / 项目</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">学位 / 荣誉</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/50 divide-y divide-amber-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-700">中国传媒大学</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-600/70">国际新闻学硕士在读</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "impact" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-amber-600" />
                让数字说话
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 p-6 rounded-lg shadow-lg border border-amber-200 hover:border-amber-300 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <Users className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-700">10 w+</h3>
                  </div>
                  <p className="text-amber-700">人民日报公众号稿件</p>
                  <p className="text-sm text-amber-600/70 mt-1">51 篇阅读量破 10 w+</p>
                </div>
                <div className="bg-white/50 p-6 rounded-lg shadow-lg border border-orange-200 hover:border-orange-300 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-orange-700">100 w+</h3>
                  </div>
                  <p className="text-orange-700">豆包抖音官号</p>
                  <p className="text-sm text-orange-600/70 mt-1">在职期间粉丝破百万</p>
                </div>
                <div className="bg-white/50 p-6 rounded-lg shadow-lg border border-yellow-200 hover:border-yellow-300 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3">
                      <MessageSquare className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-yellow-700">5 条</h3>
                  </div>
                  <p className="text-yellow-700">豆包 10 w+ 视频</p>
                  <p className="text-sm text-yellow-600/70 mt-1">春节 66 个故事等系列</p>
                </div>
                <div className="bg-white/50 p-6 rounded-lg shadow-lg border border-amber-200 hover:border-amber-300 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <TrendingUp className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-700">18 %</h3>
                  </div>
                  <p className="text-amber-700">AI 产品留存提升</p>
                  <p className="text-sm text-amber-600/70 mt-1">多语言 Prompt A/B 实验</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                <Code className="h-6 w-6 mr-2 text-amber-600" />
                能力标签云
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm hover:bg-amber-200 transition-all border border-amber-200">用户研究</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm hover:bg-orange-200 transition-all border border-orange-200">Prompt Engineering</span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-200 transition-all border border-yellow-200">数据新闻</span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm hover:bg-amber-200 transition-all border border-amber-200">舆情监控</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm hover:bg-orange-200 transition-all border border-orange-200">多语言内容策略</span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-200 transition-all border border-yellow-200">A/B 实验</span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm hover:bg-amber-200 transition-all border border-amber-200">React & Tailwind</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm hover:bg-orange-200 transition-all border border-orange-200">Python 数据清洗</span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-200 transition-all border border-yellow-200">PRD 写作</span>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                <Briefcase className="h-6 w-6 mr-2 text-amber-600" />
                心语迹（icare）AI 产品开发历程
              </h2>
              <div className="bg-gradient-to-r from-amber-100/50 to-orange-100/50 p-6 rounded-lg mb-8 border border-amber-200">
                <p className="text-amber-700 mb-4">
                  2025年暑假期间，我与两位同学共同创立了"心语迹（icare）"AI产品，这是一个专注于情感陪伴和心理健康的AI助手。
                  我们采用Vibe coding方法进行协作，整合Gemini Deep Research、V0、Cursor等AI工具，完成了从市场调研到MVP开发的全流程。
                </p>
                <div className="flex items-center text-amber-700">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium">开发周期：2025年7月-8月（6周）</span>
                </div>
              </div>

              <div className="space-y-6">
                {projectSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`${step.color} p-3 rounded-full mr-4 flex-shrink-0 border border-current/30`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-amber-800 mb-1">{step.title}</h3>
                      <p className="text-amber-700/80">{step.description}</p>
                    </div>
                    <div className="text-amber-700 font-bold text-lg">0{index + 1}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/50 p-6 rounded-lg shadow-md border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">项目成果</h3>
                <ul className="space-y-2 text-amber-700/80">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2"></span>
                    <span>完成用户访谈50+，收集有效反馈200+条</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2"></span>
                    <span>设计温暖治愈的视觉风格，用户满意度达92%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2"></span>
                    <span>MVP版本在2周内完成开发，核心功能完整</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2"></span>
                    <span>获得校内创新创业大赛二等奖</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "tools" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                <Languages className="h-6 w-6 mr-2 text-amber-600" />
                工具箱
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">语言</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-amber-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      <span>中文（母语）</span>
                    </li>
                    <li className="flex items-center text-orange-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      <span>英语（同传级）</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">产品</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-yellow-700">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      <span>Figma、Notion、Jira</span>
                    </li>
                    <li className="flex items-center text-amber-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      <span>Amplitude、Metabase</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">技术</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-orange-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      <span>Python（Pandas）</span>
                    </li>
                    <li className="flex items-center text-yellow-700">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      <span>SQL、React、Tailwind</span>
                    </li>
                    <li className="flex items-center text-amber-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      <span>Git</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">媒体</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-orange-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      <span>PR、Premiere</span>
                    </li>
                    <li className="flex items-center text-yellow-700">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      <span>Photoshop、Audition</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="px-6 py-8 bg-gradient-to-r from-amber-100/50 to-orange-100/50 text-amber-700 text-center border-t border-amber-200">
          <h2 className="text-2xl font-bold mb-4 text-amber-800">现在就聊？</h2>
          <p className="mb-6 text-amber-700/80">如果你也在寻找能把「用户的悄悄话」翻译成「产品里程碑」的人，点击下方日历，预约 30 min 咖啡聊 ☕️</p>
          <button className="bg-amber-100 text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-200 transition-all border border-amber-300">
            📅 点我预约
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
