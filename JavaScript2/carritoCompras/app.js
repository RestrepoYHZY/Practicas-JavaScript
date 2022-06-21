const frutas = []
const fruta = prompt ('🍒Feria Market🍇 ¿Qué fruta desea comprar?');

frutas.push(fruta);

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
     const fruta= prompt('¿qué fruta desea comprar?')
     frutas.push(fruta)
}
console.log('Compraste: ');
for (const fruta of frutas){
    console.log(fruta);
}