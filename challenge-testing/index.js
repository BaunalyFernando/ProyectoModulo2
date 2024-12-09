class CarritoCompra {
    constructor() {
        this.carrito = [];
    }

    agregarProducto(producto) {
        this.carrito.push(producto);
    }

    calcularTotal() {
        var total = 0;
        const carritos = this.carrito;

        for (const item of carritos) {
            total += item.precio;
        }

        return total;
    }

    aplicarDescuento(porcentaje) {
        const totalDeLaCompra = this.calcularTotal();

        var valorFinal = 0;

        const valorDelDescuento = (totalDeLaCompra * porcentaje) / 100;

        valorFinal = totalDeLaCompra - valorDelDescuento;

        return valorFinal;
    }

}

const carritoCompra = new CarritoCompra();

module.exports = {
    CarritoCompra,
    carritoCompra
};