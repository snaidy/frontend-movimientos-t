const containerMovimientos = document.getElementById("containerMovimientos");

const URL_API = "http://localhost:3000/movimientos";

const listMovimientos = [];

const getMovimientos = async () => {
  try {
    const { data } = await axios.get(URL_API);
    return data; //const response.data {data} esto asi se llama desestructuracion
  } catch (error) {
    console.log(error);
    return [];
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const movimientos = await getMovimientos();
    console.log(movimientos);

    movimientos.forEach((movimiento) => {
        listMovimientos.push(movimiento);
      });
    renderMovimientos();
  } catch (error) {
    console.log(error);
  }
});

const renderMovimientos = () => {
  console.log("Hello", listMovimientos);
  containerMovimientos.innerHTML = "";
  listMovimientos.forEach((movimiento) => {
    containerMovimientos.innerHTML += `
        <table class="table__movi">
            <thead class="encabezado"> 
              <tr>
                <th>Número</th>
                <th>Descripción</th>
                <th>Costo</th>
                <th>Tipo de costo</th>
              </tr>
            </thead>
            <tbody class="table__body">
              <tr>
              <td>${movimiento.id}</td>
              <td>${movimiento.description}</td>
              <td>${movimiento.price}</td>
              <td>${movimiento.type}</td>
              </tr>
            </tbody>
          </table>
          <br>
        `
  });
}

getMovimientos()
