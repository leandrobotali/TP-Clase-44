export default class Producto {
    constructor({ nombre, descripcion, codigo, foto, precio, stock }) {
        this.setNombre(nombre)
        this.setDescripcion(descripcion)
        this.setCodigo(codigo)
        this.setFoto(foto)
        this.setPrecio(precio)
        this.setStock(stock)
    }

    setNombre(nombre) {
        if (!nombre) throw new Error('el campo nombre es obligatorio')
        this.nombre = nombre
    }

    setDescripcion(descripcion) {
        if (!descripcion) throw new Error('el campo descripcion es obligatorio')
        this.descripcion = descripcion
    }

    setCodigo(codigo) {
        if (!codigo) throw new Error('el campo codigo es obligatorio')
        this.codigo = codigo
    }

    setFoto(foto) {
        if (!foto) throw new Error('el campo foto es obligatorio')
        this.foto = foto
    }

    setPrecio(precio) {
        if (!precio) throw new Error('el campo precio es obligatorio')
        this.precio = precio
    }

    setStock(stock) {
        if (!stock) throw new Error('el campo stock es obligatorio')
        this.stock = stock
    }
}