/**
Nombre: Input tipo Texto que reciba sólo letras. x

Apellidos: Input tipo Texto que reciba sólo letras.  x

Fecha de Nacimiento: control tipo Date. x

Servicio Correo electrónico: Control tipo Select con dos opciones: Gmail y Hotmail x

Correo Electrónico: Formar el nombre de usuario según el siguiente formato: inicial del nombre + apellido(sin espacio) + año de nacimiento

Botón <Insertar>

Crear una tabla con los siguientes encabezados: Nombre Completo | Edad | Correo Electrónico
**/

$(document).ready(function()
        {
            $("#agregar").click(function()
            {   // Obtener nombre
                var nombre= $("#nombre").val(); 
                
                //obtener apellidos               
                var apellidos = $("#apellidos").val();                
                
                //obtener valor del select
                var tipo_Correo = $("#SubjectsList option:selected").text();
                
                //obtener campo date   
                var date = new Date($('#bday').val());
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                

                // calcular edad
                var today = new Date();
                var age = Math.floor((today-date) / (365.25 * 24 * 60 * 60 * 1000));
                
                // Crear nombre 
                var Fullname = nombre + " " + apellidos;

                // calcular primera letra del nombre
                var letra =nombre.substr(0,1);
                var correo = letra+apellidos+year+"@"+tipo_Correo;
                
                // Mostrar datos en html
                var add = "<tr>"
                add+="<td>" + Fullname + "</td>"
                add+="<td>" + age + "</td>"
                add+="<td>"+correo+"</td>"
                add+="<tr>"
                           

                $("table").append(add);
            });
        });

