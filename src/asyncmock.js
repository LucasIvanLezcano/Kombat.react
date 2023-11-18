const misProductos = [
    { id: 1, nombre: "KOMBAT IA-63 PAMPA", precio: 139.999, img: "https://kombatpadel.com.ar/379-thickbox_default/kombat-ia-63-pampa.jpg", idCat: "1", stock: 10 },
    { id: 2, nombre: "TROYA ULISES", precio: 139.999, img: "https://kombatpadel.com.ar/347-thickbox_default/troya-ulises.jpg", idCat: "1", stock: 10 },
    { id: 3, nombre: "KOMBAT DELTA FORCE 18K", precio: 139.999, img: "https://kombatpadel.com.ar/335-thickbox_default/kombat-delta-force-18k.jpg", idCat: "1", stock: 10 },
    { id: 4, nombre: "KOMBAT x GEO", precio: 139.999, img: "https://kombatpadel.com.ar/510-thickbox_default/kombat-x-geo.jpg", idCat: "1", stock: 10 },
    { id: 5, nombre: "Tubo de bolas Kombat Pádel", precio: 6.99, img: "https://kombatpadel.com.ar/553-thickbox_default/bote-de-bolas-kombat-padel.jpg", idCat: "2", stock: 10 },
    { id: 6, nombre: "Overgrip individual blanco", precio: 3.50, img: "https://kombatpadel.com.ar/111-thickbox_default/overgrip-individual-blanco-kombat.jpg", idCat: "2", stock: 10 }
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id == id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}