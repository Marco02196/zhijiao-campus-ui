import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import {
  AirIcon,
  BedIcon,
  BikeIcon,
  BusIcon,
  CalendarIcon,
  CheckinIcon,
  MegaphoneIcon,
  PackageIcon,
  SosIcon,
  WaterIcon,
} from '../components/CampusIcons';

interface HomePageProps {
  onNavigate?: (page: 'safetyDetail') => void;
}

type WindMode = '自动' | '上下' | '左右' | '固定';
type AcMode = '冷风' | '热风';

const quickPages = [
  [
    { label: '课表', icon: CalendarIcon, tone: 'qi-blue' },
    { label: '水电', icon: WaterIcon, tone: 'qi-mint' },
    { label: '报到', icon: CheckinIcon, tone: 'qi-amber' },
    { label: '宿舍', icon: BedIcon, tone: 'qi-lavender' },
  ],
  [
    { label: '网络', icon: WifiIcon, tone: 'qi-cyan' },
    { label: '客服', icon: HeadsetIcon, tone: 'qi-mint' },
    { label: '充值', icon: CardIcon, tone: 'qi-amber' },
    { label: '维修', icon: RepairIcon, tone: 'qi-pink' },
  ],
];

const services = [
  {
    title: '快递中心',
    desc: '顺丰/中通待取件',
    badge: '2个待取',
    icon: PackageIcon,
    iconClass: 'si-orange',
    badgeClass: 'badge-red',
  },
  {
    title: '共享单车',
    desc: '哈啰/美团/青桔',
    badge: '12个停车点',
    icon: BikeIcon,
    iconClass: 'si-green',
    badgeClass: 'badge-green',
  },
  {
    title: '实时公交',
    desc: '增城14路 · 科教城北',
    badge: '2分钟',
    icon: BusIcon,
    iconClass: 'si-blue',
    badgeClass: 'badge-green',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [airOn, setAirOn] = useState(true);
  const [temperature, setTemperature] = useState(24);
  const [acMode, setAcMode] = useState<AcMode>('冷风');
  const [windMode, setWindMode] = useState<WindMode>('自动');
  const [campusPage, setCampusPage] = useState(0);
  const [supportOpen, setSupportOpen] = useState(false);
  const [fabPosition, setFabPosition] = useState({ left: 348, top: 620 });
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({
    active: false,
    moved: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
  });

  const rangeProgress = `${((temperature - 16) / 14) * 100}%`;

  const clampFabPosition = useCallback((left: number, top: number) => {
    const canvas = canvasRef.current;
    const width = canvas?.clientWidth ?? 390;
    const height = canvas?.clientHeight ?? 844;
    const fabSize = 42;
    const tabbarSpace = 86;
    const maxTop = Math.max(40, height - fabSize - tabbarSpace);

    return {
      left: Math.min(width - fabSize, Math.max(0, left)),
      top: Math.min(maxTop, Math.max(40, top)),
    };
  }, []);

  const snapFabToEdge = useCallback((left: number, top: number) => {
    const canvasWidth = canvasRef.current?.clientWidth ?? 390;
    const fabSize = 42;
    const targetLeft = left + fabSize / 2 < canvasWidth / 2 ? 0 : canvasWidth - fabSize;
    setFabPosition(clampFabPosition(targetLeft, top));
  }, [clampFabPosition]);

  const handleFabPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;

    dragRef.current = {
      active: true,
      moved: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: event.clientX - canvasRect.left - fabPosition.left,
      offsetY: event.clientY - canvasRect.top - fabPosition.top,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleFabPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag.active || event.pointerId !== drag.pointerId) return;

    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (Math.hypot(dx, dy) > 5) {
      drag.moved = true;
    }
    if (!drag.moved) return;

    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;
    event.preventDefault();
    setFabPosition(clampFabPosition(event.clientX - canvasRect.left - drag.offsetX, event.clientY - canvasRect.top - drag.offsetY));
  };

  const handleFabPointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag.active || event.pointerId !== drag.pointerId) return;

    dragRef.current.active = false;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);

    if (drag.moved) {
      snapFabToEdge(fabPosition.left, fabPosition.top);
      return;
    }
    setSupportOpen((open) => !open);
  };

  useEffect(() => {
    const handleResize = () => {
      setFabPosition((position) => clampFabPosition(position.left, position.top));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [clampFabPosition]);

  return (
    <div className="campus-home" ref={canvasRef} aria-label="科教 e 站智慧校园首页">
      <section className="hero">
        <div className="hero-copy">
          <h1>科教 e 站</h1>
          <p className="loc">
            <LocationIcon />
            广东省广州市增城区朱村街道
          </p>
          <p className="updated">更新于：06/17 09:08</p>
        </div>

        <div className="hero-actions">
          <button type="button" aria-label="扫一扫"><ScanIcon /></button>
        </div>
      </section>

      <section className="status-card">
        <div className="sc-item">
          <span className="sc-label">今日待办</span>
          <div className="sc-num">4<span>项</span></div>
          <span className="sc-sub">2项需及时处理</span>
        </div>
        <div className="sc-item sc-center">
          <UsersIcon />
          <strong>新生报到进行中</strong>
          <small>迎新服务 · 信息确认 · 宿舍分配</small>
        </div>
        <div className="sc-item">
          <span className="sc-label">本周课程</span>
          <div className="sc-num">18<span>节</span></div>
          <span className="sc-sub">今日 3 节课</span>
        </div>
      </section>

      <div className="home-content">
        <section className="msg-card card">
          <div className="msg-icon-plate"><MegaphoneIcon size={24} /></div>
          <div className="msg-list">
            <div className="msg-row"><span className="msg-tag">最新</span><span className="msg-text">朱村街道办安全教育活动顺利开展</span><span className="msg-time">3小时前</span></div>
            <div className="msg-row"><span className="msg-tag ghost">通知</span><span className="msg-text">关于2025年迎新期间校园交通管制的通知</span><span className="msg-time">1天前</span></div>
            <button className="msg-more-btn" type="button" aria-label="查看全部官方消息">查看全部 ›</button>
          </div>
        </section>

        <div className="dash-row">
          <section className="dash-card card">
            <h2>智慧校园</h2>
            <div className="campus-carousel" aria-label="智慧校园服务分页">
              <div className="campus-pages" data-page={campusPage}>
                {quickPages.map((page, pageIndex) => (
                  <div className="campus-page" key={pageIndex}>
                    <div className="quick-grid">
                      {page.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button className="quick-btn" type="button" aria-label={item.label} key={item.label}>
                            <span className={`q-icon ${item.tone}`}><Icon size={20} /></span>
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="campus-dots" aria-label="智慧校园分页">
              {[0, 1].map((page) => (
                <button
                  key={page}
                  className={`campus-dot${campusPage === page ? ' active' : ''}`}
                  type="button"
                  aria-label={`第${page + 1}页`}
                  aria-pressed={campusPage === page}
                  onClick={() => setCampusPage(page)}
                />
              ))}
            </div>
            <div className="campus-hotspot" aria-label="校园热点">
              <div className="hotspot-head">
                <strong>校园热点</strong>
                <button className="hotspot-more" type="button" aria-label="查看更多校园热点">查看更多 &gt;</button>
              </div>
              <div className="hotspot-list">
                <div className="hotspot-row"><span className="hotspot-title">新生报到流程提醒</span><span className="hotspot-time">2小时前</span></div>
                <div className="hotspot-row"><span className="hotspot-title">校园卡充值服务开放</span><span className="hotspot-time">今日</span></div>
              </div>
            </div>
          </section>

          <section className="dash-card card">
            <div className="ac-head">
              <h2>宿舍空调</h2>
              <button
                className={`ac-switch${airOn ? ' on' : ''}`}
                type="button"
                aria-label="空调开关"
                aria-pressed={airOn}
                onClick={() => setAirOn((value) => !value)}
              />
            </div>
            <div className="ac-meta">昨日用电</div>
            <div className="ac-power-row">
              <span className="ac-power">3.8</span><span className="ac-power-unit">度</span>
              <AirIcon size={28} className="ac-inline-icon" />
              <span className="ac-mode-group" aria-label="空调模式">
                {(['冷风', '热风'] as const).map((mode) => (
                  <button
                    key={mode}
                    className={`ac-mode${acMode === mode ? ' active' : ''}`}
                    type="button"
                    aria-label={mode}
                    aria-pressed={acMode === mode}
                    onClick={() => setAcMode(mode)}
                  >
                    {mode === '冷风' ? <ColdIcon /> : <HotIcon />}
                  </button>
                ))}
              </span>
            </div>
            <div className="ac-temp-row">
              <ThermometerIcon />
              <span className="ac-temp">{temperature}°C</span>
              <span className="ac-stepper">
                <button type="button" aria-label="降温" onClick={() => setTemperature((value) => Math.max(16, value - 1))}>−</button>
                <button type="button" aria-label="升温" onClick={() => setTemperature((value) => Math.min(30, value + 1))}>+</button>
              </span>
            </div>
            <div className="ac-controls">
              <label className="ac-control">
                <span className="ac-control-head"><span>温度调节</span><output>{temperature}°C</output></span>
                <input
                  className="ac-range"
                  type="range"
                  min="16"
                  max="30"
                  value={temperature}
                  aria-label="温度调节"
                  style={{ '--range-progress': rangeProgress } as CSSProperties}
                  onChange={(event) => setTemperature(Number(event.target.value))}
                />
              </label>
              <div className="ac-control">
                <span className="ac-control-head"><span>风向调节</span><output>{windMode}</output></span>
                <span className="wind-segment" role="group" aria-label="风向调节">
                  {(['自动', '上下', '左右', '固定'] as const).map((mode) => (
                    <button
                      key={mode}
                      className={windMode === mode ? 'active' : ''}
                      type="button"
                      aria-pressed={windMode === mode}
                      onClick={() => setWindMode(mode)}
                    >
                      {mode}
                    </button>
                  ))}
                </span>
              </div>
            </div>
          </section>
        </div>

        <div className="svc-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button className="svc-card card" type="button" aria-label={service.title} key={service.title}>
                <span className={`svc-icon ${service.iconClass}`}><Icon size={22} /></span>
                <span className="svc-info">
                  <strong>{service.title} <span className={`svc-badge ${service.badgeClass}`}>{service.badge}</span></strong>
                  <span>{service.desc}</span>
                </span>
                <span className="svc-chev" />
              </button>
            );
          })}
          <button className="svc-card card sos" type="button" aria-label="SOS 紧急救援" onClick={() => onNavigate?.('safetyDetail')}>
            <span className="svc-icon si-red"><SosIcon size={22} /></span>
            <span className="svc-info"><strong>SOS 紧急救援</strong><span>紧急情况 · 一键求助</span></span>
            <span className="svc-chev" />
          </button>
        </div>
      </div>

      <button
        className={`support-fab${isDragging ? ' dragging' : ''}`}
        type="button"
        aria-label="智能客服"
        aria-expanded={supportOpen}
        style={{ left: fabPosition.left, top: fabPosition.top }}
        onPointerDown={handleFabPointerDown}
        onPointerMove={handleFabPointerMove}
        onPointerUp={handleFabPointerUp}
        onPointerCancel={() => {
          dragRef.current.active = false;
          setIsDragging(false);
          snapFabToEdge(fabPosition.left, fabPosition.top);
        }}
      >
        <RobotIcon />
        <span>智能客服</span>
      </button>

      <section className={`support-panel${supportOpen ? ' open' : ''}`} aria-label="智能客服面板" aria-hidden={!supportOpen}>
        <div className="support-head">
          <strong>智能客服</strong>
          <button className="support-close" type="button" aria-label="关闭" onClick={() => setSupportOpen(false)}><CloseIcon /></button>
        </div>
        <div className="support-list">
          <button className="support-option" type="button" aria-label="常见问题"><QuestionIcon /><span>常见问题</span></button>
          <button className="support-option" type="button" aria-label="在线咨询"><MessageIcon /><span>在线咨询</span></button>
          <button className="support-option" type="button" aria-label="反馈问题"><ShieldIcon /><span>反馈问题</span></button>
        </div>
      </section>
    </div>
  );
}

function LocationIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" /></svg>;
}

function ScanIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M8 3H6a3 3 0 0 0-3 3v2M18 3h2a3 3 0 0 1 3 3v2M3 16v2a3 3 0 0 0 3 3h2M21 16v2a3 3 0 0 1-3 3h-2M8 12h8" /></svg>;
}

function MessageIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.3c-1 0-2-.2-2.9-.5L5 21l1.2-4.2A7.5 7.5 0 0 1 12.5 3a8.4 8.4 0 0 1 8.5 8.5z" /><path d="M9 11.5h6M9 15h4" /></svg>;
}

function UsersIcon() {
  return <svg width="30" height="24" viewBox="0 0 40 28" fill="none" stroke="#1b8c4e" strokeWidth="2.8" strokeLinecap="round"><circle cx="14" cy="9" r="5.5" /><path d="M4 25c1.2-6 5-9.5 10-9.5s8.8 3.5 10 9.5" /><circle cx="30" cy="10" r="4.5" opacity="0.7" /><path d="M27 18c3.8.2 7 2.8 8 7" opacity="0.7" /></svg>;
}

function WifiIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 9.5a11.2 11.2 0 0 1 15 0" /><path d="M7.5 13a6.4 6.4 0 0 1 9 0" /><path d="M10.5 16.5a2.2 2.2 0 0 1 3 0" /><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" /></svg>;
}

function HeadsetIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12a7 7 0 0 1 14 0v4a3 3 0 0 1-3 3h-2" /><path d="M5 12h3v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z" /><path d="M19 12h-3v5h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z" /><path d="M11 19h3" /></svg>;
}

function CardIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="3" /><path d="M4 10h16M8 15h4M15.5 14.5h2" /></svg>;
}

function RepairIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 5.2a4.2 4.2 0 0 0 4.3 5l-7.9 7.9a3 3 0 0 1-4.2-4.2l7.8-7.9z" /><circle cx="8.8" cy="15.2" r="1.2" fill="currentColor" stroke="none" /></svg>;
}

function ColdIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M5 6.5l14 11M19 6.5l-14 11M8.5 4.7 12 7l3.5-2.3M8.5 19.3 12 17l3.5 2.3M3.5 10.2 7.3 12l-3.8 1.8M20.5 10.2 16.7 12l3.8 1.8" /></svg>;
}

function HotIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2.8v2.1M12 19.1v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" /></svg>;
}

function ThermometerIcon() {
  return <svg width="16" height="22" viewBox="0 0 16 26" fill="none" className="thermometer-icon"><path d="M8 3v11a5 5 0 1 1-5 5c0-2 1.2-3.7 3-4.6V6a2 2 0 0 1 4 0v8.4c1.8.9 3 2.6 3 4.6a5 5 0 0 1-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function RobotIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="7" width="14" height="11" rx="4" /><path d="M12 7V4M9 4h6" /><circle cx="8.8" cy="12" r="0.8" fill="currentColor" stroke="none" /><circle cx="15.2" cy="12" r="0.8" fill="currentColor" stroke="none" /><path d="M9.5 15.5h5" /></svg>;
}

function CloseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>;
}

function QuestionIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M9.8 9a2.4 2.4 0 0 1 4.5 1.2c0 1.8-2.3 2-2.3 3.7M12 17.5h.01" /></svg>;
}

function ShieldIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 3.8 6.8v5.8c0 4.2 3.4 6.8 8.2 8.4 4.8-1.6 8.2-4.2 8.2-8.4V6.8L12 3Z" /><path d="M12 8v5M12 16.5h.01" /></svg>;
}
