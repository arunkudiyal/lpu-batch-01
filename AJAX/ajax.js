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

        var output = ''

        for(let i=0; i < response.length; i++) {
            const myImageURL = response[i].avatar_url
            output += `
                <img style="margin: 2em;" src=${myImageURL} />
                <p>${response[i].login}</p>
            `
        }

        // Add this string as an HTML to the div
        document.querySelector('#my-images').innerHTML = output
    }
}

// Step 4 - Send the request
xhr.send()