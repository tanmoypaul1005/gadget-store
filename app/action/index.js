import Category from "@/models/Category";
import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function getCategory() {
  try {
    await connectMongo();
    let category = await Category.find({ status: "main_category" });

    let new_cate = await Promise.all(
      category.map(async (item) => {
        const child = await Category.find({ parent_id: item._id })
          .lean()
          .exec();
        return {
          _id: item._id,
          title: item.title,
          status: item.status,
          child: child,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      })
    );
    return {
      status: 200,
      success: true,
      data: new_cate,
      message: "Category is Found",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      status: 500,
      message: "Internal Server Error",
    };
  }
}

export const getAllCategory = async () => {
  try {
   await connectMongo();
    const category = await Category.find({  });
    return {
      success: true,
      status: 200,
      data: category,
      message: "Category is Found",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      status: 500,
      message: "Internal Server Error"
    }
  }
}





export async function getCategorySearch(search = '') {
  await connectMongo();

  const categories = await Products.find({
    name: { $regex: new RegExp(search, 'i') }
  });

  return categories;
}