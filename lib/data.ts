export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export type MenuItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: "coffee" | "croissant" | "egg" | "salad" | "cake";
};

export const menuItems: MenuItem[] = [
  {
    id: "coffee",
    title: "Coffee",
    description: "Rich flavors, freshly brewed, always.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
    icon: "coffee",
  },
  {
    id: "pastries",
    title: "Pastries",
    description: "Baked fresh, every day.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    icon: "croissant",
  },
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Healthy & delicious options.",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=600&auto=format&fit=crop",
    icon: "egg",
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Fresh ingredients, bold flavors.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
    icon: "salad",
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet endings to your day.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
    icon: "cake",
  },
];

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  image: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "seasonal-drinks",
    title: "New Seasonal Drinks Now Available",
    date: "Apr 15, 2025",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "weekend-brunch",
    title: "Weekend Brunch at Biblio Kaffee",
    date: "Apr 05, 2025",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=700&auto=format&fit=crop",
  },
];

export type Stat = {
  id: string;
  value: string;
  label: string;
  icon: "coffeeCup" | "users" | "star" | "leaf";
};

export const stats: Stat[] = [
  { id: "years", value: "5+", label: "Years of Service", icon: "coffeeCup" },
  { id: "customers", value: "10K+", label: "Happy Customers", icon: "users" },
  { id: "reviews", value: "100+", label: "5-Star Reviews", icon: "star" },
  { id: "menu", value: "20+", label: "Menu Items", icon: "leaf" },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop",
];
