import { HomeIcon, LifeIcon, StudyIcon, UserIcon } from './CampusIcons';

export type TabKey = 'home' | 'life' | 'study' | 'profile';

interface BottomNavProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const tabs = [
  { key: 'home', label: '首页', icon: HomeIcon, className: 'tab-home' },
  { key: 'life', label: '生活', icon: LifeIcon, className: 'tab-life' },
  { key: 'study', label: '学习', icon: StudyIcon, className: 'tab-study' },
  { key: 'profile', label: '我的', icon: UserIcon, className: 'tab-user' },
] satisfies Array<{
  key: TabKey;
  label: string;
  icon: typeof HomeIcon;
  className: string;
}>;

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="tabbar safe-area-bottom" aria-label="底部导航">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.key;

        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onTabChange(tab.key)}
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
            className={`tab ${tab.className}${isActive ? ' active' : ''}`}
          >
            <Icon size={22} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
