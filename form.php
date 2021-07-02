<?php
    //Se traen los estilos para mostrar el modal
    echo '<link rel="stylesheet" href="CSS/styles.css">';

    //Configuración de el formulario y sus variables
    $destinatario = 'alberto@lachfilms.com';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $asunto = "Contacto desde la página de Lach Films";

    $mensaje = "Nombre: " . $name . "\n" . "Correo: " . $email . "\n" .  "Mensaje: " . $message;
    
    echo '
    <div class="form-modal">
    <p>¡¡Datos enviado exitosamente!!</p>
    <p>Tus datos han sido enviados, nos pondremos en contacto contigo a la brevedad.</p>
    </div>';   
    
    echo "<script> setTimeout(\"location.href='index.php'\", 2500)</script>";
    mail($destinatario, $asunto, $mensaje);


?>