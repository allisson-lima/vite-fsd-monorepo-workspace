import { Button } from '@repo/ui';
import { useTheme } from '../model/useTheme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Button variant="ghost" onClick={toggle} aria-label="Alternar tema">
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}
