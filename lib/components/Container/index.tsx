import React from "react";

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={`p-10 text-red-400 ${className}`}>{children}</div>;
};
