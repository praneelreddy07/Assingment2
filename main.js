const url = 'https://restcountries.com/v2/all'

async function getallcountriesfromapi(){
    
    const response = await fetch(url)

    const data = await response.json();

    data.map(i => {
        document.getElementById('caps').innerHTML += `<li> ${i.name} : ${i.capital} </li>`
    })
    
    data.map(i => {
        document.getElementById('pops').innerHTML += `<li> ${i.name} : ${i.population} </li>`
    })

    
}
const namesandcites = [
    {
        "name":"Harry Potter",
         "city":"London"
    },
    {
        "name":"Don Quixote",
        "city":"Madrid"
    },
    {
        "name":"Joan of Arc",
        "city":"Paris"
    },
    {
        "name":"Rosa Park",
        "city":"Alabama"
    },
    {
        "name":"John",
        "city":" Paris"
    }

    ]	

    namesandcites.map(i => {
        document.getElementById('names').innerHTML += `<li> ${i.name} </li>`
    })
    namesandcites.map(i => {
        if(i.city == "London"){
            document.getElementById('london').innerHTML = `<p> ${i.name} </p>`
        }
    })
    const uniqueValuesSet = new Set();



    const filteredArr = namesandcites.filter((i) => {
    // check if name property value is already in the set
    const isPresentInSet = uniqueValuesSet.has(i.city);

    // add name property value to Set
    uniqueValuesSet.add(i.city);

    // return the negated value of
    // isPresentInSet variable
    return !isPresentInSet;
});
console.log(filteredArr)
const url1 = 'https://jsonplaceholder.typicode.com/posts'
async function userid1(){
    const response = await fetch(url1)
    const data = await response.json();
    const users = data.filter( i => i.userId == 1)
    console.log(users)
}

const url2 = 'https://fakestoreapi.com/products'
async function fakestoreproducts(){
    const response = await fetch(url2)
    const data = await response.json();
    data.map(i => {
        if(i.price >= 100){
            document.getElementById('products1').innerHTML += `<li> Products Names :-  ${i.title} : Price :- ${i.price} </li>`
        }
    })
    const atoz = []
    data.map(i => {
        atoz.unshift(i.title)

    })
    atoz.sort()
    document.getElementById('products2').innerHTML += `<li> ${atoz} &nbsp; &nbsp;  </li>`

}


const url3 = 'https://api.thecatapi.com/v1/breeds'
async function catsapi(){
    const response = await fetch(url3)
    const data = await response.json();
    data.map(i =>{
        if(i.country_codes == "US"){
            document.getElementById('country_codes').innerHTML += `<li> ${i.name} </li>`
        }
    })
}
catsapi()
fakestoreproducts()
userid1()
getallcountriesfromapi()