"use client";
import { type HTMLAttributes, useEffect, useState } from "react";
import { X, Hammer } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button, buttonVariants } from "./button";

type BannerVariant = "rainbow" | "normal";

export function Banner({
  id,
  xColor,
  variant = "normal",
  changeLayout = true,
  height = "3rem",
  rainbowColors = [
    "rgba(0,149,255,0.56)",
    "rgba(231,77,255,0.77)",
    "rgba(255,0,0,0.73)",
    "rgba(131,255,166,0.66)",
  ],
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  /**
   * @defaultValue 3rem
   */
  height?: string;

  xColor?: string;

  /**
   * @defaultValue 'normal'
   */
  variant?: BannerVariant;

  /**
   * For rainbow variant only, customise the colors
   */
  rainbowColors?: string[];

  /**
   * Change Fumadocs layout styles
   *
   * @defaultValue true
   */
  changeLayout?: boolean;
}) {
  const [open, setOpen] = useState(true);
  const globalKey = id ? `webz-banner-${id}` : null;

  useEffect(() => {
    if (globalKey) setOpen(localStorage.getItem(globalKey) !== "true");
  }, [globalKey]);

  if (!open) return null;

  return (
    <div
      id={id}
      {...props}
      className={cn(
        "absolute top-0 left-0 w-full z-40 flex flex-row items-center justify-center px-4 text-center text-sm font-bold tracking-wide",
        variant === "normal" && "bg-zinc-900 border-b border-white/10",
        variant === "rainbow" && "bg-transparent backdrop-blur-md border-b text-white border-white/20",
        !open && "hidden",
        props.className,
      )}
      style={{
        height,
      }}
    >
      {changeLayout && open ? (
        <style>
          {globalKey
            ? `:root:not(.${globalKey}) { --banner-height: ${height}; }`
            : `:root { --banner-height: ${height}; }`}
        </style>
      ) : null}
      
      {variant === "rainbow"
        ? flow({
            colors: rainbowColors,
          })
        : null}

      <div className="flex items-center justify-center gap-2">
        <Hammer className="w-4 h-4 text-yellow-500 animate-pulse" />
        <span>{props.children || "ON-GOING . UNDER CONSTRUCTION"}</span>
      </div>

      {id ? (
        <button
          type="button"
          aria-label="Close Banner"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
            if (globalKey) {
              localStorage.setItem(globalKey, "true");
              window.dispatchEvent(new Event("banner-status-changed"));
            }
          }}
          className={cn(
            buttonVariants({
              variant: "ghost",
              className:
                "absolute cursor-pointer border-none bg-transparent hover:bg-white/10 right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors",
              size: "icon",
            }),
          )}
        >
          <X color={xColor || "currentColor"} size={16} />
        </button>
      ) : null}
    </div>
  );
}

const maskImage =
  "linear-gradient(to bottom,white,transparent), radial-gradient(circle at top center, white, transparent)";

function flow({ colors }: { colors: string[] }) {
  return (
    <>
      <div
        className="absolute inset-0 z-[-1] pointer-events-none opacity-80"
        style={
          {
            maskImage,
            maskComposite: "intersect",
            animation: "banner-moving 20s linear infinite",
            backgroundImage: `repeating-linear-gradient(70deg, ${[...colors, colors[0]].map((color, i) => `${color} ${(i * 50) / colors.length}%`).join(", ")})`,
            backgroundSize: "200% 100%",
            filter: "saturate(1.5)",
          } as object
        }
      />
      <style>
        {`@keyframes banner-moving {
            from { background-position: 0% 0;  }
            to { background-position: 100% 0;  }
         }`}
      </style>
    </>
  );
}
