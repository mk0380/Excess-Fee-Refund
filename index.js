document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll('.input-data input');

    inputFields.forEach(input => {
        input.addEventListener('input', function () {
            const label = this.parentNode.querySelector('label');
            if (this.value.trim() !== '') {
                label.classList.add('focused');
            } else {
                label.classList.remove('focused');
            }
        });
    });
});


import { PDFDocument, rgb } from 'https://cdn.skypack.dev/pdf-lib'


const generatePDF = async (name, roll, programme, branch, roomNo, hallNo, purpose, email, altEmail, contact, local, permanent, thesis, date1, head, date2) => {

    const exBytes = await fetch("./SBF.pdf").then((res) =>
        res.arrayBuffer()
    );

    const exFont = await fetch("./Sanchez-Regular.ttf").then((res) =>
        res.arrayBuffer()
    );


    const pdfDoc = await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);

    const myFont = await pdfDoc.embedFont(exFont)

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    firstPage.drawText(name, {
        x: 171,
        y: 565,
        size: 12,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(roll, {
        x: 120,
        y: 527,
        size: 12,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (programme.length < 25) {
        firstPage.drawText(programme, {
            x: 142,
            y: 488,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(programme.substring(0, 25) + "-", {
            x: 142,
            y: 488,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(programme.substring(25, programme.length), {
            x: 142,
            y: 474,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (branch.length < 30) {
        firstPage.drawText(branch, {
            x: 355,
            y: 488,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(branch.substring(0, 30) + "-", {
            x: 355,
            y: 488,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(branch.substring(30, branch.length), {
            x: 355,
            y: 474,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    firstPage.drawText(roomNo, {
        x: 132,
        y: 450,
        size: 12,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(hallNo, {
        x: 371,
        y: 450,
        size: 12,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (purpose.length > 70) {
        firstPage.drawText(purpose.substring(0, 70) + "-", {
            x: 128,
            y: 413,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(purpose.substring(70, purpose.length), {
            x: 68,
            y: 400,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(purpose, {
            x: 128,
            y: 413,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (email.length > 23) {
        firstPage.drawText(email.substring(0, 23), {
            x: 123,
            y: 377,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(email.substring(23, email.length), {
            x: 123,
            y: 364,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

    } else {
        firstPage.drawText(email, {
            x: 123,
            y: 377,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (altEmail.length > 23) {
        firstPage.drawText(altEmail.substring(0, 23), {
            x: 378,
            y: 377,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(altEmail.substring(23, altEmail.length), {
            x: 378,
            y: 364,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

    } else {
        firstPage.drawText(altEmail, {
            x: 378,
            y: 377,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }


    firstPage.drawText(contact, {
        x: 199,
        y: 340,
        size: 12,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (local.length < 36) {
        firstPage.drawText(local, {
            x: 72,
            y: 290,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else if (local.length >= 36 && local.length < 68) {
        firstPage.drawText(local.substring(0, 36) + "-", {
            x: 72,
            y: 290,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(36, local.length), {
            x: 72,
            y: 269,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else if (local.length >= 68 && local.length < 102) {
        firstPage.drawText(local.substring(0, 36) + "-", {
            x: 72,
            y: 290,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(36, 68) + "-", {
            x: 72,
            y: 269,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(68, local.length), {
            x: 72,
            y: 248,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(local.substring(0, 36) + "-", {
            x: 72,
            y: 290,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(36, 68) + "-", {
            x: 72,
            y: 269,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(68, 102) + "-", {
            x: 72,
            y: 248,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(local.substring(102, local.length), {
            x: 72,
            y: 230,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (permanent.length < 36) {
        firstPage.drawText(permanent, {
            x: 315,
            y: 290,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else if (permanent.length >= 36 && permanent.length < 68) {
        firstPage.drawText(permanent.substring(0, 36) + "-", {
            x: 315,
            y: 290,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(36, permanent.length), {
            x: 315,
            y: 269,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else if (permanent.length >= 68 && permanent.length < 102) {
        firstPage.drawText(permanent.substring(0, 36) + "-", {
            x: 315,
            y: 290,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(36, 68) + "-", {
            x: 315,
            y: 269,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(68, permanent.length), {
            x: 315,
            y: 248,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(permanent.substring(0, 36) + "-", {
            x: 315,
            y: 290,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(36, 68) + "-", {
            x: 315,
            y: 269,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(68, 102) + "-", {
            x: 315,
            y: 248,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(permanent.substring(102, permanent.length), {
            x: 315,
            y: 230,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (thesis.length > 21) {

        firstPage.drawText(thesis.substring(0, 21) + "-", {
            x: 255,
            y: 169,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(thesis.substring(21, thesis.length), {
            x: 255,
            y: 153,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });


    } else {
        firstPage.drawText(thesis, {
            x: 255,
            y: 169,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }


    firstPage.drawText(date1, {
        x: 435,
        y: 169,
        size: 12,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (head.length > 12) {

        firstPage.drawText(head.substring(0, 12) + "-", {
            x: 315,
            y: 116,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(head.substring(12, head.length), {
            x: 315,
            y: 101,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });


    } else {
        firstPage.drawText(head, {
            x: 315,
            y: 116,
            size: 12,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }


    firstPage.drawText(date2, {
        x: 437,
        y: 116,
        size: 12,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();

    var file = new File(
    [pdfBytes],
    "SBF Loan Form.pdf",
    {
      type: "application/pdf;charset=utf-8",
    }
  );
 saveAs(file);

    // document.querySelector('#mypdf').src = uri

};

const submitBtn = document.getElementById('btn')

const name = document.querySelector("#studentInput")
const roll = document.querySelector("#rollInput")
const programme = document.querySelector("#programmeInput")
const branch = document.querySelector("#branchInput")
const roomNo = document.querySelector("#roomNoInput")
const hallNo = document.querySelector("#hallInput")
const email = document.querySelector("#emailInput")
const altEmail = document.querySelector("#altEmailInput")
const local = document.querySelector("#locAddInput")
const permanent = document.querySelector("#perAddInput")
const contact = document.querySelector("#contactParInput")
const purpose = document.querySelector("#purposeInput")
const thesis = document.querySelector("#thesisInput")
const date1 = document.querySelector("#date1Input")
const head = document.querySelector("#headInput")
const date2 = document.querySelector("#date2Input")

submitBtn.addEventListener('click', () => {

    if(name.value.length==0 || roll.value.length==0 || roomNo.value.length==0 || email.value.length==0 || altEmail.value.length==0 || local.value.length==0 || permanent.value.length==0 || contact.value.length==0 || purpose.value.length==0){
        alert("Please fill all the required details before submitting")
        return
    }
    generatePDF(name.value, roll.value, programme.value, branch.value, roomNo.value, hallNo.value, purpose.value, email.value, altEmail.value, contact.value, local.value, permanent.value, thesis.value, date1.value, head.value, date2.value)
})






