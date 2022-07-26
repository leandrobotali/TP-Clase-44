import * as Productos from '../servicios/ProductosService.js'

export function getProductos() {
    return Productos.getProductos()
}

export function getProducto({ _id }) {
    return Productos.getProducto(_id)
}

export function createProducto({ datos }) {
    return Productos.createProducto(datos)
}

export function updateProducto({ _id, datos }) {
    return Productos.updateProducto(_id, datos)
}

export function deleteProducto({ _id }) {
    return Productos.deleteProducto(_id)
}