const reviews = [
    {
        id: 1,
        name: 'Micheal Smith',
        title: 'HR',
        image:
        "https://i.ibb.co/TYgpdwt/pexels-photo-11114420.jpg" ,
        content: "I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."
    },
    {
        id: 2,
        name: 'Sarah Sanders',
        title: 'UI/UX',
        image:
        "https://i.ibb.co/tMzSJ9z/pexels-photo-2787341.jpg " ,
        content: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.."
    },
    {
        id: 3,
        name: 'Bukkie George',
        title: 'Software developer',
        image:
        "https://i.ibb.co/mBxn67X/pexels-photo-219550.jpg" ,
        content: "I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."
    },
    {
        id: 4,
        name: 'Judge Judy',
        title: 'Mobile developer',
        image:
        "https://i.ibb.co/K7sSxtP/pexels-photo-3586798.jpg" ,
        content: "I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."
    },
]

const image = document.getElementById('img')
const name = document.getElementById('name')
const content = document.getElementById('para')
const title = document.getElementById('title')

const prevButton = document.querySelector('#prevBtn')
const nextButton = document.querySelector('#nextBtn')

let currentReview = 0

window.addEventListener('DOMContentLoaded', function(){
    showReview(currentReview)
})

function showReview(personReview){
    const reviewItem = reviews[personReview]
    img.src = reviewItem.image
    content.textContent = reviewItem.content
    name.textContent = reviewItem.name
    title.textContent = reviewItem.title
}

prevButton.addEventListener('click', function(){
    currentReview --
    if (currentReview < 0){
        currentReview = reviews.length - 1
    }
    showReview(currentReview)
})

nextButton.addEventListener('click', function(){
    currentReview++
    if (currentReview > reviews.length - 1){
        currentReview = 0
    }
    showReview(currentReview)
})

