import { Button } from '@heroui/react';
import { useState, useEffect } from 'react';

const ThemeToggleButton = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const initialTheme = document.documentElement.classList.contains('dark')
            ? 'dark'
            : 'light';
        setTheme(initialTheme);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const newTheme =
                        document.documentElement.classList.contains('dark')
                            ? 'dark'
                            : 'light';
                    setTheme(newTheme);
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (!('theme' in localStorage)) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.classList.toggle(
                    'dark',
                    newTheme === 'dark',
                );
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            observer.disconnect();
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <Button
            isIconOnly
            variant="flat"
            aria-label="Toggle theme"
            onPress={toggleTheme}
        >
            {theme === 'light' ? '☀️' : '🌙'}
        </Button>
    );
};

export default ThemeToggleButton;
