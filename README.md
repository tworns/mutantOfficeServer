# mutantOfficeServer
Backend for [Mutant Office](https://github.com/tworns/mutantOffice)
API that allows for the creation, deletion, and updating of student entries in a database.
Also allows sending of emails via [Mailgun](http://www.mailgun.com/) and [Twilio](https://www.twilio.com/).

Based on the curriculum for [Xtern Bootcamp 2016](http://bootcamp16.getfretless.com/).

#Setup 
After cloning the repo, make sure Node is installed, as npm is used to manage dependencies.
If you haven't signed up for [Twilio](https://www.twilio.com/) or [Mailgun](http://www.mailgun.com/), do so and follow their instructions to get started.
Ensure that the env file contains the following variables, spelled in exactly the same way set equal to the appropriate things:
* TWILIO_SID = <SID from Twilio>
* TWILIO_AUTH_TOKEN = <Auth token from Twilio>
* TWILIO_PHONE = <Phone number assigned from Twilio>
* MY_PHONE = <Phone number capable of recieving texts>
* MAILGUN_PRIV = <Private key from Mailgun>
* MAILGUN_PUB = <Public key from Mailgun>
* MAILGUN_DOM = <Domain name from Mailgun>

