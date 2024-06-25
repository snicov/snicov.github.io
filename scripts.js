document.addEventListener("DOMContentLoaded", () => {
    fetchMarkdownContent('research.md', 'research-content');
    fetchMarkdownContent('software.md', 'software-content');
    fetchMarkdownContent('publications.md', 'publications-content');
});

function fetchMarkdownContent(markdownFile, elementId) {
    fetch(markdownFile)
        .then(response => response.text())
        .then(text => {
            document.getElementById(elementId).innerHTML = marked.parse(text);
        });
}
