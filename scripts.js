document.addEventListener("DOMContentLoaded", () => {
    const contentSection = document.getElementById("content");

    // Adjust the URL to the appropriate Markdown file for each page
    const markdownFile = getMarkdownFile();

    fetch(markdownFile)
        .then(response => response.text())
        .then(text => {
            contentSection.innerHTML = marked(text);
        })
        .catch(error => {
            contentSection.innerHTML = "<p>Error loading content. Please try again later.</p>";
            console.error('Error fetching markdown file:', error);
        });
});

function getMarkdownFile() {
    const path = window.location.pathname;
    if (path.includes("about.html")) return "about.md";
    if (path.includes("blog.html")) return "blog.md";
    if (path.includes("research.html")) return "research.md";
    if (path.includes("teaching.html")) return "teaching.md";
    if (path.includes("physics.html")) return "physics.md";
    return "index.md";  // Default or home page markdown file
}
