function updateYear() {
    const span = document.getElementById("year");
    if (span) {
        span.textContent = new Date().getFullYear();
    }
}

async function importComponent(id, file) {
            const response = await fetch(file);
            const html = await response.text();
            document.getElementById(id).innerHTML = html;

            // return so we can chain .then()
            return true;
        }