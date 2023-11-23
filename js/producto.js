function calcularPrecio() {
    console.log("entro");
    const producto = document.getElementById("comidas").value;
    const cantidad = document.getElementById("cant").value;
    const precioBase = obtenerPrecioBase(producto);
    const producto2 = document.getElementById("bebidas").value;
    const cantidad2 = document.getElementById("cant2").value;
    const precioBase2 = obtenerPrecioBase(producto2);
    const precioTotal = (precioBase * cantidad)+(precioBase2*cantidad2);
    document.getElementById("precio").textContent = `Precio Total: $${precioTotal.toFixed(2)}`;
  }
  function obtenerPrecioBase(producto) {
    switch (producto) {
      case "1":
        return 9.00;
      case "2":
        return 11.00;
      case "3":
        return 15.00;
      case "4":
        return 18.00;
      case "5":
        return 8.50;
      default:
        return 0;
    }
}
function obtenerPrecioBase2(producto2) {
  switch (producto2) {
    case "1":
      return 6.50;
    case "2":
      return 10.50;
    case "3":
      return 8.00;
    default:
      return 0;
  }
}
function llenarTabla() {
  // Obtener los valores del formulario
  var comida = document.getElementById("comidas").options[document.getElementById("comidas").selectedIndex].text;
  var cantidadComida = document.getElementById("cant").value;
  var bebida = document.getElementById("bebidas").options[document.getElementById("bebidas").selectedIndex].text;
  var cantidadBebida = document.getElementById("cant2").value;
  var precio = document.getElementById("precio").value;

  // Crear una nueva fila en la tabla
  var row = document.createElement("tr");

  // Llenar la fila con los valores del formulario
  row.innerHTML = `
      <td>${comida} ${bebida}</td>
      <td>${cantidadComida}${cantidadBebida} </td>
      <td>${precio}</td>
  `;

  // Agregar la fila a la tabla
  document.getElementById("tabla-body").appendChild(row);
}
