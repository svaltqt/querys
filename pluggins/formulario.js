$(document).ready(function()
        {
            $("#agregar").click(function()
            {
                $("#nombre").val();                
                $("#apellidos").val();                
                
                alert($("#SubjectsList option:selected").text());
                
                    


                $("table").append(add);
            });
        });

