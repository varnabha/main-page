import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    {
      label: 'For Clubs',
      href: '#for-clubs',
      dropdown: [
        { label: 'List Events', href: '#for-clubs' },
        { label: 'Features', href: '#for-clubs' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      label: 'For Students',
      href: '#for-students',
      dropdown: [
        { label: 'Discover Events', href: '#for-students' },
        { label: 'How it Works', href: '#how-it-works' },
        { label: 'Featured Events', href: '#featured-events' },
      ],
    },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.header
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
    >
      <motion.nav
        className="max-w-4xl mx-auto bg-cream/95 backdrop-blur-xl rounded-full border border-black/5 shadow-nav px-4 py-2 flex items-center justify-between"
        style={{ scale: navScale, opacity: navOpacity }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 bg-dark-bg rounded-lg flex items-center justify-center">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <span className="font-serif text-lg font-semibold">CampusMeet</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full hover:bg-black/5 transition-colors">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="rounded-2xl">
                  {item.dropdown.map((subItem) => (
                    <DropdownMenuItem key={subItem.label} asChild>
                      <a
                        href={subItem.href}
                        className="cursor-pointer rounded-xl px-4 py-2"
                      >
                        {subItem.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-full hover:bg-black/5 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-lavender text-dark-bg hover:bg-lavender/90 rounded-full px-5 py-2 text-sm font-medium"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 bg-cream">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-dark-bg rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="font-serif text-lg font-semibold">CampusMeet</span>
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium rounded-xl hover:bg-black/5 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <Button
                className="bg-lavender text-dark-bg hover:bg-lavender/90 rounded-full py-3 text-base font-medium w-full"
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </motion.nav>
    </motion.header>
  );
}
