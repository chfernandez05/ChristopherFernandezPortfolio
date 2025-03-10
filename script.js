const infoBoxes = document.querySelectorAll('.info-box');

infoBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const isExpanded = box.classList.contains('expanded');

        infoBoxes.forEach(otherBox => {
            otherBox.classList.remove('expanded');
        });

        if (!isExpanded) {
            box.classList.add('expanded');
        }
    });
});