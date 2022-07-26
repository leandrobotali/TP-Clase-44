import {productosModel} from '../models/ModelProducto.js'
import mongoClass from '../db/mongoClass.js';

let instance = null;

class DaoProducto {
    constructor() {
        this.client = mongoClass.getInstance()
    }
    
    async getAll(){
        try{
            const getAllProd = await productosModel.find({})
            .sort({ date: "desc" })
            .lean();
            return getAllProd
        }catch(err){
            return err
        }
    }

    async findById(id){
        try{
            const getByIdProd = await productosModel.find({_id:id}).lean()
            return getByIdProd
        }catch(err){
            return err
        }
    }
    
    async save(prod){
        try {
            const newProducto = new productosModel(prod)
            await newProducto.save()
    
            return newProducto
        } catch (err) {
            return err
        }
    }

    async update(id,prod){
        try{
            const getByIdProd = await productosModel.find({_id:id}).lean()
            if(getByIdProd != []){
                await productosModel.updateOne({_id: id},{
                $set:{
                    "nombre": prod.nombre,
                    "descripcion":  prod.descripcion,
                    "codigo": prod.codigo,
                    "foto": prod.foto,
                    "precio": prod.precio,
                    "stock": prod.stock
                }
                })
                return await productosModel.find({_id:id}).lean()
            }else{
                throw new Error('Produto not found')
            }
        }catch(err){
            return err
        }
    }

    async delete(id){
        try{
            const getByIdProd = await productosModel.find({_id:id}).lean()
            if(getByIdProd != []){
                await productosModel.deleteOne({_id:id})
                return getByIdProd
            }else{
                throw new Error('Produto not found')
            }
        }catch(error){
            return(error)
        }
    }

    static getInstance(){
        if(!instance){
            instance = new DaoProducto;
        }
        return instance
    }
}


export default DaoProducto;