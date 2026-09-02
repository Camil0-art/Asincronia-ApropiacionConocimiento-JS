/*2. Identificando código bloqueante
Ejercicio:
Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la
ejecución del programa.
Meta: evidenciar cómo una tarea pesada bloquea el hilo principal.*/

console.log("1. Inicio del programa");

// Temporizador programado para dentro de 0 ms
setTimeout(() => {
  console.log("3. Callback de setTimeout (debería ejecutarse de inmediato)");
}, 0);

console.log("2. Iniciando tarea pesada (bloqueando el hilo principal)...");

// Operación bloqueante: ciclo iterando 2 mil millones de veces
const inicio = Date.now();
for (let i = 0; i < 2e9; i++) {
  // El motor de JavaScript está 100% ocupado resolviendo este ciclo
}
const fin = Date.now();

console.log(`4. Tarea pesada finalizada en ${fin - inicio} ms`);
console.log("5. Fin del código sincrónico");




