
import { createOrder, updateCart } from "../services/carts.js";

export const updateCartController = async (req, res)=>{
    const { userId, items } = req.body; // Отримуємо userId і items з тіла запиту

    if (!items || items.length === 0) {
        return res.status(400).json({
            message: "Items are required",
            error: "Missing required fields",
        });
    }

    const { productId, quantity } = items[0]; // Отримуємо перший елемент масиву items

    console.log("🚀 ~ updateCartController ~ req.body:", req.body);

    try {
        const cart = await updateCart({ userId, productId, quantity }); // Оновлюємо кошик
        res.json({
            status: 200,
            message: "Cart updated successfully",
            data: cart,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: "Something went wrong",
        });
    }
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