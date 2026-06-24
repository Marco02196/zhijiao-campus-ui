import { useState } from 'react';
import {
  ArrowLeft, Car, Flame, Pill, Wifi, Heart, AlertTriangle,
  Shield, CheckCircle2, BookOpen, Clock, Award, ChevronRight,
  UtensilsCrossed, Waves, Scale
} from 'lucide-react';

const allTopics = [
  {
    id: 'traffic', title: '交通安全', icon: Car, color: 'from-[#2563EB] to-[#3B82F6]', bg: 'bg-blue-50', text: 'text-blue-600',
    desc: '学习道路交通安全法规，养成文明出行习惯，掌握交通事故应急处理方法。',
    courses: [
      { name: '道路交通安全法规', duration: '15分钟', done: true },
      { name: '电动自行车安全骑行', duration: '10分钟', done: true },
      { name: '交通事故应急处理', duration: '12分钟', done: false },
    ],
    medals: ['文明出行者'],
  },
  {
    id: 'fire', title: '消防安全', icon: Flame, color: 'from-[#EA580C] to-[#F97316]', bg: 'bg-orange-50', text: 'text-orange-600',
    desc: '掌握消防安全知识，学会火灾预防和逃生自救技能，了解灭火器使用方法及用电安全规范。',
    courses: [
      { name: '火灾预防与隐患排查', duration: '15分钟', done: true },
      { name: '灭火器使用方法', duration: '10分钟', done: true },
      { name: '火灾逃生自救技巧', duration: '12分钟', done: true },
      { name: '宿舍消防安全规范', duration: '8分钟', done: false },
      { name: '宿舍用电安全规范', duration: '10分钟', done: true },
      { name: '触电急救方法', duration: '8分钟', done: false },
    ],
    medals: ['消防小能手', '安全守护员', '用电达人'],
  },
  {
    id: 'drug', title: '禁毒', icon: Pill, color: 'from-[#DC2626] to-[#EF4444]', bg: 'bg-red-50', text: 'text-red-600',
    desc: '认识毒品危害，学习拒绝毒品的技巧，了解禁毒法律法规。',
    courses: [
      { name: '毒品危害与识别', duration: '12分钟', done: true },
      { name: '拒绝毒品的技巧', duration: '10分钟', done: false },
      { name: '禁毒法律法规', duration: '15分钟', done: false },
    ],
    medals: ['禁毒先锋'],
  },
  {
    id: 'cyber', title: '网络安全', icon: Wifi, color: 'from-[#0891B2] to-[#06B6D4]', bg: 'bg-cyan-50', text: 'text-cyan-600',
    desc: '防范网络诈骗，保护个人信息安全，健康使用网络。',
    courses: [
      { name: '网络诈骗识别与防范', duration: '15分钟', done: true },
      { name: '个人信息保护指南', duration: '10分钟', done: true },
      { name: '健康上网习惯养成', duration: '8分钟', done: false },
    ],
    subCategory: {
      name: '反诈',
      courses: [
        { name: '电信诈骗常见套路', duration: '10分钟', done: false },
        { name: '刷单返利骗局揭秘', duration: '8分钟', done: false },
        { name: '冒充客服退款诈骗', duration: '8分钟', done: false },
        { name: '裸聊敲诈防范指南', duration: '6分钟', done: false },
      ],
    },
    medals: ['反诈小卫士', '火眼金睛'],
  },
  {
    id: 'mental', title: '心理健康', icon: Heart, color: 'from-[#DB2777] to-[#EC4899]', bg: 'bg-pink-50', text: 'text-pink-600',
    desc: '关注心理健康，学会情绪管理和压力调节，了解心理咨询渠道。',
    courses: [
      { name: '大学生心理健康基础', duration: '12分钟', done: true },
      { name: '情绪管理与压力调节', duration: '15分钟', done: false },
      { name: '人际交往与沟通技巧', duration: '10分钟', done: false },
    ],
    medals: ['阳光心态'],
  },
  {
    id: 'emergency', title: '应急避险', icon: AlertTriangle, color: 'from-[#9333EA] to-[#A855F7]', bg: 'bg-purple-50', text: 'text-purple-600',
    desc: '学习各类突发事件的应急处置方法，提高自救互救能力。',
    courses: [
      { name: '地震避险与逃生', duration: '12分钟', done: true },
      { name: '洪水台风应对指南', duration: '10分钟', done: false },
      { name: '突发公共卫生事件应对', duration: '15分钟', done: false },
    ],
    medals: ['应急先锋'],
  },
  {
    id: 'food', title: '食品安全', icon: UtensilsCrossed, color: 'from-[#059669] to-[#10B981]', bg: 'bg-emerald-50', text: 'text-emerald-600',
    desc: '了解食品安全常识，学会辨别不安全食品，掌握食物中毒应急处理。',
    courses: [
      { name: '食品安全常识', duration: '10分钟', done: false },
      { name: '辨别不安全食品', duration: '12分钟', done: false },
      { name: '食物中毒应急处理', duration: '8分钟', done: false },
    ],
    medals: ['食安卫士'],
  },
  {
    id: 'water', title: '防溺', icon: Waves, color: 'from-[#0E7490] to-[#22D3EE]', bg: 'bg-sky-50', text: 'text-sky-600',
    desc: '学习防溺水知识，掌握水上自救和救援技能。',
    courses: [
      { name: '防溺水安全教育', duration: '12分钟', done: false },
      { name: '水上自救技巧', duration: '10分钟', done: false },
    ],
    medals: ['水上安全员'],
  },
  {
    id: 'law', title: '普法课堂', icon: Scale, color: 'from-[#7C3AED] to-[#8B5CF6]', bg: 'bg-violet-50', text: 'text-violet-600',
    desc: '了解基本法律知识，增强法治意识，做守法公民。',
    courses: [
      { name: '大学生常见法律问题', duration: '20分钟', done: true },
      { name: '合同法基础知识', duration: '15分钟', done: false },
    ],
    medals: ['法律明白人'],
  },
];

interface SafetyDetailPageProps {
  onBack: () => void;
}

export default function SafetyDetailPage({ onBack }: SafetyDetailPageProps) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>('traffic');

  const totalCourses = allTopics.reduce((s, t) => s + t.courses.length, 0);
  const completedCourses = allTopics.reduce((s, t) => s + t.courses.filter(c => c.done).length, 0);

  return (
    <div className="min-h-full bg-[#F8FAFF]">
      {/* Header */}
      <header className="header-tech px-4 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm active:scale-95 transition-transform">
          <ArrowLeft size={20} className="text-[#1F2937]" />
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold text-[#1F2937]">校园安全教育</h1>
          <p className="text-[10px] text-[#94A3B8]">共 {allTopics.length} 个安全主题 · {totalCourses} 门课程</p>
        </div>
      </header>

      <div className="px-4 pt-4 pb-6 space-y-4">
        {/* Overall Progress */}
        <div className="card-elevated p-4 flex items-center gap-4 animate-fade-in-up">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2B7AE8] to-[#3B82F6] flex items-center justify-center shadow-md flex-shrink-0">
            <Shield size={26} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-bold text-[#1F2937]">总体学习进度</span>
              <span className="text-sm font-bold text-[#2B7AE8]">{Math.round((completedCourses / totalCourses) * 100)}%</span>
            </div>
            <div className="h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#2B7AE8] to-[#10B981] rounded-full transition-all duration-700" style={{ width: `${(completedCourses / totalCourses) * 100}%` }} />
            </div>
            <div className="text-[11px] text-[#94A3B8] mt-1.5">已完成 {completedCourses}/{totalCourses} 门课程</div>
          </div>
        </div>

        {/* All Safety Topics - Accordion Style */}
        <div className="space-y-2.5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {allTopics.map((topic) => {
            const Icon = topic.icon;
            const isExpanded = expandedTopic === topic.id;
            const topicCompleted = topic.courses.filter(c => c.done).length;
            return (
              <div key={topic.id} className="card-elevated overflow-hidden">
                {/* Topic Header */}
                <button
                  onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                  className="w-full p-3.5 flex items-center gap-3 text-left"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#1F2937]">{topic.title}</span>
                      <span className="text-[10px] font-bold text-[#94A3B8]">{topicCompleted}/{topic.courses.length}</span>
                    </div>
                    <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden mt-1.5">
                      <div className={`h-full rounded-full bg-gradient-to-r ${topic.color}`} style={{ width: `${(topicCompleted / topic.courses.length) * 100}%` }} />
                    </div>
                  </div>
                  <div className={`text-[#CBD5E1] transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                    <ChevronRight size={18} />
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-3.5 pb-3.5 border-t border-[#F1F5F9]">
                    <p className="text-xs text-[#94A3B8] leading-relaxed py-2.5">{topic.desc}</p>

                    {/* Courses */}
                    <div className="space-y-2">
                      {topic.courses.map((c, i) => (
                        <div key={i} className="flex items-center gap-2.5 py-1.5">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${c.done ? 'bg-[#ECFDF5]' : 'bg-[#F8FAFF]'}`}>
                            {c.done ? <CheckCircle2 size={14} className="text-[#10B981]" /> : <BookOpen size={14} className="text-[#CBD5E1]" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`text-xs ${c.done ? 'text-[#10B981] font-medium' : 'text-[#475569]'}`}>{c.name}</span>
                          </div>
                          <span className="flex items-center gap-1 text-[10px] text-[#94A3B8] flex-shrink-0">
                            <Clock size={10} />{c.duration}
                          </span>
                          {!c.done && <button className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#2B7AE8] to-[#3B82F6] text-white text-[10px] font-bold active:scale-95 shadow-sm">学习</button>}
                        </div>
                      ))}
                    </div>

                    {/* Sub Category - Anti-Fraud */}
                    {'subCategory' in topic && topic.subCategory && (
                      <div className="mt-4 border border-[#FEE2E2] rounded-xl overflow-hidden bg-gradient-to-br from-[#FEF2F2] to-white">
                        {/* 反诈标题栏 */}
                        <div className="px-3.5 py-3 bg-gradient-to-r from-[#DC2626] to-[#EF4444] flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                            <Shield size={18} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-white">{topic.subCategory.name}专题</span>
                              <span className="px-1.5 py-0.5 rounded bg-white/20 text-white text-[9px] font-bold">
                                {topic.subCategory.courses.filter(c => c.done).length}/{topic.subCategory.courses.length} 节
                              </span>
                            </div>
                            <p className="text-white/70 text-[10px] mt-0.5">识别诈骗套路，守护财产安全</p>
                          </div>
                        </div>
                        {/* 反诈课程列表 */}
                        <div className="px-3.5 py-3 space-y-2.5">
                          {topic.subCategory.courses.map((c, i) => (
                            <div key={i} className="flex items-center gap-2.5 py-1.5 bg-white/60 rounded-lg px-2.5">
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${c.done ? 'bg-[#ECFDF5]' : 'bg-[#F8FAFF]'}`}>
                                {c.done ? <CheckCircle2 size={14} className="text-[#10B981]" /> : <BookOpen size={14} className="text-[#CBD5E1]" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className={`text-xs ${c.done ? 'text-[#10B981] font-medium' : 'text-[#475569]'}`}>{c.name}</span>
                              </div>
                              <span className="flex items-center gap-1 text-[10px] text-[#94A3B8] flex-shrink-0">
                                <Clock size={10} />{c.duration}
                              </span>
                              {!c.done && <button className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white text-[10px] font-bold active:scale-95 shadow-sm">学习</button>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Medals */}
                    <div className="flex gap-2 mt-3 pt-2 border-t border-[#F1F5F9]">
                      {topic.medals.map((m) => (
                        <div key={m} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FEF3C7]">
                          <Award size={12} className="text-[#F59E0B]" />
                          <span className="text-[10px] font-bold text-[#92400E]">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Total Medals Summary */}
        <div className="card-elevated p-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-sm font-bold text-[#1F2937] mb-3">可获得勋章</h3>
          <div className="flex flex-wrap gap-2">
            {allTopics.flatMap(t => t.medals).map((m, i) => (
              <div key={`${m}-${i}`} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] shadow-sm">
                <Award size={14} className="text-[#F59E0B]" />
                <span className="text-xs font-bold text-[#92400E]">{m}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
}
