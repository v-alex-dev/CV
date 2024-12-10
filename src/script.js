document.getElementById("pdf").addEventListener("click", generatePDF);
window.screen.width < 768 ? document.getElementById("pdf").style.display = "none" : null;

function generatePDF() {
  // Sélectionner l'élément HTML que vous souhaitez capturer
  const cvElement = document.querySelector(".cv-container");

  // Utiliser html2canvas pour capturer l'élément en tant qu'image
  html2canvas(cvElement, { scale: 2 }).then((canvas) => {
    // Obtenir l'image générée
    const imgData = canvas.toDataURL("image/png");

    // Créer un PDF avec jsPDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");

    // Dimensions du PDF
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Dimensions de l'image
    const imgWidth = canvas.width / 2; // Ajusté pour correspondre à l'échelle de html2canvas
    const imgHeight = (canvas.height / canvas.width) * pageWidth;

    // Ajouter l'image au PDF
    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);

    // Sauvegarder le PDF
    pdf.save("CV_Alexandre_Vens.pdf");
  });
}


