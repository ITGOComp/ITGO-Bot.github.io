<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "ITGOcomp@yandex.ru";
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $headers = "From: " . $_POST["email"];

    if(mail($to, $subject, $message, $headers)) {
        echo "<p>Сообщение отправлено успешно!</p>";
    } else {
        echo "<p>Произошла ошибка при отправке сообщения.</p>";
    }
}
?>