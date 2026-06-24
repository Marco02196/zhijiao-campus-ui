import {
  User, ChevronRight, Award, BookOpen, Clock,
  Shield, Settings, HelpCircle, FileText, Bell,
  Star, TrendingUp, Target, CheckCircle2
} from 'lucide-react';

const studentInfo = {
  name: '张小明',
  studentId: '2023010842',
  school: '广州市增城职业技术学院',
  major: '计算机应用技术',
  grade: '2023级',
  class: '计应1班',
  phone: '138****8888',
};

const stats = [
  { label: '学习天数', value: '128', icon: Clock, color: 'from-[#22B86F] to-[#6EDC9A]' },
  { label: '已通过考试', value: '12', icon: CheckCircle2, color: 'from-[#2EBFA5] to-[#8BE6D7]' },
  { label: '获得证书', value: '5', icon: Award, color: 'from-[#F6B15D] to-[#FFD59A]' },
  { label: '学习时长', value: '86h', icon: TrendingUp, color: 'from-[#A78BFA] to-[#D8C8FF]' },
];

const menuItems = [
  { icon: FileText, label: '学习记录', desc: '查看学习历史', color: '#22B86F', bg: '#E5F8EA' },
  { icon: Award, label: '我的证书', desc: '已获得的证书', color: '#F0A030', bg: '#FFF2D9' },
  { icon: Target, label: '考试安排', desc: ' upcoming exams', color: '#2EBFA5', bg: '#E5FAF5' },
  { icon: Star, label: '我的收藏', desc: '收藏的课程和资料', color: '#7E68D9', bg: '#F1EAFE' },
  { icon: Bell, label: '消息通知', desc: '系统通知和提醒', color: '#21A7A8', bg: '#E0FBF7' },
  { icon: Shield, label: '账号安全', desc: '密码和安全设置', color: '#22B86F', bg: '#EAF8F0' },
  { icon: Settings, label: '系统设置', desc: '应用偏好设置', color: '#789084', bg: '#EEF5F1' },
  { icon: HelpCircle, label: '帮助中心', desc: '常见问题解答', color: '#2EBFA5', bg: '#E5FAF5' },
];

export default function ProfilePage() {
  return (
    <div className="min-h-full bg-[#F3FBF7] text-[#18352A]">
      {/* Header with gradient */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#116B45] via-[#22B86F] to-[#2EBFA5] px-4 pt-5 pb-8">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/18 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0B5E3B]/22 to-transparent" />
        <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-white/12 blur-xl" />

        <div className="relative">
          <h1 className="text-lg font-bold text-white mb-4">个人中心</h1>

          {/* Student Info Card */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/60 shadow-lg bg-white/18 backdrop-blur-xl flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">{studentInfo.name}</h2>
              <p className="text-white/78 text-xs mt-0.5">{studentInfo.school}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="px-2 py-0.5 rounded-full bg-[#EAF8F0]/90 text-[#168F56] text-[10px] font-bold shadow-sm">
                  {studentInfo.grade}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#E5FAF5]/90 text-[#188F7D] text-[10px] font-bold shadow-sm">
                  {studentInfo.major}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="px-4 -mt-5 relative z-10">
        <div className="rounded-[22px] border border-white/80 bg-white/85 p-4 grid grid-cols-4 gap-3 shadow-[0_10px_26px_rgba(52,120,82,0.10)] backdrop-blur-xl animate-fade-in-up">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-sm`}>
                  <Icon size={16} className="text-white" />
                </div>
                <span className="text-base font-bold text-[#18352A]">{stat.value}</span>
                <span className="text-[10px] text-[#789084]">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-4 pt-5 pb-28 space-y-5">
        {/* Detailed Info */}
        <section className="rounded-[22px] border border-white/80 bg-white/90 shadow-[0_10px_26px_rgba(52,120,82,0.08)] overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="p-4 border-b border-[#E4F1EA]">
            <h3 className="text-sm font-bold text-[#18352A]">基本信息</h3>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#789084]">学号</span>
              <span className="text-sm font-semibold text-[#18352A]">{studentInfo.studentId}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#789084]">班级</span>
              <span className="text-sm font-semibold text-[#18352A]">{studentInfo.class}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#789084]">专业</span>
              <span className="text-sm font-semibold text-[#18352A]">{studentInfo.major}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#789084]">手机号</span>
              <span className="text-sm font-semibold text-[#18352A]">{studentInfo.phone}</span>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="rounded-[22px] border border-white/80 bg-white/90 shadow-[0_10px_26px_rgba(52,120,82,0.08)] overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="divide-y divide-[#E4F1EA]">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="w-full px-4 py-3.5 flex items-center gap-3 text-left active:bg-[#F3FBF7] transition-colors"
                >
                  <div
                    className="w-9 h-9 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0"
                    style={{ backgroundColor: item.bg }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#18352A]">{item.label}</div>
                    <div className="text-[11px] text-[#789084] mt-0.5">{item.desc}</div>
                  </div>
                  <ChevronRight size={16} className="text-[#AABDB4] flex-shrink-0" />
                </button>
              );
            })}
          </div>
        </section>

        {/* Study Progress Summary */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#22B86F] to-[#2EBFA5] flex items-center justify-center">
              <BookOpen size={14} className="text-white" />
            </div>
            <h2 className="text-base font-bold text-[#18352A]">学习进度</h2>
          </div>
          <div className="rounded-[22px] border border-white/80 bg-white/90 p-4 space-y-3 shadow-[0_10px_26px_rgba(52,120,82,0.08)]">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-semibold text-[#496258]">安全教育</span>
                <span className="text-xs font-bold text-[#22B86F]">75%</span>
              </div>
              <div className="h-2 bg-[#E7F3ED] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#22B86F] to-[#2EBFA5] rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-semibold text-[#496258]">技能培训</span>
                <span className="text-xs font-bold text-[#2EBFA5]">60%</span>
              </div>
              <div className="h-2 bg-[#E7F3ED] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#2EBFA5] to-[#8BE6D7] rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-semibold text-[#496258]">普法课堂</span>
                <span className="text-xs font-bold text-[#F59E0B]">45%</span>
              </div>
              <div className="h-2 bg-[#E7F3ED] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FFB366] rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Version */}
        <div className="text-center text-[10px] text-[#AABDB4] pt-2">
          安全教育平台 v1.0.0
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
}
