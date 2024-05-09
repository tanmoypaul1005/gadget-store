import Cart from "@/models/Cart";
import User from "@/models/User";
import connectMongo from "@/util/db";

export async function POST(request, response) {
  try {
    const res = await request.json();
    await connectMongo();
    const _cart =await Cart.findOne({ user: res.user });

    if (!_cart) {
      const new_cart={
        user:res.user,
        cartItems:[{product:res.product,quantity:res.quantity}]
      };
      const cart = new Cart(new_cart);
      await cart.save();
      return Response.json({
        success: true,
        message: "Cart Created Successfully",
        status: 201,
        data: cart,
      });
    } else {
      const cart = await Cart.findOneAndUpdate(
        { user: res.user },
        { $push: { cartItems: {product:res.product,quantity:res.quantity} } }
      );
      return Response.json({
        success: true,
        message: "Cart Updated Successfully",
        status: 200,
        data: cart,
      });
    }
  } catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      message: "Internal Server Error",
      status: 500,
    });
  }
}

export async function GET(request,response) {
  try {

    await connectMongo();

    const url = new URL(request.url)
    const email = url.searchParams.get("email");


    if (!email) {
      return Response.json({
        success: false,
        message: "Invalid Request",
        status: 400,
      });
    }

    const user=await User.findOne({email:email});
    if(!user){
      return Response.json({
        success: false,
        message: "User Not Found",
        status: 404,
      });
    }

    const _cart =await Cart.findOne({ user: user._id });
    if (!_cart) {
      return Response.json({
        success: false,
        message: "Cart is Empty",
        status: 404,
      });
    } else {
      return Response.json({
        success: true,
        message: "Cart Found",
        status: 200,
        data: _cart,
      });
    }
  } catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      message: "Internal Server Error",
      status: 500,
    });
  }
}
