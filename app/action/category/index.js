import Category from "@/models/Category";
import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function getByCategoryProducts(category_id) {

    try {
        await connectMongo();
        if (category_id) {
            let products = await Products.find({ category: category_id }).lean()
            .exec();
            return {success:true, status: 200, data: products, message: `Product is found` };
        } else {
            return {
                success: false,
                status: 404,
                error: 'Product Not Found',
                message: "A category ID is required to update the product.",
                data:[]
              };
        }
    } catch (err) {
        console.error(err);
        return { message: "Internal Server Error",data:[] };
    }
}

export async function getMainCategory() {
    try {
      await connectMongo();
      const category = await Category.find({ status: "main_category" });
      return category;
    
    } catch (err) {
      console.error(err);
      return []
    }
  }

  export const getCategoryDetails = async (category_id) => {
    try{
      await connectMongo();
      const category = await Category.findById(category_id);
      return category;
    }catch(err){
      console.error(err);
      return {}
    }
  }