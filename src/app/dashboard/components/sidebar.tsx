"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Send, 
  Download, 
  CreditCard, 
  Users, 
  TrendingUp, 
  User, 
  Settings,
  X
} from 'lucide-react';
import { useAccount, useConnect, useDisconnect } from '@starknet-react/core';
import { truncate } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isCollapsed, onToggleCollapse }) => {
  const pathname = usePathname();

  const { disconnect } = useDisconnect()
  const { isConnected, address } = useAccount()
  const { connect, connectors, error } = useConnect()

  const handleConnect = (idx: number) => {
    const connector = connectors[idx]; // or find based on `id` like 'argentX', 'braavos'

    if (!connector) {
      console.error('No wallet connector available');
      return;
    }

    connect({ connector });
  };
  
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', route: '/dashboard' },
    { icon: Send, label: 'Send Money', route: '/dashboard/send' },
    { icon: Download, label: 'Receive Money', route: '/dashboard/receive' },
    { icon: CreditCard, label: 'Microloans', route: '/dashboard/loans' },
    { icon: Users, label: 'Group Savings', route: '/dashboard/savings' },
    { icon: TrendingUp, label: 'Credit Score', route: '/dashboard/credit-score' },
    { icon: User, label: 'Profile', route: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', route: '/dashboard/settings' },
  ];

  
  const smoothSpring = {
    type: "spring",
    stiffness: 280,
    damping: 35,
    mass: 0.8
  };

  const sidebarVariants = {
    expanded: {
      width: 256,
      transition: smoothSpring
    },
    collapsed: {
      width: 64,
      transition: smoothSpring
    }
  };

  
  const textVariants = {
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        ...smoothSpring,
        delay: 0.05
      }
    },
    hide: {
      opacity: 0,
      x: -8,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.02
      }
    },
    hide: {
      transition: {
        staggerChildren: 0.015,
        staggerDirection: -1
      }
    }
  };

  
  const logoTextVariants = {
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        ...smoothSpring,
        delay: 0.1
      }
    },
    hide: {
      opacity: 0,
      x: -12,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

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
        className={`fixed inset-y-0 left-0 bg-sidebar border-r border-sidebar-border transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 overflow-hidden`}
        style={{ 
          
          willChange: 'width',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      >
        
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} p-6 h-16`}>
          <Link href="/dashboard" className={`flex items-center min-w-0 ${isCollapsed ? 'justify-center w-full' : ''}`}>
            <motion.div 
              className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={smoothSpring}
            >
              <Send className="w-6 h-6 text-primary-foreground rotate-45" />
            </motion.div>
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  key="logo-text"
                  variants={logoTextVariants}
                  initial="hide"
                  animate="show"
                  exit="hide"
                  className="ml-3 overflow-hidden"
                  style={{ 
                    originX: 0,
                    willChange: 'transform, opacity'
                  }}
                >
                  <span className="text-xl font-bold text-sidebar-foreground whitespace-nowrap">
                    StarkRemit
                  </span>
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
          className="px-4"
          variants={containerVariants}
          animate={isCollapsed ? "hide" : "show"}
        >
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div 
                key="nav-label"
                variants={textVariants}
                initial="hide"
                animate="show"
                exit="hide"
                className="text-xs font-medium text-muted-foreground mb-4 px-2"
                style={{ willChange: 'transform, opacity' }}
              >
                Navigation
              </motion.div>
            )}
          </AnimatePresence>
          {!isConnected ? connectors.map((connector, idx) => (
            <button
              key="nav-label-connect"
              className="text-xs font-medium text-muted-foreground mb-4 px-2"
              onClick={() => { 
                handleConnect(idx)
              }}
            >
              Connect {connector.name}
            </button>
          )) : (
              <button
                key="nav-label-connect"
                className="text-xs font-medium text-muted-foreground mb-4 px-2"
                onClick={() => {
                  disconnect()
                }}
              >
                Connected to {address ? truncate(address) : "-"} 
              </button>
            )}
          <nav className={`space-y-1 ${isCollapsed ? 'mt-[2em]' : 'mt-0'}`}>
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
                    className={`w-full flex items-center ${isCollapsed ? 'justify-center px-3 py-3' : 'space-x-3 px-3 py-3'} rounded-lg text-left transition-all duration-200 ease-out ${
                      isActive
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-sm' 
                        : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    }`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <motion.div
                      animate={{ 
                        rotate: isActive ? 360 : 0,
                        scale: isActive ? 1.1 : 1
                      }}
                      transition={{
                        rotate: { duration: 0.6, ease: "easeInOut" },
                        scale: smoothSpring
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
                            willChange: 'transform, opacity'
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
        >
          <motion.div 
            className={`flex items-center ${isCollapsed ? 'justify-center' : ''} mb-4`}
            whileHover={{ scale: 1.02, y: -1 }}
            transition={smoothSpring}
          >
            <motion.div 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={smoothSpring}
            >
              <User className="w-6 h-6 text-muted-foreground" />
            </motion.div>
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  key="user-name"
                  variants={logoTextVariants}
                  initial="hide"
                  animate="show"
                  exit="hide"
                  className="ml-3 overflow-hidden"
                  style={{ 
                    originX: 0,
                    willChange: 'transform, opacity'
                  }}
                >
                  <span className="text-sidebar-foreground font-medium whitespace-nowrap">
                    John Doe
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div 
                key="user-links"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { ...smoothSpring, delay: 0.1 },
                  opacity: { duration: 0.2, delay: 0.15 }
                }}
                style={{ overflow: 'hidden' }}
                className="space-y-2"
              >
                <motion.div 
                  whileHover={{ scale: 1.02, x: 2 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={smoothSpring}
                >
                  <Link 
                    href="/dashboard/profile"
                    className="w-full flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 ease-out rounded-lg"
                  >
                    <User className="w-4 h-4" />
                    <span className="text-sm">Profile</span>
                  </Link>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02, x: 2 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={smoothSpring}
                >
                  <Link 
                    href="/dashboard/settings"
                    className="w-full flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 ease-out rounded-lg"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Settings</span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


      </motion.div>
    </>
  );
};

export default Sidebar;
