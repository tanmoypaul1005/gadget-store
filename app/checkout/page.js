import { auth } from "@/auth";
import GuestCheckout from "./components/GuestCheckout";
import LoggedInCheckout from "./components/LoggedInCheckout";

const Checkout = async () => {
  const session = await auth();

  if (!session) {
    return <GuestCheckout />;
  }

  return <LoggedInCheckout email={session?.user?.email} />;
};

export default Checkout;
