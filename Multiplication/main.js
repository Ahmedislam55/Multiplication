function generateTable() {
    // الحصول على الرقم من المستخدم
    let number = parseInt(document.getElementById("numberInput").value);

    if (!isNaN(number)) {
        let table = `<h2>Table for ${number}</h2>`;
        table += "<ul>";

        for (let i = 1; i <= 12; i++) {
            table += `<li>${number} x ${i} = ${number * i}</li>`;
        }

        table += "</ul>";
        document.getElementById("tableOutput").innerHTML = table;
    } else {
        document.getElementById("tableOutput").innerHTML = "<p style='color:red;'>Please enter a valid number.</p>";
    }
}
