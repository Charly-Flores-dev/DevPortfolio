<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  // Configurar los datos del correo
  $destinatario = 'charlesflo23@gmail.com';
  $asunto = 'Nuevo mensaje de contacto';

  // Construir el contenido del correo
  $contenido = "Nombre: $nombre\n";
  $contenido .= "Email: $email\n\n";
  $contenido .= "Mensaje:\n$mensaje\n";

  // Enviar el correo
  $headers = "From: $nombre <$email>\r\n";
  if (mail($destinatario, $asunto, $contenido, $headers)) {
    echo '¡El mensaje se envió correctamente!';
  } else {
    echo 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
  }
}
?>
