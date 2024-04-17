import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import sys

def invia_email(testo):
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

    for nome, email_destinatario in destinatari.items():
        msg = MIMEMultipart()
        msg['From'] = mittente_email
        msg['To'] = email_destinatario
        msg['Subject'] = oggetto

        # Corpo dell'email
        corpo_email = testo
        msg.attach(MIMEText(corpo_email, 'plain'))

        # Invio dell'email
        server.send_message(msg)
        del msg

    # Chiusura della connessione
    server.quit()

# Se il modulo viene eseguito direttamente
if __name__ == "__main__":
    if len(sys.argv) > 1:
        testo = sys.argv[1]
        invia_email(testo)
    else:
        print("Errore: specificare il testo dell'email da inviare.")
