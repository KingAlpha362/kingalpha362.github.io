import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DeveloperTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to the Alpha OS Terminal.' },
    { type: 'system', content: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-terminal', handleToggle);
    return () => window.removeEventListener('toggle-terminal', handleToggle);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    setHistory(prev => [...prev, { type: 'user', content: `visitor@alpha-os:~$ ${cmd}` }]);

    let response = '';
    
    switch (trimmedCmd) {
      case 'help':
        response = `Available commands:\n
  help     - Show this help message
  whoami   - Display current user info
  projects - Go to projects section
  skills   - Go to skills section
  contact  - Go to contact section
  clear    - Clear terminal history
  exit     - Close the terminal`;
        break;
      case 'whoami':
        response = 'visitor (Role: Future Collaborator/Employer)';
        break;
      case 'projects':
        window.location.hash = '#projects';
        response = 'Navigating to projects...';
        break;
      case 'skills':
        window.location.hash = '#features';
        response = 'Navigating to skills...';
        break;
      case 'contact':
        window.location.hash = '#contact';
        response = 'Navigating to contact...';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        setIsOpen(false);
        return;
      case 'sudo rm -rf /':
        response = 'Permission denied. Nice try though. 😉';
        break;
      case '':
        return;
      default:
        response = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    if (response) {
      setHistory(prev => [...prev, { type: 'system', content: response }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed z-[1000] ${
            isFullScreen 
              ? 'inset-4 md:inset-10' 
              : 'bottom-4 right-4 left-4 md:left-auto md:w-[600px] md:h-[400px]'
          } bg-[#0A0A0B]/95 backdrop-blur-xl border border-[var(--surface3)] rounded-xl overflow-hidden shadow-2xl flex flex-col font-mono text-sm`}
        >
          {/* Header */}
          <div className="bg-[var(--surface2)] px-4 py-3 border-b border-[var(--surface3)] flex items-center justify-between select-none">
            <div className="flex items-center gap-2 text-zinc-400">
              <Terminal size={16} className="text-[var(--gold)]" />
              <span>alpha-os ~ bash</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="text-zinc-500 hover:text-zinc-300 transition-colors hidden md:block"
              >
                {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-red-400 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div 
            className="flex-1 p-4 overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, i) => (
              <div 
                key={i} 
                className={`mb-2 whitespace-pre-wrap ${
                  item.type === 'user' ? 'text-zinc-300' : 'text-[#00e5ff]'
                }`}
              >
                {item.content}
              </div>
            ))}
            
            <div className="flex items-center mt-2">
              <span className="text-zinc-400 mr-2">visitor@alpha-os:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-zinc-100 border-none p-0"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div ref={endRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeveloperTerminal;
