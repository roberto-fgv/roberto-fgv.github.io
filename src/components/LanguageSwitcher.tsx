
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('pt-BR')}
        className={cn(
          "px-2 rounded-md text-sm font-medium transition-colors",
          language === 'pt-BR' 
            ? "bg-[#3E478C]/20 text-white" 
            : "text-gray-400 hover:text-white hover:bg-[#3E478C]/10"
        )}
      >
        PT
      </Button>
      <span className="text-gray-500">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          "px-2 rounded-md text-sm font-medium transition-colors",
          language === 'en' 
            ? "bg-[#3E478C]/20 text-white" 
            : "text-gray-400 hover:text-white hover:bg-[#3E478C]/10"
        )}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
