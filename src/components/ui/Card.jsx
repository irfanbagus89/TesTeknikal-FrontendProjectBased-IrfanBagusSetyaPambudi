import React from "react";

const sizeClasses = {
  small: "p-3 text-sm",
  medium: "p-4 text-base",
  large: "p-6 text-lg",
};

const Card = ({
  title,
  value,
  icon,
  size = "medium",
  layout = "horizontal",
  children,
  bgColor = "bg-white",
  classname = ""
}) => {
  return (
    <div
      className={`rounded-xl shadow-md ${classname} ${bgColor} ${sizeClasses[size]} ${layout === "horizontal"
          ? "flex items-center justify-between"
          : "flex flex-col items-start space-y-2"}`}
    >
      
      {layout === "horizontal" && icon && (
        <div className="text-3xl text-gray-400">{icon}</div>
      )}
      {layout === "vertical" && icon && (
        <div className="text-3xl text-gray-400">{icon}</div>
      )}

      <div className="flex-1">
        {title && <h4 className="text-gray-500 text-sm mb-1">{title}</h4>}
        {value && <p className="text-xl font-bold">{value}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
