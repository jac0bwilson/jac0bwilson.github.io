export const controlBaseClass =
    'inline-flex items-center rounded-full border transition-colors';

export const quietControlClass = [
    controlBaseClass,
    'border-transparent hover:border-stone-200/70 hover:bg-white/50 dark:hover:border-stone-700/70 dark:hover:bg-stone-800/50',
].join(' ');

export const elevatedControlClass = [
    quietControlClass,
    'bg-background/90 text-foreground shadow-lg backdrop-blur hover:bg-background focus:ring-2 focus:ring-accent focus:outline-none dark:hover:bg-stone-800/90',
].join(' ');
