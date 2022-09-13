class Document {
  static render(dashboard) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Team Monitor Dashboard</title>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.min.css"
            integrity="sha512-XWTTruHZEYJsxV3W/lSXG1n3Q39YIWOstqvmFsdNEEQfHoZ6vm6E9GK2OrF6DSJSpIbRbi+Nn0WDPID9O7xB2Q=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
            />
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
            integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
            />
            <link
            href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
            rel="stylesheet"
            />
            <link rel="stylesheet" href="style.css" />
        </head>
        <body>
            <div class="container">
            <div class="bg-primary text-center py-4">
                <h1 class="text-dark">Agrant Inc. Team Dashboard</h1>
            </div>
            <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-light bg-secondary py-4 px-3">My Team</h1>
            </div>
            <div class="flex-row">
                <div class="container">
                <div id="root" class="row justify-content-center">${dashboard}</div>
                </div>
            </div>
            <footer class="container text-center py-3">
                <h3 class="text-dark">
                &copy; 2022 by <a href="https://github.com" target="_blank">Agrant</a>
                </h3>
            </footer>
            </div>
            <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
            integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
            ></script>
            <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"
            integrity="sha512-2rNj2KJ+D8s1ceNasTIex6z4HWyOnEYLVC3FigGOmyQCZc2eBXKgOxQmo3oKLHyfcj53uz4QMsRCWNbLd32Q1g=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
            ></script>
            <script
            src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js"
            integrity="sha512-8Y8eGK92dzouwpROIppwr+0kPauu0qqtnzZZNEF8Pat5tuRNJxJXCkbQfJ0HlUG3y1HB3z18CSKmUo7i2zcPpg=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
            ></script>
        </body>
        </html>
    `;
  }
}

module.exports = Document;
