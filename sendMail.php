<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="img/icon/email.png" sizes="32x32">
    <title>Sending mail...</title>
</head>
<body>
    
</body>
</html>


<?php

    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $msg = 'Nuevo mail de tu portfolio: --
                Remitente: ' . $email . ' -- '.
                'Asunto: ' . $subject . ' -- '.
                'Mensaje: ' . $message;

        
        // Edit this path if PHPMailer is in a different location.
        require('./PHPMailer/PHPMailerAutoload.php');

        $mail = new PHPMailer;
        $mail->isSMTP();

        /*
        * Server Configuration
        */

        $mail->Host = 'smtp.gmail.com'; // Which SMTP server to use.
        $mail->Port = 587; // Which port to use, 587 is the default port for TLS security.
        $mail->SMTPSecure = 'tls'; // Which security method to use. TLS is most secure.
        $mail->SMTPAuth = true; // Whether you need to login. This is almost always required.
        $mail->Username = "exophone.contact@gmail.com"; // Your Gmail address.
        $mail->Password = "1df2gh3jk"; // Your Gmail login password or App Specific Password.

        /*
        * Message Configuration
        */

        $mail->setFrom('exophone.contact@gmail.com', 'Bot'); // Set the sender of the message.
        $mail->addAddress('joelperpetua@gmail.com', 'Joel'); // Set the recipient of the message.
        $mail->Subject = 'Portfolio Message'; // The subject of the message.

        /*
        * Message Content - Choose simple text or HTML email
        */


        // ... or send an email with HTML.
        $mail->msgHTML($msg);
        $mail->IsHTML(true);
        // Optional when using HTML: Set an alternative plain text message for email clients who prefer that.
        $mail->AltBody = $msg;


        if ($mail->send()) {
            echo '<script>
                        alert("Email sent correctly");
                        window.open("http://joeperpetua.me/en", "_self");
                    </script>';
        } else {
            echo '<script>alert("Error: '.$mail->ErrorInfo.'")</script>';
        }
    }


?>