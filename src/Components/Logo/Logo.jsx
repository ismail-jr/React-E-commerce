import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoMark from "../Assets/brand/logo-mark.svg";
import logoFull from "../Assets/brand/logo-full.svg";

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
  xl: "h-20 w-20",
};

const Logo = ({
  variant = "mark",
  showText = true,
  size = "md",
  className,
  linkTo = "/",
}) => {
  const content =
    variant === "full" ? (
      <img
        src={logoFull}
        alt="Shopify UCC"
        className={cn("h-8 w-auto md:h-10", className)}
      />
    ) : (
      <div className={cn("flex items-center gap-2.5", className)}>
        <img
          src={logoMark}
          alt="Shopify UCC"
          className={cn("shrink-0 rounded-xl", sizeClasses[size])}
        />
        {showText && (
          <span className="text-lg font-bold tracking-tight text-foreground md:text-xl">
            SHOPIFY UCC
          </span>
        )}
      </div>
    );

  if (linkTo) {
    return (
      <Link to={linkTo} className="inline-flex transition-opacity hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
