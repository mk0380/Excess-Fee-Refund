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


const generatePDF = async (academicYear, semester, name, category, roomNo, hallNo, rollNo, programme, branch, email, altEmail, mobile, tsaAcc, branchBank, ifscCode, amt1, mode1, act1, ref1, date1, amt2, mode2, act2, ref2, date2, adhaar1, income1, parent1, adhaar2, income2, parent2) => {

    const exBytes = await fetch("./Excess_Fee_Refund_form.pdf").then((res) =>
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

    const font_size = 10;

    firstPage.drawText(academicYear, {
        x: 145,
        y: 690,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(semester, {
        x: 420,
        y: 690,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (name.length > 24) {
        firstPage.drawText(name.substring(0, 24), {
            x: 145,
            y: 675,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(name.substring(24, name.length), {
            x: 145,
            y: 663,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(name, {
            x: 145,
            y: 665,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    firstPage.drawText(roomNo + " /", {
        x: 420,
        y: 675,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(hallNo.substring(0, 17), {
        x: 455,
        y: 675,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(hallNo.substring(17, hallNo.length), {
        x: 455,
        y: 663,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (programme.length > 18) {
        firstPage.drawText(programme.substring(0, 18), {
            x: 420,
            y: 648,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(programme.substring(18, programme.length), {
            x: 420,
            y: 635,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(programme, {
            x: 420,
            y: 640,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    firstPage.drawText(category.substring(0, 17) + "-", {
        x: 420,
        y: 618,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(category.substring(17, category.length), {
        x: 420,
        y: 606,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(branch.substring(0, 26) + "-", {
        x: 145,
        y: 648,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(branch.substring(26, branch.length), {
        x: 145,
        y: 636,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(rollNo, {
        x: 145,
        y: 610,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(email, {
        x: 143,
        y: 577,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(altEmail, {
        x: 418,
        y: 577,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(mobile, {
        x: 145,
        y: 563,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(tsaAcc, {
        x: 145,
        y: 540,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(ifscCode, {
        x: 420,
        y: 550,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(branchBank, {
        x: 420,
        y: 525,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(amt1, {
        x: 50,
        y: 446,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(amt2, {
        x: 50,
        y: 430,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(mode1, {
        x: 160,
        y: 446,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(mode2, {
        x: 160,
        y: 430,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(act1, {
        x: 270,
        y: 446,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(act2, {
        x: 270,
        y: 430,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(ref1, {
        x: 380,
        y: 446,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(ref2, {
        x: 380,
        y: 430,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(date1, {
        x: 475,
        y: 446,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(date2, {
        x: 475,
        y: 430,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(adhaar1, {
        x: 50,
        y: 352,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(adhaar2, {
        x: 50,
        y: 335,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(parent1, {
        x: 140,
        y: 352,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(parent2, {
        x: 140,
        y: 335,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(income1, {
        x: 330,
        y: 352,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(income2, {
        x: 330,
        y: 335,
        size: font_size + 1,
        font: myFont,
        color: rgb(0, 0, 0),
    });


    const pdfBytes = await pdfDoc.save();

    var file = new File(
        [pdfBytes],
        "Security_Deposit_Refund.pdf",
        {
            type: "application/pdf;charset=utf-8",
        }
    );
    saveAs(file);


    // const uri = await pdfDoc.saveAsBase64({ dataUri: true })

    // document.querySelector('#mypdf').src = uri
};

const submitBtn = document.getElementById('btn')

const academicYear = document.querySelector('#academicYear')
const semester = document.querySelector('#semester')
const name = document.querySelector("#studentInput")
const category = document.querySelector("#category")
const roomNo = document.querySelector("#roomNoInput")
const hallNo = document.querySelector("#hallInput")
const rollNo = document.querySelector("#rollInput")
const programme = document.querySelector("#programmeInput")
const branch = document.querySelector("#branchInput")
const email = document.querySelector("#emailInput")
const altEmail = document.querySelector("#altEmailInput")
const mobile = document.querySelector("#mobileInput")
const tsaAcc = document.querySelector("#tsaAcc")
const branchBank = document.querySelector("#branchName")
const ifscCode = document.querySelector("#ifsc")

console.log(academicYear.value);
console.log(semester.value);
console.log(name.value);
console.log(category.value);
console.log(roomNo.value);
console.log(hallNo.value);
console.log(rollNo.value);
console.log(programme.value);
console.log(branch.value);
console.log(email.value);
console.log(altEmail.value);
console.log(mobile.value);
console.log(tsaAcc.value);
console.log(branchBank.value);
console.log(ifscCode.value);

const amt1 = document.querySelector("#amt1")
const mode1 = document.querySelector("#mode1")
const act1 = document.querySelector("#actAmt1")
const ref1 = document.querySelector("#refAmt1")
const date1 = document.querySelector("#date1Input")

const amt2 = document.querySelector("#amt2")
const mode2 = document.querySelector("#mode2")
const act2 = document.querySelector("#actAmt2")
const ref2 = document.querySelector("#refAmt2")
const date2 = document.querySelector("#date2Input")

const adhaar1 = document.querySelector("#adhaar1")
const income1 = document.querySelector("#income1")
const parent1 = document.querySelector("#parent1")

const adhaar2 = document.querySelector("#adhaar2")
const income2 = document.querySelector("#income2")
const parent2 = document.querySelector("#parent2")

submitBtn.addEventListener('click', (ev) => {

    ev.preventDefault()

    if (academicYear.value.length == 0 || semester.value.length == 0 || name.value.length == 0 || category.value.length == 0 || roomNo.value.length == 0 || hallNo.value.length == 0 || rollNo.value.length == 0 || programme.value.length == 0 || branch.value.length == 0 || email.value.length == 0 || altEmail.value.length == 0 || mobile.value.length == 0 || tsaAcc.value.length == 0 || branchBank.value.length == 0 || ifscCode.value.length == 0) {
        alert("Please fill all the required details before submitting")
        return
    }

    generatePDF(academicYear.value, semester.value.toUpperCase(), name.value.toUpperCase(), category.value.toUpperCase(), roomNo.value.toUpperCase(), hallNo.value.toUpperCase(), rollNo.value, programme.value.toUpperCase(), branch.value.toUpperCase(), email.value, altEmail.value, mobile.value, tsaAcc.value, branchBank.value.toUpperCase(), ifscCode.value, amt1.value, mode1.value.toUpperCase(), act1.value, ref1.value, date1.value, amt2.value, mode2.value.toUpperCase(), act2.value, ref2.value, date2.value, adhaar1.value, income1.value, parent1.value.toUpperCase(), adhaar2.value, income2.value, parent2.value.toUpperCase())
})







