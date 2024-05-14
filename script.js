let OTP;
const length = 8

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()
const numbers = '0123456789'
const symbols = `!@#$%^&*()_+-/?~:;"'{}|,<>=[]`

let mixChars = upperCase + lowerCase + numbers + symbols

let createPassword = () => {
    let password = ''
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * upperCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while(length > password.length) {
        password += mixChars[Math.floor(Math.random() * mixChars.length)]
    }
    return password;
}

let emailField = document.getElementById('email');

let nameField = document.getElementById('username');

let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', (e) => {
    
        e.preventDefault()
        if(!emailField.value || !nameField.value)
            alert('Please Provide Information...')

        else {
            OTP = createPassword()
            console.log(OTP)

            let emailTexts = `To verify your email address, please use the following One Time Password (OTP):
                                ${OTP}
                            Do not share this OTP with anyone. Agha-Naveed takes your account security very seriously.
                            Agha-Naveed Customer Service will never ask you to disclose or verify your Agha-Naveed password,
                            OTP, credit card, or banking account number. If you receive a suspicious email with a link to
                            update your account information, do not click on the link—instead, report the email to Agha-Naveed
                            for investigation.

            Thank you!`


            function sendMail() {
                (function () {
                    emailjs.init('65UrAhQQh1tsgfyF2')       // Public Key provided by Emailjs.com
                })();

                var params = {
                    to: emailField.value,
                    message: emailTexts,
                }

                var serviceID = 'service_it3esn6'       // Email Service ID from emailjs.com
                var templateID = 'template_22b489n'     // Template ID from emailjs.com

                emailjs.send(serviceID, templateID, params).then(res => {
                    alert('OTP has been Sent to your Email Address...')
                }) .catch()

            }
            
            sendMail()
        }
    

})  