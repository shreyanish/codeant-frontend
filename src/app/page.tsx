import RepositoryHeader from '@/components/Repositories/RepositoryHeader';
import RepositoryList from '@/components/Repositories/RepositoryList';
import './styles.scss'

export default function Home() {
  return (
    <div className="home-parent">
      <RepositoryHeader />
      <RepositoryList />
    </div>
  );
}