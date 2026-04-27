import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { Monitor, User, Briefcase, Mail, Terminal as TerminalIcon, Palette } from 'lucide-react';
import './CommandPalette.css';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    const handleToggle = () => setOpen(true);

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleToggle);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleToggle);
    };
  }, []);

  const runCommand = (command) => {
    setOpen(false);
    command();
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const isLight = root.getAttribute('data-theme') === 'light';
    root.setAttribute('data-theme', isLight ? 'dark' : 'light');
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
  };

  return (
    <Command.Dialog 
      open={open} 
      onOpenChange={setOpen} 
      label="Global Command Palette"
      overlayClassName="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
      contentClassName="fixed left-[50%] top-[15vh] z-[10000] w-[90vw] max-w-[600px] translate-x-[-50%] bg-[#111113]/95 border border-[var(--surface3)] rounded-xl shadow-2xl overflow-hidden font-display cmdk-dialog"
    >
        <div className="flex items-center border-b border-[var(--surface3)] px-3">
          <Command.Input 
            autoFocus 
            placeholder="Type a command or search..." 
            className="w-full bg-transparent text-[var(--text)] border-none outline-none py-4 text-lg placeholder-zinc-500"
          />
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-zinc-500">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className="text-xs font-semibold text-zinc-500 px-2 py-2">
            <Command.Item onSelect={() => runCommand(() => window.location.hash = '#home')} className="cmdk-item">
              <Monitor className="mr-2 h-4 w-4 text-[var(--gold)]" />
              <span>Home</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.location.hash = '#features')} className="cmdk-item">
              <Briefcase className="mr-2 h-4 w-4 text-[var(--gold)]" />
              <span>Skills & Expertise</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.location.hash = '#projects')} className="cmdk-item">
              <Monitor className="mr-2 h-4 w-4 text-[var(--gold)]" />
              <span>Projects</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.location.hash = '#contact')} className="cmdk-item">
              <User className="mr-2 h-4 w-4 text-[var(--gold)]" />
              <span>Contact</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions" className="text-xs font-semibold text-zinc-500 px-2 py-2 mt-2">
            <Command.Item onSelect={() => runCommand(toggleTheme)} className="cmdk-item">
              <Palette className="mr-2 h-4 w-4 text-[var(--gold)]" />
              <span>Toggle Light/Dark Theme</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.location.href = 'mailto:alphatapfuma20@gmail.com')} className="cmdk-item">
              <Mail className="mr-2 h-4 w-4 text-[var(--gold)]" />
              <span>Send Email</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Developer Secrets" className="text-xs font-semibold text-zinc-500 px-2 py-2 mt-2">
            <Command.Item onSelect={() => runCommand(() => window.dispatchEvent(new Event('toggle-terminal')))} className="cmdk-item">
              <TerminalIcon className="mr-2 h-4 w-4 text-[#00e5ff]" />
              <span>Open Developer Terminal</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
  );
};

export default CommandPalette;
