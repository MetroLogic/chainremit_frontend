"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  LayoutDashboard,
  Send,
  Download,
  CreditCard,
  Users,
  TrendingUp,
  User,
  Settings,
  X,
} from "lucide-react";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { truncate } from "@/lib/utils";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  isCollapsed,
  onToggleCollapse,
}) => {
  const pathname = usePathname();

  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const { connect, connectors, error } = useConnect();

  const handleConnect = (idx: number) => {
    const connector = connectors[idx]; // or find based on `id` like 'argentX', 'braavos'

    if (!connector) {
      console.error("No wallet connector available");
      return;
    }

    connect({ connector });
  };

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", route: "/dashboard" },
    { icon: Send, label: "Send Money", route: "/dashboard/send" },
    { icon: Download, label: "Receive Money", route: "/dashboard/receive" },
    { icon: CreditCard, label: "Microloans", route: "/dashboard/loans" },
    { icon: Users, label: "Group Savings", route: "/dashboard/savings" },
    {
      icon: TrendingUp,
      label: "Credit Score",
      route: "/dashboard/credit-score",
    },
    { icon: User, label: "Profile", route: "/dashboard/profile" },
    { icon: Settings, label: "Settings", route: "/dashboard/settings" },
  ];

  const smoothSpring = {
    type: "spring" as const,
    stiffness: 280,
    damping: 35,
    mass: 0.8,
  };

  const sidebarVariants: Variants = {
    expanded: {
      width: 256,
      transition: smoothSpring,
    },
    collapsed: {
      width: 64,
      transition: smoothSpring,
    },
  };

  const textVariants = {
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        ...smoothSpring,
        delay: 0.05,
      },
    },
    hide: {
      opacity: 0,
      x: -8,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    },
  } as const;

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.02,
      },
    },
    hide: {
      transition: {
        staggerChildren: 0.015,
        staggerDirection: -1,
      },
    },
  };

  const logoTextVariants = {
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        ...smoothSpring,
        delay: 0.1,
      },
    },
    hide: {
      opacity: 0,
      x: -12,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  } as const;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <motion.div
        variants={sidebarVariants}
        animate={isCollapsed ? "collapsed" : "expanded"}
        className={`fixed inset-y-0 left-0 pt-3 bg-slate-200/95 dark:bg-slate-950/95 border-r border-sidebar-border transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 overflow-hidden`}
        style={{
          willChange: "width",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "justify-between"
          } p-6 h-16`}
        >
          <Link
            href="/"
            className={`flex items-center min-w-0 my-6 ${
              isCollapsed ? "justify-center w-full" : "my-6"
            }`}
          >
            <motion.div
              className="rounded-lg flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={smoothSpring}
            >
              <Image
                src="/Logo.png"
                alt="ChainRemit Logo"
                width={80}
                height={60}
                className="w-[80px] h-[60px] object-fill"
              />
            </motion.div>
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  key="logo-text"
                  variants={logoTextVariants}
                  initial="hide"
                  animate="show"
                  exit="hide"
                  className="-ml-3 my-6 overflow-hidden"
                  style={{
                    originX: 0,
                    willChange: "transform, opacity",
                  }}
                >
                  <Image
                    src="/logoText.png"
                    alt="ChainRemit Logo"
                    width={80}
                    height={60}
                    className="w-[80px] h-[60px] object-fill"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          <motion.button
            className="lg:hidden text-sidebar-foreground"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={smoothSpring}
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        <motion.div
          className="px-4 mt-6"
          variants={containerVariants}
          animate={isCollapsed ? "hide" : "show"}
        >
          {/* {!isConnected ? (
            connectors.map((connector, idx) => (
              <button
                key="nav-label-connect"
                className="text-xs font-medium text-muted-foreground mb-4 px-2"
                onClick={() => {
                  handleConnect(idx);
                }}
              >
                Connect {connector.name}
              </button>
            ))
          ) : (
            <button
              key="nav-label-connect"
              className="text-xs font-medium text-muted-foreground mb-4 px-2"
              onClick={() => {
                disconnect();
              }}
            >
              Connected to {address ? truncate(address) : "-"}
            </button>
          )} */}
          <nav className={`space-y-1 ${isCollapsed ? "mt-[2em]" : "mt-0"}`}>
            {sidebarItems.map((item, index) => {
              const isActive = pathname === item.route;
              return (
                <motion.div
                  key={item.route}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={smoothSpring}
                >
                  <Link
                    href={item.route}
                    onClick={onClose}
                    className={`w-full flex items-center ${
                      isCollapsed
                        ? "justify-center px-3 py-3"
                        : "space-x-3 px-3 py-3"
                    } rounded-lg text-left transition-all duration-200 ease-out ${
                      isActive
                        ? "bg-slate-100/95 dark:bg-slate-900/95 text-sidebar-accent-foreground shadow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <motion.div
                      animate={{
                        rotate: isActive ? 360 : 0,
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{
                        rotate: { duration: 0.6, ease: "easeInOut" },
                        scale: smoothSpring,
                      }}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                    </motion.div>
                    <AnimatePresence mode="wait">
                      {!isCollapsed && (
                        <motion.span
                          key={`nav-${index}`}
                          variants={textVariants}
                          initial="hide"
                          animate="show"
                          exit="hide"
                          className="whitespace-nowrap"
                          style={{
                            originX: 0,
                            willChange: "transform, opacity",
                          }}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border"
          variants={containerVariants}
          animate={isCollapsed ? "hide" : "show"}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default Sidebar;
