import { cn } from "@/lib/utils";
import { forwardRef } from "react";
export interface ButtonProp
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }


const Button = forwardRef<HTMLButtonElement, ButtonProp>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button className={cn(`w-auto rounded-full bg-black border-transparent px-5 py-3 disabled::opacity-50 transition text-white font-semibold `, className)} ref={ref}>
            {children}
        </button>
    )
})
Button.displayName = 'Button'
export default Button