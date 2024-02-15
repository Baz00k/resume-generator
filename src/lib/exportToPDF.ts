export const exportToPDF = (element: Element) => {
	// change page size to element size to avoid page break or empty pages
	const { width, height } = element.getBoundingClientRect();
	const pageWidth = Math.ceil(width);
	const pageHeight = Math.ceil(height * 1.005); // Height is increased by 0.5% to avoid page break

	const style = document.createElement('style');
	style.innerHTML = `@page { size: ${pageWidth}px ${pageHeight}px; margin: 0; }`;

	document.head.appendChild(style);

	window.print();

	style.remove();
};
