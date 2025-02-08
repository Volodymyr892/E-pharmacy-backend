import { pharmaciesNearestCollection, pharmaciesStoreCollections } from "../db/pharmacies/pharmacies.js";

export const getAllPharmaciesNearest = async()=>{
    const pharmaciesNearest = await pharmaciesNearestCollection.find();
    console.log("🚀 ~ getAllPharmaciesNearest ~ pharmaciesNearest:", pharmaciesNearest);
    return pharmaciesNearest;
};
export const getAllPharmaciesStore = async()=>{
    const pharmaciesStore = await pharmaciesStoreCollections.find();
    return pharmaciesStore;
};
