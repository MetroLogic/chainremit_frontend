import { Send } from "../components/send";

const DUMMY_RECIPIENTS = [
  {
    name: "Alice Johnson",
    id: "alice.stark",
    amount: "$125.50",
  },
  {
    name: "Bob Smith",
    id: "bob.stark",
    amount: "$75.00",
  },
  {
    name: "Charlie Miner",
    id: "0x8aE3...D7F4",
    amount: "$300.00",
  },
  {
    name: "Community Wallet",
    id: "0x456...def",
    amount: "$50.00",
  },
];

const page = () => {
  return <Send 
    recentRecipients={DUMMY_RECIPIENTS}
  /> 
}

export default page;
