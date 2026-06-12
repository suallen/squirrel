const Squirrel = ({ name, color, emoji }: { name: string; color: string; emoji: string }) => (
  <div className="flex flex-col items-center animate-fadeIn">
    <div className={`relative w-32 h-32 rounded-full ${color} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
      <span className="text-6xl">{emoji}</span>
    </div>
    <h2 className="mt-6 text-xl font-semibold text-gray-800">{name}</h2>
  </div>
);

export default function Index() {
  const squirrels = [
    { name: 'Nutkin', color: 'bg-amber-200', emoji: '🐿️' },
    { name: 'Chestnut', color: 'bg-orange-200', emoji: '🐿️' },
    { name: 'Acorn', color: 'bg-yellow-100', emoji: '🐿️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 px-4">
      {/* Header */}
      <div className="pt-12 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slideDown bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
          Welcome to Squirrel Land
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Meet our three adorable squirrel friends
        </p>
      </div>

      {/* Squirrels Grid */}
      <div className="max-w-6xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 px-4 md:px-0">
          {squirrels.map((squirrel, index) => (
            <div
              key={squirrel.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-popIn"
            >
              <Squirrel {...squirrel} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Accent */}
      <div className="text-center pb-8">
        <p className="text-gray-500 text-sm">
          🌰 A delightful squirrel experience 🌰
        </p>
      </div>
    </div>
  );
}
