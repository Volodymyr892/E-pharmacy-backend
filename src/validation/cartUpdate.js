import Joi from "joi";

export const validateCartUpdateSchema = Joi.object({
    userId: Joi.string().required().messages({
        "string.base": "User ID must be a string",
        "any.required": "User ID is required",
    }),
    items: Joi.array()
        .items(
            Joi.object({
                productId: Joi.string().required().messages({
                    "string.base": "Product ID must be a string",
                    "any.required": "Product ID is required",
                }),
                quantity: Joi.number().integer().min(1).required().messages({
                    "number.base": "Quantity must be a number",
                    "number.min": "Quantity must be at least 1",
                    "any.required": "Quantity is required",
                }),
            })
        )
        .required()
        .messages({
            "array.base": "`items` must be an array",
            "any.required": "`items` is required",
        }),
});

export const validationOrderSchema = Joi.object({
    userId: Joi.string().required(),
    items: Joi.array().items(
        Joi.object({
            productId: Joi.string().required(),
            name: Joi.string().required(),
            price: Joi.number().required(),
            quantity: Joi.number().integer().min(1).required(),
        })
    ).required(),
    totalAmount: Joi.number().required(),
    paymentMethod: Joi.string().valid("Cash On Delivery", "Bank").required(),
    shippingAddress: Joi.object({
        fullName: Joi.string().required(),
        phone: Joi.string().required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        zipCode: Joi.string().required(),
        country: Joi.string().required(),
    }).required(),
});