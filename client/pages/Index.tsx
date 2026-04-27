import { motion } from 'framer-motion';

const Squirrel = ({ name, color, emoji }: { name: string; color: string; emoji: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center"
  >
    <div className={`relative w-32 h-32 rounded-full ${color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer`}>
      <span className="text-6xl">{emoji}</span>
    </div>
    <h2 className="mt-6 text-xl font-semibold text-gray-800">{name}</h2>
  </motion.div>
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
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          Welcome to Squirrel Land
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Meet our three adorable squirrel friends
        </motion.p>
      </div>

      {/* Squirrels Grid */}
      <div className="max-w-6xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 px-4 md:px-0">
          {squirrels.map((squirrel, index) => (
            <motion.div
              key={squirrel.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Squirrel {...squirrel} />
            </motion.div>
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
