import { getAllPharmaciesNearest, getAllPharmaciesStore } from "../services/pharmacies.js";

export const getPharmaciesNearestController = async(req, res)=>{
    const nearest = await getAllPharmaciesNearest();
    console.log("🚀 ~ getPharmaciesNearestController ~ nearest:", nearest);
    res.json({
        status: 200,
        mesagge: 'Successfully found Neares',
        data: nearest,
    });
};

export const getPharmaciesStoreController = async(req, res)=>{
    const store = await getAllPharmaciesStore();
    res.json({
        status: 200,
        mesagge: 'Successfully found Store',
        data: store,
    });
};