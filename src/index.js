//Variables
const title = document.getElementById("exhibit-title")
const description = document.getElementById("exhibit-description")
const image = document.getElementById("exhibit-image")
const ticketsBought = document.getElementById("tickets-bought")
const commentsSection = document.getElementById("comments-section")
const commentForm = document.getElementById("comment-form")
const buyTicketsButton = document.getElementById("buy-tickets-button")

//Fetch
fetch("http://localhost:3000/current-exhibits")
.then(function (res) {
    return res.json();
})
.then(function (data) {
    console.log(data)
    renderExhibitData(data);
})

//Render Exhibit Data
function renderExhibitData(data) {
    for (const exhibit of data) {
        //console.log(exhibit)

    title.textContent = exhibit.title
    description.textContent = exhibit.description
    image.src = exhibit.image
    let ticketsBoughtNumber = exhibit.tickets_bought
    ticketsBought.textContent = ticketsBoughtNumber + " Tickets Bought"

    //Buy tickets
    buyTicketsButton.addEventListener("click", function() {
        console.log("i want to buy tickets!")
    ticketsBought.textContent = `${ticketsBoughtNumber+=1}` + " Tickets Bought" 
    })

    //Render comments
    for (comment of exhibit.comments) {
        console.log(comment)

       const commentParagraph = document.createElement("p")
        commentParagraph.textContent = comment
        commentsSection.append(commentParagraph)
    }
    }   


}

//Add submitted comments to comments section
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log(e.target["comment-input"].value)

    const commentParagraph = document.createElement("p")
        commentParagraph.textContent = e.target["comment-input"].value
        commentsSection.append(commentParagraph)
})

