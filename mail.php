<?php

$name = $_POST['name'];
$num = $_POST['num'];
$message = $_POST['message'];

// Сообщение
$message = $name.";".$num.";".$message;

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Отправляем
mail('yaponchik7182@gmail.com', 'My Subject', $message);
    echo "Данные успешно отправлены";
?>