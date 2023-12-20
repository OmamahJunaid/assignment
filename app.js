let arr = [
    {
        brand: "samsung",
        model: "samsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "samsung",
        model: "samsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "samsung",
        model: "samsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "vivo",
        model: "vivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "vivo",
        model: "vivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "vivo",
        model: "vivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "motorola",
        model: "motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "iphone",
        model: "iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "iphone",
        model: "iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "iphone",
        model: "iphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]
const cards = document.getElementById("cards");
 
arr.map((current_object) => {
  const { brand, model, price, camera, ram,rom } = current_object;

  return (cards.innerHTML += `<ul>
    <li>brand: ${brand} </li>
    <li>model: ${model}</li>
    <li>price: ${price} </li>
    <li>camera: ${camera} </li>
    <li>ram: ${ram} </li>
    <li>rom: ${rom} </li>
  </ul>`);
});
function searchPhones() {
    const searchBy = document.getElementById('searchBy').value;
    const searchValue = document.getElementById('searchValue').value.toLowerCase();

    const filteredPhones = arr.filter(phone => {
    
        const attributeValue = phone[searchBy].toString().toLowerCase();
        return attributeValue.includes(searchValue);
    });

    displayResults(filteredPhones);
}

function displayResults(results) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    if (results.length === 0) {
        resultContainer.innerHTML = '<p>No results found.</p>';
    } else {
        cards.innerHTML=""
        results.forEach(current_object => {
            const { brand, model, price, camera, ram,rom } = current_object;
            const phoneInfo = document.createElement('p');
            phoneInfo.innerHTML = `<ul>
            <li>brand: ${brand} </li>
            <li>model: ${model}</li>
            <li>price: ${price} </li>
            <li>camera: ${camera} </li>
            <li>ram: ${ram} </li>
            <li>rom: ${rom} </li>
          </ul>` ;
            resultContainer.appendChild(phoneInfo);
        });
    }
}