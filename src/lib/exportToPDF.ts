export const exportToPDF = () => {
	// change print page size to #resume div size to avoid page break
	const resume = document.querySelector('#resume');

	if (!resume) {
		console.error('No resume element found');
		return;
	}

	const { width, height } = resume.getBoundingClientRect();
	const pageWidth = Math.ceil(width);
	const pageHeight = Math.ceil(height * 1.005); // Height is increased by 0.5% to avoid page break

	const style = document.createElement('style');
	style.innerHTML = `@page { size: ${pageWidth}px ${pageHeight}px; margin: 0; }`;

	document.head.appendChild(style);

	window.print();

	style.remove();
};
