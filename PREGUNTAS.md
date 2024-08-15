¿Qué propósito cumple el archivo main.ts en un proyecto NestJS y por qué es crucial en la configuración inicial? Puedes leer más sobre el archivo aquí en la sección inferior de notas.

--Su proposito es configurar y encender el servidor de la aplicación, es crucial por que orquesta la inicializacion de la aplicación sin involucrarse en la logica de negocio.

¿Qué diferencia existe entre app.module.ts y app.controller.ts? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación? Puedes leer sobre el archivo aquí o aquí.

--app.module.ts es el modulo raiz que organiza los demas modulos necesarios y app.controller.ts es un controlador basico que maneja las rutas y los endpoints.

¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?

--Para solucion de errores mas facil y sin afectar los demas modulos, tambien para poder reutilizar diferentes partes del codigo en otros lugares de la aplicacion o incluso en otras aplicaciones, por orden y legibilidad.

¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?

--Se hace mucho mas facil el mantenimiento y escalabilidad ya que se pueden cambiar, insertar o reemplazar modulos sin necesidad de cambiar toda la aplicacion, tambien es mas facil de detectar errores y solucionarlos sin afectar los demas modulos de la aplicacion.

Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?

--Se deben crear los archivos controladores (users.controller.ts) y de servicios (user.services.ts), se relacionan importandolos en los modulos creados:
// en users.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?

--Si un decorador se define incorrectamente puede modificar la solicitud deseada, y esto afecta la logica del endpoint que se requiere.

¿Por qué es importante manejar rutas dinámicas (por ejemplo, @Get(':id')) en aplicaciones que interactúan con bases de datos?

--Es importante para acceder a recursos especificos, por tema de eficiencia y para mejorar la experiencia del usuario.

¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?

--La separacion de responsabilidades, por temas de mantenimiento y escalabilidad y facilita la reutilizacion.
    
¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?

--Mejora la capacidad de prueba al permitir la inyección de dependencias simuladas y la configuración de módulos específicos para pruebas, lo que facilita la realización de pruebas unitarias e integración de manera efectiva.

¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?

--Por seguridad, por integridad de los datos y por prevencion de errores operacionales.

¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?

--Si un decorador esta mal colocado puede ocurrir que el comportamiento de las rutas sea distinto al deseado, tambien puede incurrir en temas de autenticacion o autorizacion.
y si hay pipes mal aplicados pueden ocurrir errores de validacion que no deberian, problemas con la seguridad y una mala experiencia del usuario.

¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?

--Resulta en claridad de errores, reduce las interrupciones, previene errores criticos que causen fallas graves en la aplicacion, mejora la seguridad previene la exposicion de informacion sensible y controla accesos.

¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?

--Ofrece beneficios en consistencia, mayor seguridad, mejora el mantenimiento y la eficiencia, claridad en errores, eso lleva a la mejora de la experiencia del usuario
