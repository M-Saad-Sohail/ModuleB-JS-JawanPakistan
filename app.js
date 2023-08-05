let arr = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
]


let newPage = () => {


    // ========================== For DropDown ==================================

    let mySelect = document.getElementById('mySelect');
    const defaultOption = document.createElement("option");
    defaultOption.innerHTML = "Choose a Brand";
    mySelect.appendChild(defaultOption);

    for (i = 0; i < arr.length; i++) {
        const option = document.createElement("option");
        const optionText = document.createTextNode(`${arr[i].brand}`);
        option.appendChild(optionText);
        mySelect.appendChild(option);
    }


    // ========================== For Table ==================================

    arr.map(element => {
        let table = document.getElementById('table');
        const tr = document.createElement("tr");
        const brand = document.createElement("td");
        const brandText = document.createTextNode(`${element.brand}`);
        const camera = document.createElement("td");
        const cameraText = document.createTextNode(`${element.camera}`);
        const model = document.createElement("td");
        const modelText = document.createTextNode(`${element.model}`);
        const price = document.createElement("td");
        const priceText = document.createTextNode(`${element.price}`);
        const ram = document.createElement("td");
        const ramText = document.createTextNode(`${element.ram}`);
        const rom = document.createElement("td");
        const romText = document.createTextNode(`${element.rom}`);
        brand.appendChild(brandText);
        camera.appendChild(cameraText);
        model.appendChild(modelText);
        price.appendChild(priceText);
        ram.appendChild(ramText);
        rom.appendChild(romText);
        tr.appendChild(brand);
        tr.appendChild(model);
        tr.appendChild(price);
        tr.appendChild(camera);
        tr.appendChild(ram);
        tr.appendChild(rom);
        brand.style.padding = '8px 25px';
        camera.style.padding = '8px 25px';
        model.style.padding = '8px 25px';
        price.style.padding = '8px 25px';
        ram.style.padding = '8px 25px';
        rom.style.padding = '8px 25px';
        table.appendChild(tr)
    });
}
newPage();
let onClickButton = () => {
    let inpModel = document.getElementById('inpModel').value;
    console.log(inpModel);
    let mySelect = document.getElementById('mySelect').value;
    console.log(mySelect);
    if (!inpModel && !mySelect) {
        alert('Please enter a model number or select a brand.');
        return;
    }
    const filteredMobiles = arr.filter(
        (mobile) =>
            (!inpModel || mobile.model === inpModel) &&
            (!mySelect || mobile.brand === mySelect)
    );
    const table = document.getElementById('table');
    const table2 = document.getElementById('table2');
    table.style.display = 'none';
    table2.style.display = 'block';

    if (filteredMobiles.length === 0) {
        alert('No mobiles found with the given criteria.');
    } else {
        filteredMobiles.forEach((mobile) => {
            const mobileRow = document.createElement('tr');
            table2.appendChild(mobileRow);
            const brand = document.createElement("td");
            const brandText = document.createTextNode(`${mobile.brand}`);
            const camera = document.createElement("td");
            const cameraText = document.createTextNode(`${mobile.camera}`);
            const model = document.createElement("td");
            const modelText = document.createTextNode(`${mobile.model}`);
            const price = document.createElement("td");
            const priceText = document.createTextNode(`${mobile.price}`);
            const ram = document.createElement("td");
            const ramText = document.createTextNode(`${mobile.ram}`);
            const rom = document.createElement("td");
            const romText = document.createTextNode(`${mobile.rom}`);
            brand.appendChild(brandText);
            camera.appendChild(cameraText);
            model.appendChild(modelText);
            price.appendChild(priceText);
            ram.appendChild(ramText);
            rom.appendChild(romText);
            mobileRow.appendChild(brand);
            mobileRow.appendChild(model);
            mobileRow.appendChild(price);
            mobileRow.appendChild(camera);
            mobileRow.appendChild(ram);
            mobileRow.appendChild(rom);
            brand.style.padding = '8px 25px';
            camera.style.padding = '8px 25px';
            model.style.padding = '8px 25px';
            price.style.padding = '8px 25px';
            ram.style.padding = '8px 25px';
            rom.style.padding = '8px 25px';
            table.appendChild(mobileRow)
            table2.appendChild(mobileRow);
        });
    }
}
