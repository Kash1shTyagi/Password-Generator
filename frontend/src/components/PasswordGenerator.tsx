import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaLock, FaAsterisk, FaExclamation } from 'react-icons/fa';

export default function PasswordGenerator() {
  const [length, setLength] = useState<string>('12');
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState('');
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (password && outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [password]);

  const handleLengthChange = (val: string) => {
    if (val === '' || /^\d+$/.test(val)) setLength(val);
  };
  const handleLengthBlur = () => {
    if (length === '') return setLength('4');
    let n = parseInt(length, 10);
    if (isNaN(n)) n = 4;
    if (n < 4) n = 4;
    if (n > 32) n = 32;
    setLength(n.toString());
  };
  const handleSliderChange = (val: string) => setLength(val);

  const generate = async () => {
    const finalLength = parseInt(length, 10) || 4;
    try {
      const { data } = await axios.post('/api/generate-password', {
        length: finalLength,
        includeLetters,
        includeNumbers,
        includeSpecial
      });
      setPassword(data.password);
    } catch {
      setPassword('❗ Error generating password');
    }
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generate();
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full bg-white/10 backdrop-blur-lg p-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-8">
          <FaLock size={64} className="text-teal-400 mb-2" />
          <h1 className="text-5xl font-extrabold text-white text-center">
            Password Generator
          </h1>
        </div>

        <form onSubmit={onSubmit} className="w-full max-w-xl bg-white/20 rounded-2xl p-6 space-y-6">
          <div>
            <label className="block text-white mb-2 font-medium">
              Length (Min:4, Max:32)
            </label>

            <input
              type="number"
              min={4}
              max={32}
              value={length}
              onChange={e => handleLengthChange(e.target.value)}
              onBlur={handleLengthBlur}
              className="w-full h-10 bg-white/30 text-white border-white/50 rounded-lg px-2 mb-2"
            />

            <input
              type="range"
              min={4}
              max={32}
              value={length || '4'}
              onChange={e => handleSliderChange(e.target.value)}
              className="w-full h-2 bg-white/30 rounded-lg accent-teal-400 hover:accent-magenta-400 transition"
            />
          </div>

          <div className="space-y-4">
            {/* Alphabets: "Az" & "Za" */}
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={includeLetters}
                onChange={e => setIncludeLetters(e.target.checked)}
                className="h-5 w-5 text-teal-400 bg-white/30 border-white/50 rounded"
              />
              <span className="text-teal-400 font-semibold">Az</span>
              <span className="text-teal-400 font-semibold">Za</span>
              <span className="text-white text-lg font-medium">Alphabets</span>
            </label>

            {/* Numbers: "1‑9" & "9‑1" */}
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={e => setIncludeNumbers(e.target.checked)}
                className="h-5 w-5 text-teal-400 bg-white/30 border-white/50 rounded"
              />
              <span className="text-teal-400 font-semibold">1‑9</span>
              <span className="text-teal-400 font-semibold">9‑1</span>
              <span className="text-white text-lg font-medium">Numbers</span>
            </label>

            {/* Special Characters */}
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={includeSpecial}
                onChange={e => setIncludeSpecial(e.target.checked)}
                className="h-5 w-5 text-teal-400 bg-white/30 border-white/50 rounded"
              />
              <FaAsterisk className="text-teal-400" />
              <FaExclamation className="text-teal-400" />
              <span className="text-white text-lg font-medium">Special Characters</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-400 to-magenta-400
                       text-black font-semibold rounded-xl shadow-lg hover:shadow-xl
                       transition"
          >
            Generate Password
          </button>

          {password && (
            <div
              ref={outputRef}
              className="p-4 bg-white/20 border border-white/30 rounded-lg
                         text-white font-mono text-center break-words select-all"
            >
              {password}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
