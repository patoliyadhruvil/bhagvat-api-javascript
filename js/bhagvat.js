const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e1d160db4msha4d2eca1eb67a7dp149390jsne1265c02e63e',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};



let info = document.getElementById('info');
let box = document.getElementById('box');
let box1 = document.getElementById('box1');


const getdata = () =>{
    fetch(url , options).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log("data" , data);
    
        data.forEach(element => {
            console.log(element.name);
            info.innerHTML += ` <option value="${element.name}">${element.name}</option>`
        });
    }).catch((err)=>{
        console.log(err);
    });

}
getdata();

const clickZ = ()=>{
    event.preventDefault();
    var t = info.value;

    fetch(url , options).then((res)=>{
        return res.json();
    }).then((ele)=>{
        console.log(ele);

        ele.forEach(elem =>{
            console.log(elem);
            if( t == elem.name){
                box.innerHTML += ` <h2>${elem.name}</h2>
                    <p>${elem.chapter_summary }</p>
                    <p>${elem.chapter_summary_hindi}</p>
                    <p>${elem.name_translated}</p>
                    <p>${elem.slug}</p>
                    <button onclick="return clicks(${elem.id})">Click me</button>`
            }
        })

    }).catch((err)=>{
        console.log(err);
    })
}





const clicks = (no) =>{
        const url1 = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${no}/verses/`;
        const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9e1d160db4msha4d2eca1eb67a7dp149390jsne1265c02e63e',
            'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
   };


    fetch(url1 , options1).then((ress)=>{
        return ress.json();
    }).then((datas)=>{
        console.log(datas);

        datas.forEach(ele1 =>{
            box1.innerHTML += `
            <p>${ele1.text}</p>`
        })

    }).catch((err)=>{
        console.log(err);
    })

}




