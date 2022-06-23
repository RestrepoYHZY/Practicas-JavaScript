const carrito = document.querySelector('#carrito')
const template = document.querySelector('#template')

//Evitar el reflow
const fragment= document.createDocumentFragment()
//Capturar botones
const btnesBotones = document.querySelectorAll('.card .btn')

//Almacenar los productos

const carritoObjeto ={};

const agregarAlcarrito= (e) =>{
    console.log(e.target.dataset.fruta)

    const producto= {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    //sumar cantidad
    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad +1
    }

    //Empujo al objeto carritoObjeto
    carritoObjeto[producto.titulo] = producto;

    pintarCarrito();

    //console.log(carritoObjeto);

};

const pintarCarrito =()=>{

    carrito.textContent = "";
   
    Object.values(carritoObjeto).forEach(item =>{
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent=item.titulo
        clone.querySelector('.badge').textContent= item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)

};

btnesBotones.forEach((btn ) => btn.addEventListener("click",agregarAlcarrito))
