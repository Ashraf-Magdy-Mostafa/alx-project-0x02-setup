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
export interface PostProps {
    id?: number;
    userId?: number
    title: string;
    content?: string
    body?: string;
}

interface Address {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
        lat: string;
        lng: string;
    };
}


export interface UserProps {
    id?: number;
    name: string;
    username?: string;
    email: string;
    address: Address;

    phone?: string;
    website?: string;
    company?: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}