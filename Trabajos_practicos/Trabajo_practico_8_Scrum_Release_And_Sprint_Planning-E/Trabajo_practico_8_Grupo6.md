# Tareas a realizar para el trabajo práctico 8

- [x] Definir capacidad del equipo en horas ideales
- [x] Definición de hecho propia
- [x] Definir orden para implementación de las user stories
- [ ] Definir plan de release para MVP
- [ ] Minuta de planificación del sprint (para sprint 1 y sprint backlog)
- [x] Desagregar user stories para sprint backlog en tareas estimadas en horas ideales
  - [ ] Definir cantidad de horas necesarias para cada actividad
- [ ] Definir cantidad de sprints y user stories para cada uno

Decidimos tomar como capacidad del equipo en horas ideales un valor de 16 horas considerando que trabajamos media jornada



Definición de Hecho:

* Diseño revisado
* Código completo
* Código refactorizado y formateado
* Código en repositorio
* Código inspeccionado por mayoría del equipo
* Código con 60% de code coverage
* Código probado
* Tests unitarios pasando
* Tests de integración pasando
* Prueba de aceptación realizada

# MVP

Objetivo:

* Permitir que los clientes (pasajeros) puedan trasladarse al lugar que desean solicitando un taxi cercano
* Permitir a los taxistas ver la ubicación del pasajero que solicita un viaje para llevarlo
* Permitir a los taxistas manejar el estado del taxi

Las user stories incluidas permiten validar la idea de negocio en el mercado, focalizando en la funcionalidad que pone en contacto a Pasajeros con Taxistas. Si bien los taxistas deben poder iniciar sesión para vincularlos con los datos de su vehículo, el análogo para el pasajero no es requisito para poder realizar un pedido. La funcionalidad relacionada con la gestión de taxis por parte de la central no aporta el valor significativo para la validación del mercado por lo que se dejará para futuras iteraciones.

![MVP](/Screens/mvp.png)

# Stories

* [ ] Loguear pasajero

  * Desarrollar pantalla con campos de input
  * Crear tabla en esquema de base de datos
  * Crear tests

* [x] Loguear taxista

  * Desarrollar pantalla con campos de input
  * Crear validaciones para cada campo
  * Crear tabla en esquema de base de datos
  * Crear tests para verificación de datos
  * Implementar autenticación con API de facebook

* [ ] Registrar central de taxis

  * Crear tabla en esquema de base de datos
  * Carga de datos de centrales
  * Desarrollar interfaz con campos de input
  * Crear validaciones para cada campo
  * Crear tests para verificación de datos

* [x] Pedir taxi

  * Desarrollar interfaz de UI con visualización de GPS
  * Implementar vinculación con sistema de geoposicionamiento
  * Implementar generación de un mapa
  * Implementar endpoints de API para envío de información
  * Crear tests para interacción de usuario
  * Crear tests para uso de APIs de geolocalización

* [x] Ocupar taxi

  * Desarrollar pantalla
  * Implementar cambio de estado y envío de datos
  * Crear tests para escenarios con distintos estados

* [x] Liberar taxi

  * Será realizada en conjunto con ocupar taxi

* [ ] Marcar taxi como fuera de servicio

  * Implementar cambio de estado y envío de datos

* [x] Notificar a taxista y a central pedido de taxi

  * Desarrollar notificación indicando información y búsqueda de iconos

  * Implementación de sistema de notificaciones
  * Crear tests para distintos envíos de notificaciones

* [x] Buscar taxis cercanos

  * Desarrollar pantalla
  * Desarrollar visualización con generación de mapa
  * Implementar endpoint para envío de información de taxis
  * Implementar criterio para selección de taxis cercanos
  * Crear tests con escenarios de distinta cantidad de taxis y ubicaciones

* [x] Ver ubicación del pasajero

  * Desarrollar pantalla
  * Desarrollar visualización con generación de mapa
  * Implementar obtención de datos de ubicación
  * Implementar endpoint para envío de datos de ubicación
  * Crear tests para distintos escenarios

* [ ] Ver mapa de taxis

  * Desarrollar interfaz de UI
  * Desarrollar visualización con generación de mapa
  * Implementar criterio para visualización y búsqueda de datos de taxis
  * Implementar endpoint para búsqueda de datos de posición y de información de taxis
  * Crear tests para distintos escenarios

Orden para implementar stories:

1. Loguear taxista
2. Ocupar taxi
3. Liberar taxi - fin primer sprint
4. Pedir taxi
5. Notificar a taxista y a central pedido de taxi -fin segundo sprint
6. Buscar taxis cercanos
7. Ver ubicación del pasajero - fin tercer sprint

Justificación:

Loguear es solo autenticación, ocupar y liberar taxi es solo un cambio de estado

Notificar a taxista requiere indagar en sistemas de notificaciones y está relacionada con pedir taxi que será ingreso de datos y envío

Buscar taxis cercanos y ver ubicación del pasajero requieren averiguar sobre API de localización y la ubicación requiere una visualización más compleja

