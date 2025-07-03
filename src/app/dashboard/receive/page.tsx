import Receive from "../components/receive"

const DUMMY_RECENT = [
  {
    from: "alice.stark",
    date: "July 2, 2025",
    amount: "+$150.00",
    status: "Completed",
  },
  {
    from: "0x91b3...e4a9",
    date: "July 1, 2025",
    amount: "+$300.00",
    status: "Completed",
  },
  {
    from: "bob.stark",
    date: "June 28, 2025",
    amount: "+$200.00",
    status: "Pending",
  },
  {
    from: "me.stark",
    date: "June 25, 2025",
    amount: "+$200.00",
    status: "Failed",
  },
]

const page = () => {
  return (
    <Receive 
      walletAddress="0xdeadbeef"
      starknetId="deadbeef.stark"
      recentPayments={DUMMY_RECENT}
    />
  )
}

export default page
