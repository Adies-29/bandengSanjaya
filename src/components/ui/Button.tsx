import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type Variant = 'whatsapp' | 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    icon?: ReactNode;
    className?: string;
    href?: string;
    target?: string;
    rel?: string;
}

type ButtonProps = BaseButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    href,
    target,
    rel,
    ...props
}: ButtonProps) => {

    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full shadow-md transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles: Record<Variant, string> = {
        whatsapp:
            'bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-600/30 hover:scale-105',
        primary:
            'bg-amber-500 hover:bg-amber-400 text-amber-950 hover:shadow-amber-500/30 hover:scale-105 font-bold',
        secondary:
            'bg-amber-900/60 hover:bg-amber-800/80 text-amber-200 hover:text-white border border-amber-700/50',
        outline:
            'border-2 border-emerald-600 text-emerald-500 hover:bg-emerald-600 hover:text-white',
    };

    const sizeStyles: Record<Size, string> = {
        sm: 'text-xs px-4 py-2 gap-1.5',
        md: 'text-sm px-5 py-2.5 gap-2',
        lg: 'text-base px-7 py-3.5 gap-2.5 rounded-2xl',
    };

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={combinedClasses}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {icon && <span className="shrink-0">{icon}</span>}
                <span>{children}</span>

            </a>
        );
    }

    return (
        <button
            className={combinedClasses}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
        </button>
    );

};