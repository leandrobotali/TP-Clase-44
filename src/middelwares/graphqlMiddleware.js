import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

import {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
} from '../controllers/ProductosGraphqlController.js'

const schema = buildSchema(`
  input ProductoInput {
    nombre: String
    descripcion: String
    codigo: Int
    foto: String
    precio: Int
    stock: Int  
  }
  type Producto {
    _id: ID
    nombre: String
    descripcion: String
    codigo: Int
    foto: String
    precio: Int
    stock: Int
  }
  type Query {
    getProducto(_id: ID!): Producto
    getProductos: [Producto]
  }
  type Mutation {
    createProducto(datos: ProductoInput!): Producto
    updateProducto(_id: ID!, datos: ProductoInput!): Producto
    deleteProducto(_id: ID!): Producto
  }
`)

// getProductos(criterio: Criterio): [Producto]

export const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: {
    getProductos,
    getProducto,
    createProducto,
    updateProducto,
    deleteProducto,
  },
  graphiql: true,
})