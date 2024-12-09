const { CarritoCompra, carritoCompra } = require("../index");

const listaDeProductosMock = jest.fn(() => {
    return { id: 1, descripcion: "helado", precio: 2000 };
});

describe("un carrito debe contener aunque sea un item", () => {
    it("el carrito debe guardar un item", () => {
        carritoCompra.agregarProducto(listaDeProductosMock());
        expect(carritoCompra.carrito.length).toBeGreaterThan(0);
    });

    it("calcular el total del carro debe retornar bien", () => {
        carritoCompra.carrito = [];
        carritoCompra.agregarProducto(listaDeProductosMock());
        const total = carritoCompra.calcularTotal();
        expect(total).toBe(2000);
    });

    it("el carrito debe retornar un descuento", () => {
        carritoCompra.carrito = [];
        carritoCompra.agregarProducto(listaDeProductosMock());
        const precioConDescuento = carritoCompra.aplicarDescuento(10);
        expect(precioConDescuento).toBe(1800);
    });

    it("se debe poder instanciar una clase", () => {
        const carritos = new CarritoCompra;
        expect(carritos).toBeInstanceOf(CarritoCompra);
    });


});

describe("el constructor debe ser una funcion", () => {
    it("el carrito debe guardar un item", () => {
        expect(typeof CarritoCompra.prototype.constructor).toBe("function");
    });

    it("debe realizar todos los pasos de manera correcta", () => {
        carritoCompra.carrito = [];
        carritoCompra.agregarProducto(listaDeProductosMock());
        carritoCompra.agregarProducto(listaDeProductosMock());
        expect(carritoCompra.carrito.length).toBe(2);
        expect(carritoCompra.carrito.length).toBeGreaterThan(0);
        expect(carritoCompra.calcularTotal()).toBe(4000);
        expect(carritoCompra.aplicarDescuento(10)).toBe(3600);

    })
});