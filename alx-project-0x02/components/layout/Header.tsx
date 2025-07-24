import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavLink } from '@/interfaces';

function Header() {
    const router = useRouter();
    const isActive = (href: string) =>
        router.pathname === href ? 'text-blue-600 font-semibold shadow-md bg-white' : 'text-gray-300 hover:text-blue-600 hover:shadow-md hover:bg-white rounded';

    const linksArray: NavLink[] = [
        { name: 'Home', href: '/home' },
        { name: 'Posts', href: '/posts' },
        { name: 'About', href: '/about' },
        { name: 'Users', href: '/users' },
    ];


    return (
        <header className="bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

                <Link href="/" className="text-white text-xl font-bold tracking-tight">
                    MySite
                </Link>

                {/* Navigation Links */}
                <nav aria-label="Main Navigation">
                    <ul className="flex space-x-6 items-center">
                        {linksArray.map((navItem) => (
                            <li key={navItem.name}>
                                <Link
                                    href={navItem.href}
                                    className={` px-4 py-2 rounded transition-colors duration-200 ${isActive(navItem.href)}`}
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
