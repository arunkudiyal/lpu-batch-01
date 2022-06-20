// Step 1 - Create an Object of XMLHttpRequest() - XHR
const xhr = new XMLHttpRequest()
const url = `https://api.github.com/users`

// Step 2 - Open the portal of communication b/w the client and the server - HTTPMethod, url
xhr.open('GET', url)

// Step 3 - You have mention a functionality on the state change
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        // console.log(xhr.responseText)

        // Data Type --> Array of Objects
        const response = JSON.parse(xhr.responseText)

        // response.forEach( res => {
            // const myImageURL = res.avatar_url
            // const myImage = document.createElement('img')
            // myImage.setAttribute('src', myImageURL)

        //     const parser = new DOMParser();
        //     const myImageObject = parser.parseFromString(myImage, "text/html");

        //     // output = output + something
        //     output += myImageObject
        // })

        for(let i=0; i < response.length; i++) {
            const myImageURL = response[i].avatar_url
            const myImage = document.createElement('img')
            myImage.setAttribute('src', myImageURL)

            // const imageElement = <HT>(myImage)

            // output += myImage
            // console.log(myImage)

            document.querySelector('#my-images').innerHTML += imageElement
        }

        // put the image as a child to the div
    }
}

// Step 4 - Send the request
xhr.send()