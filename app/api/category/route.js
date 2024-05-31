export const dynamic = 'force-dynamic' 

import Category from "@/models/Category";
import connectMongo from "@/util/db";
import { create } from "@mui/material/styles/createTransitions";


  export async function GET() {
    try {
      await connectMongo();
      let category = await Category.find({status: "main_category"})

  
      let new_cate = await Promise.all(category.map(async (item) => {
        const child = await Category.find({ parent_id: item._id }).lean().exec();
        return {
          _id: item._id,
          title: item.title,
          status: item.status,
          child: child,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      }));
      return Response.json({ status: 200, success:true, data: new_cate, message: "Category is Found" });
    } catch (err) {
      console.error(err);
      return Response.json({ success:false, status:500, message: "Internal Server Error" });
    }
  }


export async function POST(request) {
  try {
    const new_category = await request.json();

    // Validation
    if (new_category.status === 'sub_category' && !new_category.parent_id) {
      return Response.json({success:false, status:500, message: "parent_id is required for sub_category" });
    }

    if (new_category.status === 'main_category' && new_category.parent_id) {
      return Response.json({success:false, status:500, message: "main_category should not have a parent_id" });
    }

    await connectMongo();
    const category = new Category({ ...new_category });
    await category.save();
    return Response.json({status:200, message: "Category added successfully",success:true, data: category });
  } catch (err) {
    console.error(err);
    return Response.json({success:false, status:500,  message: "Internal Server Error" });
  }
};