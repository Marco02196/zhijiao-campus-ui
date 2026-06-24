import { useCallback, useState } from 'react';
import BottomNav, { type TabKey } from './components/BottomNav';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SafetyDetailPage from './pages/SafetyDetailPage';

type Page = 'home' | 'safetyDetail';

function PlaceholderPage({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="placeholder-page">
      <section className="placeholder-card">
        <p>科教 e 站</p>
        <h1>{title}</h1>
        <span>{desc}</span>
      </section>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleTabChange = useCallback((tab: TabKey) => {
    setActiveTab(tab);
    setCurrentPage('home');
  }, []);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  const handleBack = useCallback(() => {
    setCurrentPage('home');
  }, []);

  const renderContent = () => {
    if (currentPage === 'safetyDetail') {
      return <SafetyDetailPage onBack={handleBack} />;
    }

    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'life':
        return <PlaceholderPage title="生活服务" desc="生活模块正在接入快递、单车、公交和宿舍服务。" />;
      case 'study':
        return <PlaceholderPage title="学习中心" desc="学习模块正在接入课表、课程资源和成长记录。" />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="mobile-container">
      <main className="content-scrollable">{renderContent()}</main>
      {currentPage === 'home' && <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />}
    </div>
  );
}
