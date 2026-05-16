export const topbarControlBaseClass =
    'inline-flex h-9 items-center rounded-full border transition-colors';

export const quietTopbarControlClass = [
    topbarControlBaseClass,
    'border-transparent hover:border-stone-200/70 hover:bg-white/50 dark:hover:border-stone-700/70 dark:hover:bg-stone-800/50',
].join(' ');
