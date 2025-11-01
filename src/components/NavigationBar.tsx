import { useState } from 'react';
import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
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
            className="dark:bg-gray-900"
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

            {/* <NavbarMenuToggle className="sm:hidden" />

            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarMenuItem
                        key={item.href}
                        isActive={currentPath === item.href}
                    >
                        <Link href={item.href}>{item.text}</Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <ThemeToggleButton />
                </NavbarMenuItem>
            </NavbarMenu> */}
        </Navbar>
    );
}
