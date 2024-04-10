# app.py
from flask import Flask, render_template, request, redirect, url_for
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

destinatari = {
    'Marco Bosco'             : 'boscom303@gmail.com',
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/segnalazioni')
def altra_pagina():
    return render_template('segnalazioni.html')

@app.route('/send_email', methods=['POST'])
def send_email():
    # Parametri del server SMTP
    smtp_server = 'smtp.gmail.com'
    port = 587
    mittente_email = 'boscom303@gmail.com'

    # Connessione al server SMTP
    server = smtplib.SMTP(smtp_server, port)
    server.starttls()
    server.login(mittente_email, "cqml migl teax evcd")

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
    return redirect(url_for('segnalazioni'))  # Reindirizza alla funzione index
    

if __name__ == '__main__':
    app.run(debug=True)
