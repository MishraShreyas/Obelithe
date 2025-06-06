"use client";
import { cn } from "@/lib/utils";
import { Button, Spinner } from "@heroui/react";
import { IconMenu2, IconMoon, IconSun, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import Link, { LinkProps } from "next/link";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface Links {
	label: string;
	href: string;
	icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
	undefined
);

export const useSidebar = () => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
};

export const SidebarProvider = ({
	children,
	open: openProp,
	setOpen: setOpenProp,
	animate = true,
}: {
	children: React.ReactNode;
	open?: boolean;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	animate?: boolean;
}) => {
	const [openState, setOpenState] = useState(false);

	const open = openProp !== undefined ? openProp : openState;
	const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

	return (
		<SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
			{children}
		</SidebarContext.Provider>
	);
};

export const Sidebar = ({
	children,
	open,
	setOpen,
	animate,
}: {
	children: React.ReactNode;
	open?: boolean;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	animate?: boolean;
}) => {
	return (
		<SidebarProvider open={open} setOpen={setOpen} animate={animate}>
			{children}
		</SidebarProvider>
	);
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
	return (
		<>
			<DesktopSidebar {...props} />
			<MobileSidebar {...(props as React.ComponentProps<"div">)} />
		</>
	);
};

export const DesktopSidebar = ({
	className,
	children,
	...props
}: React.ComponentProps<typeof motion.div>) => {
	const { open, setOpen, animate } = useSidebar();
	return (
		<>
			<motion.div
				className={cn(
					"h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] shrink-0",
					className
				)}
				animate={{
					width: animate ? (open ? "300px" : "60px") : "300px",
				}}
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				{...props}
			>
				{children}
			</motion.div>
		</>
	);
};

export const MobileSidebar = ({
	className,
	children,
	...props
}: React.ComponentProps<"div">) => {
	const { open, setOpen } = useSidebar();
	return (
		<>
			<div
				className={cn(
					"h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
				)}
				{...props}
			>
				<div className="flex justify-end z-20 w-full">
					<IconMenu2
						className="text-neutral-800 dark:text-neutral-200"
						onClick={() => setOpen(!open)}
					/>
				</div>
				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ x: "-100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "-100%", opacity: 0 }}
							transition={{
								duration: 0.3,
								ease: "easeInOut",
							}}
							className={cn(
								"fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
								className
							)}
						>
							<div
								className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
								onClick={() => setOpen(!open)}
							>
								<IconX />
							</div>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export function SidebarThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Button
			isIconOnly
			variant="light"
			onPress={toggleTheme}
			className="-translate-x-2"
		>
			{theme === "dark" ? (
				<IconSun
					size={20}
					className="text-neutral-600 dark:text-neutral-300"
				/>
			) : (
				<IconMoon
					size={20}
					className="text-neutral-600 dark:text-neutral-300"
				/>
			)}
		</Button>
	);
}

interface SidebarAttendanceProps {
	className?: string;
	onPress?: () => void;
	loading?: boolean;
	children: React.ReactNode;
}

export const SidebarAttendance = ({
	className,
	onPress,
	loading,
	children,
	...props
}: SidebarAttendanceProps) => {
	const { open, animate } = useSidebar();
	return (
		<motion.button
			onClick={onPress}
			transition={{
				ease: "easeInOut",
			}}
			animate={{
				// translateX: animate ? (open ? 0 : -20) : 0,
				// opacity: animate ? (open ? 1 : 0) : 1,
				aspectRatio: animate ? (open ? "auto" : 1) : "auto",
			}}
			disabled={loading}
			className={cn(
				"relative flex items-center justify-evenly overflow-hidden h-8 gap-2 group/sidebar hover:scale-105 transition duration-150 py-2 w-full rounded-lg",
				className
			)}
			{...props}
		>
			{loading && (
				<Spinner
					variant="wave"
					color="default"
					size="sm"
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			)}
			<motion.span
				animate={{
					display: animate
						? open
							? "inline-block"
							: "none"
						: "inline-block",
					translateX: animate ? (open ? 0 : -20) : 0,
					opacity: animate ? (open ? 1 : 0) : 1,
				}}
				className="text-neutral-200 text-sm whitespace-pre inline-block text-center !p-0 !m-0"
			>
				{children}
			</motion.span>
		</motion.button>
	);
};

export const SidebarLink = ({
	link,
	className,
	...props
}: {
	link: Links;
	className?: string;
	props?: LinkProps;
}) => {
	const { open, animate } = useSidebar();
	return (
		<Link
			href={link.href}
			className={cn(
				"flex items-center justify-start gap-2 group/sidebar py-2",
				className
			)}
			{...props}
		>
			{link.icon}

			<motion.span
				animate={{
					display: animate
						? open
							? "inline-block"
							: "none"
						: "inline-block",
					opacity: animate ? (open ? 1 : 0) : 1,
				}}
				className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
			>
				{link.label}
			</motion.span>
		</Link>
	);
};
