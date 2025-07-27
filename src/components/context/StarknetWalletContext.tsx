// "use client";

// import {
//     createContext,
//     useContext,
//     useEffect,
//     useRef,
//     useState,
//     ReactNode,
// } from "react";
// import { connect, disconnect, StarknetWindowObject } from "get-starknet";
// import { encode } from "starknet";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";


// type WalletStatus =
//     | "idle"
//     | "connecting"
//     | "connected"
//     | "disconnecting"
//     | "disconnected"
//     | "error";

// interface StarknetContextType {
//     address: string;
//     walletName: string;
//     status: WalletStatus;
//     wallet: StarknetWindowObject | null;
//     connectWallet: () => Promise<void>;
//     disconnectWallet: () => Promise<void>;
//     truncatedAddress: string;
// }

// const StarknetWalletContext = createContext<StarknetContextType | undefined>(
//     undefined
// );

// export const StarknetWalletProvider = ({ children }: { children: ReactNode }) => {
//     const [wallet, setWallet] = useState<StarknetWindowObject | null>(null);
//     const [address, setAddress] = useState("");
//     const [walletName, setWalletName] = useState("");
//     const [status, setStatus] = useState<WalletStatus>("idle");
//     const toastId = useRef<string | null>(null);
//     const router = useRouter();

//     const truncatedAddress = address
//         ? address.slice(0, 6) + "..." + address.slice(-4)
//         : "";


//     useEffect(() => {
//         if (status === "connecting") {
//             toastId.current = toast.loading("Connecting Wallet...");
//         }

//         if (status === "connected") {
//             toast.dismiss(toastId.current ?? "");
//             toast.success("Wallet connected");
//         }

//         if (status === "disconnecting") {
//             toastId.current = toast.loading("Disconnecting Wallet...");
//         }

//         if (status === "disconnected") {
//             toast.dismiss(toastId.current ?? "");
//             toast.success("Wallet disconnected successfully");
//         }

//         if (status === "error") {
//             toast.dismiss(toastId.current ?? "");
//             toast.error("Something went wrong. Try again.");
//         }
//     }, [status]);

//     const connectWallet = async () => {
//         setStatus("connecting");
//         try {
//             const getWallet = await connect({
//                 modalMode: "alwaysAsk",
//                 modalTheme: "system",
//             });

//             if (!getWallet) throw new Error("No wallet selected");

//             await getWallet.enable({ starknetVersion: "v5" });

//             const addr = encode.addHexPrefix(
//                 encode
//                     .removeHexPrefix(getWallet.selectedAddress ?? "0x")
//                     .padStart(64, "0")
//             );
//             localStorage.setItem("chainremit_wallet", getWallet.name || "");
//             setWallet(getWallet);
//             setAddress(addr);
//             setWalletName(getWallet.name || "");
//             setStatus("connected");
//             router.push("/dashboard");
//         } catch (err) {
//             console.error(err);
//             setStatus("error");
//         }
//     };


//     useEffect(() => {
//         const reconnect = async () => {
//             const lastWallet = localStorage.getItem("chainremit_wallet");
//             if (!lastWallet) return;

//             try {
//                 const wallet = await connect({ modalMode: "neverAsk", modalTheme: "light" });
//                 if (!wallet) return;

//                 await wallet.enable({ starknetVersion: "v5" });

//                 const addr = encode.addHexPrefix(
//                     encode.removeHexPrefix(wallet.selectedAddress ?? "0x").padStart(64, "0")
//                 );

//                 setWallet(wallet);
//                 setAddress(addr);
//                 setWalletName(wallet.name || "");
//                 setStatus("connected");
//             } catch (err) {
//                 console.error("Auto-reconnect failed", err);
//             }
//         };

//         reconnect();
//     }, []);



//     const disconnectWallet = async () => {
//         setStatus("disconnecting");

//         try {
//             await disconnect({ clearLastWallet: true });
//             setWallet(null);
//             setAddress("");
//             setWalletName("");
//             setStatus("disconnected");
//             localStorage.removeItem("chainremit_wallet");
//             router.push("/");
//         } catch (e) {
//             console.warn("Failed to disconnect", e);
//             setStatus("error");
//         }
//     };

//     return (
//         <StarknetWalletContext.Provider
//             value={{
//                 address,
//                 walletName,
//                 wallet,
//                 status,
//                 connectWallet,
//                 disconnectWallet,
//                 truncatedAddress,
//             }}
//         >
//             {children}
//         </StarknetWalletContext.Provider>
//     );
// };

// export const useStarknetWallet = () => {
//     const context = useContext(StarknetWalletContext);
//     if (!context)
//         throw new Error(
//             "useStarknetWallet must be used within StarknetWalletProvider"
//         );
//     return context;
// };
