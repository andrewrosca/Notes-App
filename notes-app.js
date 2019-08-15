
let notes = getSavedNotes()

const filters = {
    searchText: ''
}



renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})




document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})

// render updated notes title on home page from the edit page
window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})



// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// const dateOne = new Date('September 1 2019 12:00:00')
// const dateTwo = new Date()

// const dateOneTimestamp = dateOne.getTime()
// const dateTwoTimestamp = dateTwo.getTime()

// if (dateOneTimestamp < dateTwoTimestamp) {
//     console.log(dateOne.toString())
// } else if (dateTwoTimestamp < dateOneTimestamp) {
//     console.log(dateTwo.toString())
//}

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()

// console.log(moment(nowTimestamp).toString())

