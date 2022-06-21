const xhr = new XMLHttpRequest()

document.querySelector('#search-btn').addEventListener('click', () => {
    const searchQuery = document.querySelector('#search-query').value
    
    const api_key = 'AIzaSyBL7tmoBcFl44584VA4eC7RrVu_izPyyLM'
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${api_key}&maxResults=100`
    
    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)

            var output = ''
            for(let i=0; i < response.items.length; i++) {
                output += `
                    <div class="container-item">
                        <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
                            <img src=${response.items[i].snippet.thumbnails.high.url} />
                        </a>
                        <p style="color: white">${response.items[i].snippet.title}<p>
                        <small style="color: gray">${response.items[i].snippet.description}</small>
                    </div>
                `
            }

            document.querySelector('#my-container').innerHTML = output
        }
    }

    xhr.send()
})