import HeroSlider from '../components/HeroSlider';
import MainSections from '../components/MainSections';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-blue-950">
      <main className="flex-1">
        <HeroSlider />
        <MainSections />
      </main>
    </div>
  );
}