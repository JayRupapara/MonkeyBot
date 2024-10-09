import Navigation from '../components/Navigation';

const Games = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center">
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">Coming soon...</h1>
      </div>

      {/* Bottom Navigation */}
      <Navigation className="sticky bottom-0" />
    </div>
  );
};

export default Games;
