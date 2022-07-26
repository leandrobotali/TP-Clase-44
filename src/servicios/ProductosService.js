import DaoProducto from "../daos/DaosProductos.js";
import logger from '../helpers/logger.js'
import Producto from "../models/producto.js";

const ProdInstance = DaoProducto.getInstance()

export const createProducto = async (datos) => {
    try {
        let newProducto = new Producto(datos)
        await ProdInstance.save(newProducto);
        return newProducto
    } catch (error) {
        logger.error(error)
        return error
    }
};

export const getProductos = async () => {
    return await ProdInstance.getAll();
}

export const getProducto = async (id) => {
    let prod =  await ProdInstance.findById(id);
    return prod[0]
}

export const updateProducto = async (id,datos) => {
    try {
        let upProducto = new Producto(datos)
        let prod =  await ProdInstance.update(id,upProducto); 
        return prod[0]
    } catch (error) {
        logger.error(error)
        return error
    }
};

export const deleteProducto = async (id) => {
    try {        
        let prod =  await ProdInstance.delete(id);
        return prod[0]
    } catch (error) {
        return error
    }
}