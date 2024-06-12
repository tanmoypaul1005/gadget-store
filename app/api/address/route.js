import Address from "@/models/Address";
import User from "@/models/User";
import connectMongo from "@/util/db";

export const dynamic = 'force-dynamic' 

export async function POST(request) {
  let body;
  try {
    await connectMongo();

    body = await request.json();

    const email = body?.email;
    const title = body.title;
    const contact=body.contact
    const postalCode=body.postalCode
    const address=body.address
    const house_name=body.house_name
    const address_type=body.address_type
    const user_info= await User.findOne({ email: email });

    const user = user_info._id;

    // Find the user's address document
    let userAddress = await Address.findOne({ user: user_info._id });

    // If the user doesn't have an address document, create a new one
    if (!userAddress) {
      userAddress = new Address({ user, address: [] });
    }

    // Check if an address of the provided type already exists
    const existingAddressIndex = userAddress.address.findIndex(addr => addr.address_type === address_type);

    if (existingAddressIndex !== -1) {
      // If it does, update the existing address
      userAddress.address[existingAddressIndex] = { title, contact, postalCode, address, house_name, address_type };
    } else {
      // If it doesn't, add a new address
      userAddress.address.push({ title, contact, postalCode, address, house_name, address_type });
    }

    // Save the updated address document
    const savedAddress = await userAddress.save();

    return Response.json({
      success: true,
      status: 200,
      message: "Address added/updated successfully",
      data: savedAddress,
    });
  } catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
}


export async function GET(request) {
  // try {
  //   await connectMongo();
  //   const searchParams = request.nextUrl.searchParams;
  //   const email = searchParams.get("email");

  //   console.log("email: ", email)
    
  //   const user = await User.findOne({ email: email }).exec();
    
  //   if (!user) {
  //     return Response.json({
  //       success: false,
  //       status: 404,
  //       message: "User not found",
  //       data: null,
  //     });
  //   }
    
  //   const address = await Address.findOne({ user: user._id }).exec();
    
  //   if (!address) {
  //     return Response.json({
  //       success: false,
  //       status: 404,
  //       message: "No address found",
  //       data: null,
  //     });
  //   } else {
  //     return Response.json({
  //       success: true,
  //       status: 200,
  //       message: "Address found",
  //       data:  address?.address,
  //     });
  //   }
  // } catch (err) {
  //   console.error(err);
  //   return Response.json({
  //     success: false,
  //     status: 500,
  //     message: "Internal Server Error",
  //     data: null,
  //   });
  // }
}

