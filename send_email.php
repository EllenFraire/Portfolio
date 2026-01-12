<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Charge les fichiers PHPMailer manuellement (car pas de Composer)
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

header('Content-Type: application/json');

// Récupération des données JSON
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Aucune donnée reçue.']);
    exit;
}

$name = strip_tags(trim($data['name']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$message = strip_tags(trim($data['message']));

if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Veuillez remplir tous les champs correctement.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configuration du serveur SMTP
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';       // Serveur SMTP de Gmail
    $mail->SMTPAuth   = true;
    $mail->Username   = 'ellenfraire@gmail.com'; // Votre adresse Gmail
    $mail->Password   = 'dohz qquy qsfu vttg'; // <-- REMPLACEZ CECI PAR VOTRE MOT DE PASSE D'APPLICATION
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    // Expéditeur et destinataire
    // Note: Gmail réécrit souvent le "From" avec votre adresse authentifiée pour éviter le spam.
    $mail->setFrom('ellenfraire@gmail.com', 'Portfolio Contact'); 
    $mail->addAddress('ellenfraire@gmail.com');     // Où vous recevez l'email
    $mail->addReplyTo($email, $name);               // Pour pouvoir répondre directement à la personne

    // Contenu
    $mail->isHTML(false); // Email en texte brut pour simplicité
    $mail->Subject = "Nouveau message de $name via le Portfolio";
    $mail->Body    = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès !']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => "Erreur lors de l'envoi : {$mail->ErrorInfo}"]);
}
?>
