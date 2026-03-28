import React, { useState } from "react";

type SizeType = "small" | "middle" | "large";
type ColorType = "primary" | "secondary";

interface ButtonProps {
  size: SizeType;
  color: ColorType;
  title: string;
  onClick: () => void;
  children?: React.JSX.Element;
}

export const Button = (props: ButtonProps) => {
  const { size, color, title, onClick} = props;
  const [clickCount, setClickCount] = useState<number>(0);

  const defaultClass =
    "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2 cursor-pointer";

  const classes = {
    colors: {
      primary: {
        button: "bg-amber-700",
        text: "text-red",
      },
      secondary: {
        button: "bg-red-500",
        text: "text-white",
      },
    },
    sizes: {
      small: "rounded-[100px] font-sm",
      middle: "rounded-[14px] font-base",
      large: "rounded-[16px] font-base min-h-[56px]",
    },
  };

  const HandleClick = () => {
    const newCount = clickCount + 1;
    setClickCount (newCount);

    if (onClick) onClick();
  };

  return (
    <div className="flex flex-col gap-4">
        <div className={
            defaultClass +
            " " +
            classes.sizes[size] +
            " " +
            classes.colors[color].button
        }
        onClick={HandleClick}
        >
        <span className={classes.colors[color].text}>{title}</span>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2">Статистика нажатий:</h3>
            <p>Всего нажатий: <strong className="text-blue-600">{clickCount}</strong></p>
        </div>
    </div>
  );
};