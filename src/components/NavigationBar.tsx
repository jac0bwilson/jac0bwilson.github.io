import { useState } from 'react';
import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@heroui/react';
import ThemeToggleButton from './ThemeToggleButton';

export default function NavigationBar({
    currentPath,
}: {
    currentPath: string;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [{ text: 'Photography', href: '/photography/' }];

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="dark:bg-stone-800/50 border-b border-stone-100 dark:border-stone-700/50"
            isBlurred={true}
        >
            <NavbarBrand>
                <Link color="foreground" href="/" className="font-bold">
                    Jacob Wilson
                </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                {menuItems.map((item) => (
                    <NavbarItem
                        key={item.href}
                        isActive={currentPath === item.href}
                    >
                        <Link href={item.href}>{item.text}</Link>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <ThemeToggleButton />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
