import type { CSSProperties, ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Container({ as, children, className = "", style }: Props) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={`mx-auto w-full max-w-[1320px] px-8 max-[720px]:px-5 ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
