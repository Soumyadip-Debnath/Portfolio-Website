
const sendButton = document.getElementById('send-button');
const messageTextarea = document.getElementById('message');

sendButton.addEventListener('click', function () {
    const recipient = 'debnathsoumyadip763@gmail.com';
    const subject = 'Contact Form Submission';
    const body = messageTextarea.value;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
