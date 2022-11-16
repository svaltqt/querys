$(document).ready(function()
        {
            $("").click(function()
            {
                var add = "<tr>"
                add+="<td><input type='text' name='nombre' placeholder='Nombre..'></td>"
                add+="<td><input type='date' name='bdate'></td>"
                add+= "<td><input type='email' name='Email' placeholder='correo@email'></td>"
                
                    
                $("table").append(add);
            });
        });