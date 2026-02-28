import { auth } from "@/auth";
import GuestCheckout from "./components/GuestCheckout";

const Checkout = async () => {
  const session = await auth();

  // Pass name/email from session so fields are pre-filled for logged-in users
  return (
    <GuestCheckout
      initialName={session?.user?.name ?? ""}
      initialEmail={session?.user?.email ?? ""}
    />
  );
};

export default Checkout;
