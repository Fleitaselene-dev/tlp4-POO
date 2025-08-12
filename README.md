### Análisis final (teórico)
- Respuestas:

- ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?
   Diferencias entre funciones constructoras con prototype y class:
  1. Prototype: Forma clasica o vieja de crear objetos  y heredar metodos.Se define una función, y luego se agregan métodos al objeto prototype para que todas las instancias los compartan.
  2. Class: Utilizado actualmente para la creacion de objetos; cuenta con una mejor estructura y sintaxis más clara.
  - #### Ventajase:
    - ##### Prototype:
    - Compatibilidad con versiones antiguas de JavaScript.
    - Flexibilidad: manipulación directa a el prototipo, añadir o cambiar métodos en tiempo de ejecución.
    - ##### Class:
    - Sintaxis clara (azúcar sintactico).
    - Mejor estructura para definir constructores, métodos, herencia y superclases.
    - Métodos declarados dentro de class van automáticamente al prototipo, evitando errores.
  - ##### Desventajas:
    - ##### Prototype:
    - Sintaxis menos clara y dificil de entender.
    - Más propensa a errores si no se usa con new (puede regresar undefined o alterar el contexto global).
    - ##### Class:
    - Puede ocultar detalles importantes de cómo funciona realmente la herencia en JavaScript.
    - Menos flexibilidad para manipular el prototipo. 
- ¿Cuáles son las ventajas de usar getters y setters?
   - Encapsulación: Permiten controlar el acceso a las propiedades, lo que facilita validar datos o transformar valores antes de almacenarlos o retornarlos.
   - Reacción a cambios: Permiten ejecutar lógica automáticamente al modificar o consultar propiedades (ej. actualización de otras variables, logs, cálculos).
   - Control de acceso: Se puede proteger propiedades privadas o “ocultas” manteniendo una interfaz pública consistente.
   - Compatibilidad futura: Permiten cambiar la implementación interna sin modificar el código que usa el objeto.
- ¿Qué problemas pueden surgir al modificar prototipos nativos como String?
   - Conflictos: Si se llegan a modificar prototypos Nativos puede que entren en conflicto con bibliotecas externas que esperan el prototipo original.
   - Incompatibilidad: Otros códigos pueden no funcionar correctamente si encuentran métodos inesperados o si cambian comportamientos estándar.
   - Cambiar prototipos globales puede llevar a efectos secundarios difíciles de depurar, ya que impacta en todo el entorno.
- Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?
   - La diferencia que existe entre asignar un metodo directamente al prototype de una funcion constructora o usar Object.assing es que el Object.assing copia todas las propiedades y métodos de personPrototype a Person.prototype por si misma; en cambio, asignar este metodo directamente implicaria asignar los metodos manualmente.


