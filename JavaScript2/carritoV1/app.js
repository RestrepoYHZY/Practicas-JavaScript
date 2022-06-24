const carrito = document.querySelector('#carrito')
const template = document.querySelector('#template')

//Evitar el reflow
const fragment= document.createDocumentFragment()
//Capturar botones
const btnesBotones = document.querySelectorAll('.card .btn')

//Almacenar los productos

const carritoObjeto =[];

const agregarAlcarrito= (e) =>{
    console.log(e.target.dataset.fruta)

    const producto= {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }
    
    const indice = carritoObjeto.findIndex(
        (item)=> item.id === producto.id
    )

    console.log(indice)

        if (indice === -1){
            carritoObjeto.push(producto);
        }else{
            carritoObjeto[indice].cantidad ++;
        }

        console.log(carritoObjeto);


    //Empujo al objeto carritoObjeto
   // carritoObjeto[producto.titulo] = producto;

    pintarCarrito(carritoObjeto);

  

};

const pintarCarrito =(array)=>{

    carrito.textContent = "";
   
   array.forEach(item =>{
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent=item.titulo
        clone.querySelector('.badge').textContent= item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)

};

btnesBotones.forEach((btn ) => btn.addEventListener("click",agregarAlcarrito))
