document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-container');
    const setCount = 3; // Number of image sets
    let currentSetIndex = 0;


    function logout() {
        // Redirect to login.html
        window.location.href = 'loginpage.html';
    }

    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }


    const profileButton = document.getElementById('btn-message');

            if (profileButton) {
                profileButton.addEventListener('click', function () {
                    window.location.href = 'profile-page.html';
                });
            }

    const imageSets = [
        ['image/justinbieber.jpg', 'image/taylorswift.jpg', 'image/weeknd.jpg', 'image/kanye west.jpg'],
        ['image/ariana grande1.jpg', 'image/drake1.jpg', 'image/bruno mars.jpg', 'image/adele1.jpg'],
        ['image/beyonce1.png', 'image/ed sheeran1.jpg', 'image/rihanna1.jpg', 'image/dua lipa1.jpg']
    ];

    const nftSets = [
        ['image/nft.jpg', 'image/nft2.jpg', 'image/nft3.jpg', 'image/nft4.jpg'],
        ['image/nft5.png', 'image/nft6.jpg', 'image/nft7.jpg', 'image/nft8.jpg'],
        ['image/nft6.jpg', 'image/nft11.jpg', 'image/nft12.jpg', 'image/nft9.png']
    ];

    function showNextSet() {
        imageContainers.forEach((container, setIndex) => {
            const images = Array.from(container.querySelectorAll('.image'));
            let currentSet = imageSets[currentSetIndex];

            images.forEach((image, index) => {
                image.src = currentSet[index];
            });
        });

        currentSetIndex = (currentSetIndex + 1) % setCount;
    }

    // Call the showNextSet function every 3000 milliseconds (3 seconds)
    setInterval(showNextSet, 3000);

    imageContainers.forEach((container, setIndex) => {
        const images = Array.from(container.querySelectorAll('.image'));

        images.forEach((image, index) => {
            let isTransitioning = false;

            image.addEventListener('transitionstart', function () {
                isTransitioning = true;
            });

            image.addEventListener('transitionend', function () {
                isTransitioning = false;
            });

            image.addEventListener('mouseenter', function () {
                if (!isTransitioning) {
                    image.src = nftSets[currentSetIndex][index];
                }
            });

            image.addEventListener('mouseleave', function () {
                image.src = imageSets[currentSetIndex][index];
            });
        });
    });
});

function handleKeyPress(event) {
    if (event.key === "Enter") {
        // If Enter key is pressed, trigger the search function
        searchFunction();
    }
}

function searchFunction() {
    let searchKey = document.getElementById("searchkey").value.toLowerCase(); // Convert to lowercase
    localStorage.setItem("searchkey", searchKey);
    updateImagesBasedOnSearch();
}

function updateImagesBasedOnSearch() {
    const imageContainers = document.querySelectorAll('.image-container');
    const setCount = 2; // Number of image sets
    let currentSetIndex = 0;

    const imageSets = [
        ['image/justinbieber.jpg', 'image/taylorswift.jpg', 'image/weeknd.jpg', 'image/kanye west.jpg'],
        ['image/ariana grande1.jpg', 'image/drake1.jpg', 'image/bruno mars.jpg', 'image/adele1.jpg'],
        ['image/beyonce1.png', 'image/ed sheeran1.jpg', 'image/rihanna1.jpg', 'image/dua lipa1.jpg']
    ];

    const nftSets = [
        ['image/nft.jpg', 'image/nft2.jpg', 'image/nft3.jpg', 'image/nft4.jpg'],
        ['image/nft5.png', 'image/nft6.jpg', 'image/nft7.jpg', 'image/nft8.jpg'],
        ['image/nft6.jpg', 'image/nft11.jpg', 'image/nft12.jpg', 'image/nft9.png']
    ];

    const searchKey = localStorage.getItem("searchkey");

    imageContainers.forEach((container, setIndex) => {
        const images = Array.from(container.querySelectorAll('.image'));
        let currentSet = imageSets[currentSetIndex];

        for (let q = 0; q < currentSet.length; q++) {
            let imageName = currentSet[q].split('/').pop().toLowerCase();
            if (!imageName.includes(searchKey)) {
                currentSet[q] = "image/spidey.jpg";
            }
        }

        images.forEach((image, index) => {
            image.src = currentSet[index];
        });
    });

}





//   // Define an array of image sets
//   const imageSets = [
//     ['image/justinbieber.jpg', 'image/taylorswift.jpg', 'image/weeknd.jpg', 'image/kanye west.jpg'],
//     ['image/kendrikk.jpg', 'image/taylor2.jpg', 'image/harrystyles.jpg', 'image/bohemian.jpg'],
//     ['image/ariana grande1.jpg', 'image/drake1.jpg', 'image/bruno mars.jpg', 'image/adele1.jpg'],
//     ['image/beyonce1.png', 'image/ed sheeran1.jpg', 'image/rihanna1.jpg', 'image/dua lipa1.jpg'],
//     // Add more sets as needed
// ];
