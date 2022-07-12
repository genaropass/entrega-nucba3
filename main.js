const button = document.querySelector('.btn_container')
const search = document.querySelector('.inputSearch')
const contenedor = document.querySelector('.container-msg')


const arrayPizzas=[
    {
      id:1,
      nombre:"Especial",
      ingredientes:["queso","jamon","morrones"],
      precio:750,
    },
    {
      id:2,
      nombre:"Bacon",
      ingredientes:["panceta","queso","aceitunas"],
      precio:750,
    },
    {
      id:3,
      nombre:"Albahaca",
      ingredientes:["albahaca","queso","aceitunas"],
      precio:650,
    },{
      id:4,
      nombre:"Napolitana",
      ingredientes:["queso","tomate","oregano"],
      precio:500,
    },
    {
      id:5,
      nombre:"Cebolla",
      ingredientes:["queso","cebolla","oregano"],
      precio:650,
    },
    {
      id:6,
      nombre:"Muzzarella",
      ingredientes:["muzarella","oregano","aceitunas"],
      precio:450,
    },
];

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.

button.addEventListener("click", buscarPizza);

function buscarPizza(e){
    e.preventDefault(); 
    const pizzaId = search.value; 
    if (pizzaId === ""){
        showError("Debes Ingresar un Id");
        return;
    }
    createHTML();
    search.value="";
}


// 🚨 Si no coincide con ningún id, renderizar un mensaje de error. 

function showError(error){
    const msgError = document.createElement("p");
    msgError.textContent = error;
    msgError.classList.add("error");
    contenedor.appendChild(msgError)

    setTimeout(() => {
        msgError.remove();
    }, 2000);
}

// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

function createHTML() {
  contenedor.innerHTML = "";
  if (arrayPizzas.some((pizza) => pizza.id == search.value)) {
    arrayPizzas.forEach((pizza) => {
      if (pizza.id === search.valueAsNumber) {
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const span = document.createElement("span");
        contenedor.classList.add("card");
        h2.innerHTML = `${pizza.nombre}`;
        h3.innerHTML = `Ingredientes: ${pizza.ingredientes}`;
        h4.innerHTML = `$ ${pizza.precio}`;
        span.innerHTML = `X`;
        contenedor.appendChild(h2);
        contenedor.appendChild(h3);
        contenedor.appendChild(h4);
        contenedor.appendChild(span);
        span.classList.add("borrar");
        span.addEventListener("click", (e) => {
          contenedor.innerHTML = "";
          contenedor.classList.remove("card")
        });
      } else {
        return;
      }
    });
  } else {
    showError("No hay pizza con ese Id");
    return;
  }
}