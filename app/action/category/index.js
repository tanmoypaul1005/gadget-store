import Category from "@/models/Category";
import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function getByCategoryProducts(category_id) {
  try {
    await connectMongo();
    if (category_id) {
      let products = await Products.find({ category: category_id })
        .lean()
        .exec();
      return {
        success: true,
        status: 200,
        data: products,
        message: `Product is found`,
      };
    } else {
      return {
        success: false,
        status: 404,
        error: "Product Not Found",
        message: "A category ID is required to update the product.",
        data: [],
      };
    }
  } catch (err) {
    console.error(err);
    return { message: "Internal Server Error", data: [] };
  }
}

export async function getMainCategory() {
  try {
    await connectMongo();
    const category = await Category.find({ status: "main_category" });
    return category;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export const getCategoryDetails = async (category_id) => {
  try {
    await connectMongo();
    const categories = await Category.findById(category_id);
    return categories;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const getTopBrandList = async () => {
  try {
    await connectMongo();
    const categories = await Category.find({ top_brand: true });
    return categories;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getSelectedCategoryDetails = async (title) => {
  try {
    await connectMongo();
    const categories = await Category.findOne({ title: title });
    return categories;
  } catch (err) {
    console.error(err);
    return [];
  }
};


export async function getTopBrandProducts() {
  try {
    await connectMongo();

    // Fetch all categories
    const categories = await Category.find({top_brand: true}).lean().exec();
    const response = {};

    // Fetch products for each category
    for (const category of categories) {
      const products = await Products.find({ category: category._id }).lean().exec();
      response[category.title] = products;
    }

    return {
      success: true,
      status: 200,
      data: response,
      message: `Products are found`,
    };
  } catch (err) {
    console.error(err);
    return { message: "Internal Server Error", data: {} };
  }
}