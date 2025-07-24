// "use client";

// import {useState} from "react";
// import { Bell, Menu, User, PanelLeftClose, LogOut } from "lucide-react";
// import { ThemeToggle } from "@/components/theme-toggle";
// import WalletDisconnectModal from "../../../components/blockchain/Wallet-disconnect-modal"
// import { useRouter } from "next/navigation"
// interface HeaderProps {
//   onMenuClick: () => void;
//   isCollapsed: boolean;
//   onToggleCollapse: () => void;
// }

// const Header: React.FC<HeaderProps> = ({
//   onMenuClick,
//   isCollapsed,
//   onToggleCollapse,
// }) => {

//     const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false)
//   const router = useRouter()

//   const handleProfileClick = () => {
//     setIsDisconnectModalOpen(true)
//   }

//   const handleCloseModal = () => {
//     setIsDisconnectModalOpen(false)
//   }

//   const handleDisconnect = () => {
//     // Add your actual wallet disconnect logic here
//     // For example: disconnect from wallet provider, clear local storage, etc.

//     // Clear any authentication tokens or user data
//     localStorage.removeItem("walletAddress")
//     localStorage.removeItem("userToken")

//     // Close the modal
//     setIsDisconnectModalOpen(false)

//     // Navigate to home page
//     router.push("/")

//     console.log("User disconnected and redirected to home")
//   }


//   // const {truncatedAddress, disconnectWallet, address} =  useStarknetWallet()
//   return (
//     <header className="h-16 bg-background border-b border-border flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">
//       <div className="flex items-center space-x-4">
//         <button
//           className="lg:hidden text-foreground hover:text-muted-foreground"
//           onClick={onMenuClick}
//         >
//           <Menu className="w-6 h-6" />
//         </button>
//         <button
//           className="hidden lg:block text-foreground hover:text-muted-foreground"
//           onClick={onToggleCollapse}
//         >
//           <PanelLeftClose className="w-6 h-6" />
//         </button>
//         <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
//           <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//           <span className="text-xs font-medium text-green-700 dark:text-green-400">
//             Connected to StarkNet Mainnet
//           </span>
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <button className="relative p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-colors">
//           <Bell className="w-5 h-5" />
//           <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//         </button>

//         <ThemeToggle />

//         <button className="flex items-center justify-center w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors">
//           <User className="w-4 h-4 text-muted-foreground" />
//         </button> 



//          <button  className="flex items-center justify-center w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors">
//           <LogOut className="w-4 h-4 text-muted-foreground" />
//         </button> 
//         <WalletDisconnectModal
//         isOpen={isDisconnectModalOpen}
//         onClose={handleCloseModal}
//         onDisconnect={handleDisconnect}
//       />
//        </div> 
//     </header>
//   );
// };

// export default Header;



"use client";

import { useState } from "react";
import { Bell, Menu, User, PanelLeftClose, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import WalletDisconnectModal from "../../../../components/blockchain/Wallet-disconnect-modal";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onMenuClick: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  isCollapsed,
  onToggleCollapse,
}) => {
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const router = useRouter();

  const handleProfileClick = () => {
    setIsDisconnectModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDisconnectModalOpen(false);
  };

  const handleDisconnect = () => {
    // Clear local storage
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("userToken");

    // Close modal
    setIsDisconnectModalOpen(false);

    // Redirect to home
    router.push("/");

    console.log("User disconnected and redirected to home");
  };

  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <button
          className="lg:hidden text-foreground hover:text-muted-foreground"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </button>
        <button
          className="hidden lg:block text-foreground hover:text-muted-foreground"
          onClick={onToggleCollapse}
        >
          <PanelLeftClose className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs font-medium text-green-700 dark:text-green-400">
            Connected to StarkNet Mainnet
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2  cursor-pointer text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <ThemeToggle />

        {/* Profile button (optional) */}
        <button className="flex items-center justify-center cursor-pointer w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors">
          <User className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Logout triggers wallet disconnect modal */}
        <button
          onClick={handleProfileClick}
          className="flex items-center justify-center cursor-pointer w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors"
        >
          <LogOut className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Disconnect Wallet Modal */}
        <WalletDisconnectModal
          isOpen={isDisconnectModalOpen}
          onClose={handleCloseModal}
          onDisconnect={handleDisconnect}
        />
      </div>
    </header>
  );
};

export default Header;
