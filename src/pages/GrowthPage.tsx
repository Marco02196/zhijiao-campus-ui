import { useState } from 'react';
import {
  Play, Pause, Shield, MapPin, Fence, Wifi, Smartphone,
  Check, Heart, Eye, Headphones, Bell,
  Signal, Globe, AlertTriangle
} from 'lucide-react';

const carriers = [
  {
    id: 'mobile',
    name: '中国移动',
    color: 'from-[#2563EB] to-[#3B82F6]',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    icon: Signal,
    available: true,
  },
  {
    id: 'unicom',
    name: '中国联通',
    color: 'from-[#EA580C] to-[#F97316]',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    icon: Globe,
    available: true,
  },
  {
    id: 'telecom',
    name: '中国电信',
    color: 'from-[#0891B2] to-[#06B6D4]',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    icon: Wifi,
    available: true,
  },
  {
    id: 'broadnet',
    name: '中国广电',
    color: 'from-[#94A3B8] to-[#CBD5E1]',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-400',
    icon: Smartphone,
    available: false,
  },
];

const guardianFeatures = [
  {
    icon: Shield,
    title: 'AI通话反诈分析',
    desc: '智能识别诈骗电话，实时拦截可疑来电，守护孩子通信安全',
    color: 'from-[#DC2626] to-[#EF4444]',
    bg: 'bg-red-50',
  },
  {
    icon: MapPin,
    title: '实时定位',
    desc: '随时查看孩子位置，上下学路途安心，一键导航到孩子身边',
    color: 'from-[#2563EB] to-[#3B82F6]',
    bg: 'bg-blue-50',
  },
  {
    icon: Fence,
    title: '电子围栏',
    desc: '设置安全活动范围，进出围栏自动提醒，守护安全边界',
    color: 'from-[#10B981] to-[#34D399]',
    bg: 'bg-emerald-50',
  },
  {
    icon: Eye,
    title: '上网守护',
    desc: '过滤不良网站信息，合理管控上网时长，培养健康用网习惯',
    color: 'from-[#8B5CF6] to-[#A78BFA]',
    bg: 'bg-violet-50',
  },
];

const highlights = [
  { icon: Heart, title: '家长放心', desc: '全方位守护孩子安全' },
  { icon: Shield, title: '反诈护航', desc: 'AI智能识别诈骗' },
  { icon: Bell, title: '实时提醒', desc: '异常情况即时通知' },
  { icon: Headphones, title: '专属服务', desc: '7x24小时客服支持' },
];

export default function GrowthPage() {
  const [activeCarrier, setActiveCarrier] = useState(carriers[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentCarrier = carriers.find(c => c.id === activeCarrier) || carriers[0];
  const CarrierIcon = currentCarrier.icon;

  return (
    <div className="min-h-full bg-[#F8FAFF]">
      {/* Header */}
      <header className="header-tech px-4 pt-5 pb-3">
        <div className="flex items-center gap-2">
          <h1 className="text-[22px] font-bold text-[#1F2937] tracking-tight">成长守护</h1>
          <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white text-[10px] font-bold">
            家长必备
          </span>
        </div>
        <p className="text-[13px] text-[#94A3B8] mt-0.5">守护孩子每一步成长，让家长更安心</p>
      </header>

      <div className="px-4 pt-4 pb-6 space-y-5">
        {/* Video Banner */}
        <section className="rounded-2xl overflow-hidden relative shadow-xl animate-fade-in-up">
          <div className="aspect-[16/9] relative">
            <img
              src="/images/card-banner.jpg"
              alt="成长守护"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 active:scale-90 transition-transform"
              >
                {isPlaying ? (
                  <Pause size={24} className="text-white" />
                ) : (
                  <Play size={24} className="text-white ml-1" />
                )}
              </button>
            </div>
            <div className="absolute bottom-3 left-4 right-4">
              <h2 className="text-white font-bold text-lg">成长守护卡</h2>
              <p className="text-white/70 text-xs mt-0.5">AI反诈 · 实时定位 · 电子围栏 · 上网守护</p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-title mb-3">为什么选择成长守护</h2>
          <div className="grid grid-cols-4 gap-2">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="card-elevated p-3 flex flex-col items-center gap-1.5 text-center">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2B7AE8] to-[#3B82F6] flex items-center justify-center shadow-sm">
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-[#1F2937]">{h.title}</span>
                  <span className="text-[9px] text-[#94A3B8] leading-tight">{h.desc}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Guardian Features */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="flex items-center gap-2 mb-3">
            <Shield size={18} className="text-[#DC2626]" />
            <h2 className="section-title">四大守护功能</h2>
          </div>
          <div className="space-y-3">
            {guardianFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className={`${feature.bg} rounded-xl p-4 flex items-start gap-3.5`}>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#1F2937]">{feature.title}</h3>
                    <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Carrier Tabs */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="section-title mb-3">选择运营商</h2>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {carriers.map((carrier) => {
              const Icon = carrier.icon;
              const isActive = activeCarrier === carrier.id;
              return (
                <button
                  key={carrier.id}
                  onClick={() => setActiveCarrier(carrier.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? carrier.available
                        ? `bg-gradient-to-r ${carrier.color} text-white shadow-md`
                        : 'bg-gradient-to-r from-[#94A3B8] to-[#CBD5E1] text-white shadow-md'
                      : 'bg-white text-[#475569] border border-[#E2E8F0]/60'
                  }`}
                >
                  <Icon size={16} />
                  {carrier.name}
                  {!carrier.available && <span className="text-[9px] opacity-70">暂不可办</span>}
                </button>
              );
            })}
          </div>
        </section>

        {/* Plan Card */}
        {currentCarrier.available ? (
          <section className="animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <div className={`${currentCarrier.bgColor} rounded-2xl p-4 flex items-center gap-3 mb-3`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentCarrier.color} flex items-center justify-center shadow-md`}>
                <CarrierIcon size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className={`text-base font-bold ${currentCarrier.textColor}`}>{currentCarrier.name}</h3>
                <p className="text-xs text-[#94A3B8]">成长守护 · 月族卡</p>
              </div>
            </div>

            {/* 唯一套餐：49元月族卡 */}
            <div className="card-elevated overflow-hidden border-2 border-[#2B7AE8]/20">
              {/* 套餐头部 */}
              <div className="bg-gradient-to-r from-[#0F2D52] via-[#1A4B8C] to-[#2563EB] px-4 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">月族卡</h3>
                      <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
                        成长守护专属
                      </span>
                    </div>
                    <p className="text-white/60 text-xs">守护孩子，家长安心之选</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-lg font-bold text-white">¥</span>
                      <span className="text-4xl font-bold text-white">49</span>
                    </div>
                    <span className="text-white/60 text-xs">/月</span>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {/* 核心功能列表 */}
                <div className="space-y-3">
                  {guardianFeatures.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.title} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={15} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-[#1F2937]">{feature.title}</span>
                        </div>
                        <Check size={16} className="text-[#10B981] flex-shrink-0" />
                      </div>
                    );
                  })}
                </div>

                {/* 额外权益 */}
                <div className="bg-[#F8FAFF] rounded-xl p-3">
                  <h4 className="text-xs font-bold text-[#475569] mb-2">基础通信权益</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-base font-bold text-[#1F2937]">20GB</div>
                      <div className="text-[10px] text-[#94A3B8]">通用流量</div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#1F2937]">200分钟</div>
                      <div className="text-[10px] text-[#94A3B8]">语音通话</div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#1F2937]">5G网络</div>
                      <div className="text-[10px] text-[#94A3B8]">极速体验</div>
                    </div>
                  </div>
                </div>

                {/* 办理信息 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#475569]">
                    <Smartphone size={14} className="text-[#94A3B8]" />
                    <span>支持{currentCarrier.name}新办或携号转网</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#475569]">
                    <Shield size={14} className="text-[#94A3B8]" />
                    <span>家长端APP免费使用，实时查看守护数据</span>
                  </div>
                </div>

                {/* 申请按钮 */}
                <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${currentCarrier.color} text-white text-sm font-bold active:scale-95 transition-transform shadow-md flex items-center justify-center gap-2`}>
                  <Shield size={18} />
                  立即办理成长守护卡
                </button>
              </div>
            </div>
          </section>
        ) : (
          /* 广电 - 不可用 */
          <section className="animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-dashed border-slate-200">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                <AlertTriangle size={28} className="text-slate-300" />
              </div>
              <h3 className="text-base font-bold text-slate-400 mb-1">暂无可办理套餐</h3>
              <p className="text-xs text-slate-400">该运营商暂未接入成长守护服务</p>
            </div>
          </section>
        )}

        {/* 家长安心提示 */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Heart size={18} className="text-[#10B981]" />
              <h3 className="text-sm font-bold text-[#065F46]">家长安心承诺</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs text-[#065F46]/80">
                <Check size={14} className="mt-0.5 flex-shrink-0 text-[#10B981]" />
                <span>AI智能反诈，让诈骗电话无缝可入，守护孩子财产安全</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[#065F46]/80">
                <Check size={14} className="mt-0.5 flex-shrink-0 text-[#10B981]" />
                <span>实时定位+电子围栏，孩子活动范围一目了然</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[#065F46]/80">
                <Check size={14} className="mt-0.5 flex-shrink-0 text-[#10B981]" />
                <span>上网守护过滤不良信息，培养健康上网习惯</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[#065F46]/80">
                <Check size={14} className="mt-0.5 flex-shrink-0 text-[#10B981]" />
                <span>异常情况即时推送，第一时间掌握孩子动态</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="h-4" />
      </div>
    </div>
  );
}
