import { ComponentProps, ReactNode } from "react";

import { tv, VariantProps } from "tailwind-variants";


const buttonVariants = tv({
    base: 'rounded-lg py-2 px-5 font-medium flex items-center gap-2',
    variants: {
        variant: {
            primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary: 'bg-zinc-800 hover:bg-zinc-900 text-zinc-200',
        },
    },
    defaultVariants: {
        variant: 'primary',
    }
})

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    children: ReactNode,
}


export function Button({ children, variant, ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant })}>
            {children}
        </button>
    );
}