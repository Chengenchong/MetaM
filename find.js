document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-container');
    let imageSets = [
        ['image/justinbieber.jpg', 'image/taylorswift.jpg', 'image/weeknd.jpg', 'image/kanye west.jpg'],
        ['image/ariana grande1.jpg', 'image/drake1.jpg', 'image/bruno mars.jpg', 'image/adele1.jpg']
    ];

    function showNextSet() {
        let currentSetIndex = 0;

        for (let i = 0; i < imageContainers.length; i++) {
            const container = imageContainers[i];
            const images = Array.from(container.querySelectorAll('.image'));

            let currentSet = imageSets[currentSetIndex];

            for (let q = 0; q < currentSet.length; q++) {
                let searchKey = localStorage.getItem("searchkey").toLowerCase(); // Convert to lowercase
                let imageName = currentSet[q].split('/').pop().toLowerCase(); // Get the image name without the path
                if (imageName.includes(searchKey)) {
                    // If it matches, do nothing (keep the original image)
                } else {
                    currentSet[q] = "image/spidey.jpg"; // Replace images that don't match with a default one
                }
            }

            for (let j = 0; j < images.length; j++) {
                images[j].src = currentSet[j];
                images[j].style.display = 'none';
            }

            currentSetIndex = (currentSetIndex + 1) % imageSets.length;

            for (let k = 0; k < images.length; k++) {
                images[k].style.display = 'block';
            }
        }
    }

    setInterval(showNextSet, 1000);
});

function searchfunction() {
    let searchkey = document.getElementById("searchkey").value.toLowerCase(); // Convert to lowercase
    localStorage.setItem("searchkey", searchkey);
}
