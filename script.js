let totalCount = document.getElementById('totalCount')
let thrivingCount = document.getElementById('thrivingCount')
let survivingCount = document.getElementById('survivingCount')

const totalCard = document.getElementById('allCards')

function calculateCount(){
    totalCount.innerText = totalCard.children.length
}
calculateCount()

const allFilterBtn = document.getElementById('all-filter-btn')
const thriveFilterBtn = document.getElementById('thrive-filter-btn')
const surviveFilterBtn = document.getElementById('survive-filter-btn')

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-black','text-white')
    thriveFilterBtn.classList.remove('bg-black','text-white')
    surviveFilterBtn.classList.remove('bg-black','text-white')

    allFilterBtn.classList.add('bg-gray-300','text-black')
    thriveFilterBtn.classList.add('bg-gray-300','text-black')
    surviveFilterBtn.classList.add('bg-gray-300','text-black')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-gray-300','text-black')
    selected.classList.add('bg-black','text-white')
}