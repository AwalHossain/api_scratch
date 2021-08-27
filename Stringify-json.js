const store = {
    name: "Vabna Store",
    address: 'Kili bill road',
    product:['Laptop', 'Mobile', 'earphone'],
    profit: 14442,
    owner:{
        owner: 'Alia begum',
    }
}

const stringify = JSON.stringify(store)
console.log(stringify);
const reverse = JSON.parse(stringify)
console.log(reverse);