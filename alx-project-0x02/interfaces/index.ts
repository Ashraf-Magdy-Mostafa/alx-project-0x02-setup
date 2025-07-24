export interface NavLink {
    name: string;
    href: string
}
export interface CardProps {
    title: string;
    description?: string;
    content: string;
}
export interface ButtonProps {
    text: string
    className?: string;
    // children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "submit";
    shape?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
    size?: "small" | "medium" | "large";
}
export interface Post {
    title: string;
    content: string
}