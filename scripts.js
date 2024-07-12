document.querySelectorAll('.course-title').forEach(item => {
            item.addEventListener('click', () => {
                const nextElement = item.nextElementSibling;
                if (nextElement && nextElement.classList.contains('course-description')) {
                    nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
                }
            });
        });