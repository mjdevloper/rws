import helper from 'sendgrid'

export default function sendMail(messageContent) {

    var from_email = new helper.mail.Email('website@remotewebsolutions.com');
    var to_email = new helper.mail.Email('mike@remotewebsolutions.com');
    var subject = 'Inquiry';
    var content = new helper.mail.Content('text/plain', messageContent);
    var mail = new helper.mail.Mail(from_email, subject, to_email, content);


    console.log(process);
    console.log(process.env);
    console.log(process.env.SENDGRID_API_KEY);

    var sg = require('sendgrid')('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');
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    });

}