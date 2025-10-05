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

export default function NavigationBar({
    currentPath,
}: {
    currentPath: string;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { text: 'Home', href: '/' },
        { text: 'Photography', href: '/photography/' },
    ];

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <p className="font-bold">Jacob Wilson</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex">
                {menuItems.map((item) => (
                    <NavbarItem
                        key={item.href}
                        isActive={currentPath === item.href}
                    >
                        <Link href={item.href}>{item.text}</Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenuToggle className="sm:hidden" />

            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarMenuItem
                        key={item.href}
                        isActive={currentPath === item.href}
                    >
                        <Link href={item.href}>{item.text}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
