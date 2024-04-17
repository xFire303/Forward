import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def invia_email():
    # Parametri del server SMTP
    smtp_server = 'smtp.gmail.com'
    port = 587
    mittente_email = 'boscom303@gmail.com'
    password = "cqml migl teax evcd"

    # Destinatari
    destinatari = {
        'Marco Bosco': 'boscom303@gmail.com',
    }

    # Connessione al server SMTP
    server = smtplib.SMTP(smtp_server, port)
    server.starttls()
    server.login(mittente_email, password)

    # Composizione del messaggio
    oggetto = 'Segnalazione'
    testo = 'Ho questo problema.....'

    for nome, email_destinatario in destinatari.items():
        msg = MIMEMultipart()
        msg['From'] = mittente_email
        msg['To'] = email_destinatario
        msg['Subject'] = oggetto

        # Corpo dell'email
        corpo_email = f'{testo}'
        msg.attach(MIMEText(corpo_email, 'plain'))

        # Invio dell'email
        server.send_message(msg)
        del msg

    # Chiusura della connessione
    server.quit()

# Chiamata alla funzione per inviare l'email
invia_email()
