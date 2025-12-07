const url = "https://official-joke-api.appspot.com/jokes/ten";

let display = document.getElementById("display")
let generate = document.getElementById("generate")



const getJokes = async () =>{
    console.log("Fetching jokes...")
      let request = await  fetch(url)
      

      let result = await request.json()
      
      display.textContent = result[1].setup + result[1].punchline
}

generate.addEventListener("click",getJokes)