import createHttpError from "http-errors";
import { cartCollection, orderCollection } from "../db/carts/cart.js";

export const updateCart = async({userId, productId, quantity}) =>{
    if(!userId || !productId || !quantity){
        throw new Error("Missing required fields");
    }

    let cart = await cartCollection.findOne({userId});

    if(!cart){
        cart = new cartCollection({userId, items:[{productId, quantity}]});
    }else{
        const existingItem = cart.items.find(item => item.productId.toString()===productId);

        if(existingItem){
            existingItem.quantity += quantity;
        }else{
            cart.items.push({productId, quantity});
        }
    }

    await cart.save();
    return cart;
};

export const createOrder = async({userId, items, totalAmount,paymentMethod, shippingAddress} )=>{
    if(!userId || !items || !totalAmount || !paymentMethod || !shippingAddress){
        throw createHttpError(400, "Missing required fields");
    }

    const newOrder = new orderCollection({
        userId,
        items,
        totalAmount,
        paymentMethod, 
        shippingAddress,
    });

    await newOrder.save();
    return newOrder;
};