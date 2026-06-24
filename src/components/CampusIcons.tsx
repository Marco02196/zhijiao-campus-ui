import React from "react";

// ─────────────────────────────────────────────
// Shared prop type
// ─────────────────────────────────────────────
interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// ─────────────────────────────────────────────
// 1. HomeIcon — 首页 Tab
//    对应 UI 底部 Tab Bar 第一项"首页"
// ─────────────────────────────────────────────
export const HomeIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Roof */}
    <path d="M3 10.5L12 3l9 7.5" />
    {/* Walls */}
    <path d="M5 8.5V20a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V8.5" />
  </svg>
);

// ─────────────────────────────────────────────
// 2. LifeIcon — 生活 Tab
//    对应 UI 底部 Tab Bar 第二项"生活"
// ─────────────────────────────────────────────
export const LifeIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Compass outer ring */}
    <circle cx="12" cy="12" r="9" />
    {/* Compass needle north (up-right) */}
    <polygon points="12,12 14.5,6 12,8" fill={color} stroke="none" />
    {/* Compass needle south (down-left) */}
    <polygon
      points="12,12 9.5,18 12,16"
      fill={color}
      stroke="none"
      opacity="0.4"
    />
  </svg>
);

// ─────────────────────────────────────────────
// 3. StudyIcon — 学习 Tab
//    对应 UI 底部 Tab Bar 第三项"学习"
// ─────────────────────────────────────────────
export const StudyIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Open book left page */}
    <path d="M12 6C10 5 7 5 4 6v13c3-1 6-1 8 0V6z" />
    {/* Open book right page */}
    <path d="M12 6c2-1 5-1 8 0v13c-3-1-6-1-8 0V6z" />
    {/* Spine */}
    <line x1="12" y1="6" x2="12" y2="19" />
  </svg>
);

// ─────────────────────────────────────────────
// 4. UserIcon — 我的 Tab
//    对应 UI 底部 Tab Bar（"我的"或个人中心入口）
// ─────────────────────────────────────────────
export const UserIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Head */}
    <circle cx="12" cy="8" r="3.5" />
    {/* Shoulders */}
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

// ─────────────────────────────────────────────
// 5. MegaphoneIcon — 官方消息
//    对应 UI 顶部"官方消息"公告卡片区域
// ─────────────────────────────────────────────
export const MegaphoneIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Megaphone cone */}
    <path d="M19 5v14l-9-4H5a1 1 0 01-1-1v-4a1 1 0 011-1h5L19 5z" />
    {/* Sound wave 1 */}
    <path d="M21 8.5c.8 1 .8 3 0 4" />
    {/* Handle / cord at bottom */}
    <path d="M7 15v4" />
  </svg>
);

// ─────────────────────────────────────────────
// 6. CalendarIcon — 课表
//    对应 UI 智慧校园模块第一个按钮"课表"
// ─────────────────────────────────────────────
export const CalendarIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Calendar body */}
    <rect x="3" y="5" width="18" height="16" rx="2" />
    {/* Header band */}
    <line x1="3" y1="10" x2="21" y2="10" />
    {/* Pin left */}
    <line x1="8" y1="3" x2="8" y2="7" />
    {/* Pin right */}
    <line x1="16" y1="3" x2="16" y2="7" />
    {/* Date dot */}
    <rect x="8" y="13" width="2" height="2" rx="0.5" fill={color} stroke="none" />
    <rect x="13" y="13" width="2" height="2" rx="0.5" fill={color} stroke="none" />
    <rect x="8" y="17" width="2" height="2" rx="0.5" fill={color} stroke="none" />
  </svg>
);

// ─────────────────────────────────────────────
// 7. WaterIcon — 水电
//    对应 UI 智慧校园模块第二个按钮"水电"
// ─────────────────────────────────────────────
export const WaterIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Water drop */}
    <path d="M12 3C12 3 6 9.5 6 14a6 6 0 0012 0C18 9.5 12 3 12 3z" />
    {/* Shine / highlight inside drop */}
    <path d="M9.5 14.5a3 3 0 003-2" strokeWidth="1.4" opacity="0.5" />
  </svg>
);

// ─────────────────────────────────────────────
// 8. CheckinIcon — 报到
//    对应 UI 智慧校园模块第三个按钮"报到"
// ─────────────────────────────────────────────
export const CheckinIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Clipboard body */}
    <rect x="5" y="4" width="14" height="17" rx="2" />
    {/* Clipboard top clip */}
    <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
    {/* Check mark */}
    <polyline points="8.5,12.5 11,15 15.5,10" />
  </svg>
);

// ─────────────────────────────────────────────
// 9. BedIcon — 宿舍
//    对应 UI 智慧校园模块第四个按钮"宿舍"
// ─────────────────────────────────────────────
export const BedIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Bed frame */}
    <path d="M3 17V9a1 1 0 011-1h16a1 1 0 011 1v8" />
    {/* Headboard */}
    <line x1="3" y1="9" x2="3" y2="6" />
    <line x1="21" y1="9" x2="21" y2="6" />
    <line x1="3" y1="6" x2="21" y2="6" />
    {/* Mattress / blanket */}
    <path d="M3 13h18" />
    {/* Pillow */}
    <rect x="14" y="10" width="5" height="3" rx="1.5" />
    {/* Base / legs */}
    <line x1="5" y1="17" x2="5" y2="20" />
    <line x1="19" y1="17" x2="19" y2="20" />
  </svg>
);

// ─────────────────────────────────────────────
// 10. AirIcon — 空调
//     对应 UI 右侧空调控制卡片
// ─────────────────────────────────────────────
export const AirIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* AC unit body */}
    <rect x="2" y="6" width="20" height="8" rx="2" />
    {/* Panel line */}
    <line x1="2" y1="10" x2="22" y2="10" />
    {/* Vent indicator dot */}
    <circle cx="18" cy="8" r="1" fill={color} stroke="none" />
    {/* Air flow waves */}
    <path d="M6 17c1-1 2-1 3 0s2 1 3 0" />
    <path d="M9 20c1-1 2-1 3 0" />
  </svg>
);

// ─────────────────────────────────────────────
// 11. PackageIcon — 快递中心
//     对应 UI 校园服务区"快递中心"卡片
// ─────────────────────────────────────────────
export const PackageIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Box body */}
    <path d="M20 7L12 3 4 7v10l8 4 8-4V7z" />
    {/* Top fold left */}
    <polyline points="4,7 12,11 20,7" />
    {/* Center spine */}
    <line x1="12" y1="11" x2="12" y2="21" />
    {/* Tape stripe on front face */}
    <line x1="8" y1="5" x2="12" y2="7" />
    <line x1="12" y1="7" x2="16" y2="5" />
  </svg>
);

// ─────────────────────────────────────────────
// 12. BikeIcon — 共享单车
//     对应 UI 校园服务区"共享单车"卡片
// ─────────────────────────────────────────────
export const BikeIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Left wheel */}
    <circle cx="5.5" cy="16" r="3.5" />
    {/* Right wheel */}
    <circle cx="18.5" cy="16" r="3.5" />
    {/* Frame: seat tube down to bottom bracket */}
    <path d="M9 8h4l3 8" />
    {/* Frame: chainstay left */}
    <path d="M9 8L5.5 16" />
    {/* Frame: top tube / down tube */}
    <path d="M9 8l4.5-2.5" />
    {/* Handlebar */}
    <path d="M13.5 5.5h3" />
    {/* Seat */}
    <line x1="7" y1="8" x2="11" y2="8" />
  </svg>
);

// ─────────────────────────────────────────────
// 13. BusIcon — 实时公交
//     对应 UI 校园服务区"实时公交"卡片
// ─────────────────────────────────────────────
export const BusIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Bus body */}
    <rect x="3" y="5" width="18" height="13" rx="2" />
    {/* Windows row */}
    <rect x="6" y="8" width="4" height="3" rx="1" />
    <rect x="14" y="8" width="4" height="3" rx="1" />
    {/* Floor line / undercarriage */}
    <line x1="3" y1="15" x2="21" y2="15" />
    {/* Left wheel */}
    <circle cx="7.5" cy="18.5" r="1.5" fill={color} stroke="none" />
    {/* Right wheel */}
    <circle cx="16.5" cy="18.5" r="1.5" fill={color} stroke="none" />
    {/* Door */}
    <line x1="11" y1="15" x2="11" y2="18" />
  </svg>
);

// ─────────────────────────────────────────────
// 14. SosIcon — SOS 紧急救援
//     对应 UI 底部红色"SOS 紧急救援"横幅卡片
// ─────────────────────────────────────────────
export const SosIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Warning triangle */}
    <path d="M12 3L2 20h20L12 3z" />
    {/* Exclamation stem */}
    <line x1="12" y1="10" x2="12" y2="15" />
    {/* Exclamation dot */}
    <circle cx="12" cy="17.5" r="0.8" fill={color} stroke="none" />
  </svg>
);

// ─────────────────────────────────────────────
// Icon Map
// ─────────────────────────────────────────────
export const campusIcons = {
  home: HomeIcon,
  life: LifeIcon,
  study: StudyIcon,
  user: UserIcon,
  megaphone: MegaphoneIcon,
  calendar: CalendarIcon,
  water: WaterIcon,
  checkin: CheckinIcon,
  bed: BedIcon,
  air: AirIcon,
  package: PackageIcon,
  bike: BikeIcon,
  bus: BusIcon,
  sos: SosIcon,
} as const;

export type CampusIconName = keyof typeof campusIcons;

// ─────────────────────────────────────────────
// Generic renderer (optional utility)
// ─────────────────────────────────────────────
interface CampusIconProps extends IconProps {
  name: CampusIconName;
}

export const CampusIcon: React.FC<CampusIconProps> = ({ name, ...rest }) => {
  const Icon = campusIcons[name];
  return <Icon {...rest} />;
};
