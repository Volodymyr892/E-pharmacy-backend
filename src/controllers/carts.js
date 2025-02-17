
import { createOrder, updateCart } from "../services/carts.js";

export const updateCartController = async (req, res)=>{
    const {userId, productId, quantity} =  req.body;
    const cart = await updateCart(userId, productId, quantity);

    res.json({
        status: 200,
        message: "Cart updated successfully",
        data: cart,
    });
};

export const checkoutController = async(req, res, next)=>{
    const {userId, items, totalAmount,  paymentMethod, shippingAddress} = req.body;
    const newOrder = await  createOrder({userId, items, totalAmount,  paymentMethod, shippingAddress});

    res.json({
        status: 201,
        message: "Order placed successfully",
        data: newOrder,
    });
};