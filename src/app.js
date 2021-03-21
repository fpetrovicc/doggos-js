const BALL = "https://dog.ceo/api/breeds/image/random";
const img = document.querySelector(".dogs-img");

function playFetch() {

    const promise = fetch(BALL);

    promise
        .then(function(response) {

            const processingPromise = response.json();
            return processingPromise;

        })

        .then(function(processedResponse) {

            img.src = processedResponse.message;

        });

}

document.querySelector(".dogs-btn").addEventListener("click", playFetch);