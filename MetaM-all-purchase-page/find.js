//scrit.js

document.addEventListener('DOMContentLoaded', function () {
    // Get all image containers
    const imageContainers = document.querySelectorAll('.image-container');

    // Define an array of image sets
        let imageSets = [
        ['image/1st april.png', 'image/all good.webp','image/amardeep burn.png', 'image/baguette.jpg'],
        ['image/1st april.png', 'image/bruh.jpg','image/amardeep burn.png', 'image/baguette.jpg'],
        ['image/1st april.png', 'image/all good.webp','image/Burn.png', 'image/baguette.jpg'],
        ['image/1st april.png', 'image/all good.webp','image/amardeep burn.png', 'image/cruz.png'],
        ['image/FBI.png', 'image/all good.webp','image/amardeep burn.png', 'image/baguette.jpg'],
        // Add more sets as needed
    ];

    //you see this means the code runs , comment it after testing 
    //window.alert(imageSets) 



    // Iterate through each image container
    for (let i = 0; i < imageContainers.length; i++) {
        // Get the images and set index for each container
        const container = imageContainers[i];
        const images = Array.from(container.querySelectorAll('.image'));
        let currentSetIndex = 0;

        // Function to show the next set of images
        function showNextSet() {            

            let currentSet = imageSets[currentSetIndex]; //current set of image in rotation 

            for (let q=0; q<currentSet.length; q++) 
            {
                searchkey = localStorage.getItem("searchkey")
                if (currentSet[q].includes(searchkey)) //check if image name got match the user input or not 
                {

                }
                else
                {
                    currentSet[q] = "image/xjp.jpg" //replace images thhat not same with user input with president xi
                }


            }

            // Hide the current set of images  honestly idk the faq dis do 
            for (let j = 0; j < images.length; j++) {
                images[j].src = currentSet[j];
                images[j].style.display = 'none';
            }

            // Move to the next set of images
            currentSetIndex = (currentSetIndex + 1) % imageSets.length;

            // Show the next set of images
            for (let k = 0; k < images.length; k++) {
                images[k].style.display = 'block';
            }
        }

        // Call the showNextSet function every 3000 milliseconds (3 seconds)
        setInterval(showNextSet, 1000);
    }
});

function searchfunction(){
    let searchkey
    searchkey = document.getElementById("searchkey").value;
    localStorage.setItem("searchkey",searchkey)
}
