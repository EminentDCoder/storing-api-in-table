// 1st METHOD
// fetch("https://fakestoreapi.com/products").then((data)=>{
//     return data.json();
// }).then((objectData)=>{
//     let tableData =  " ";
//     objectData.map((val) =>{
//         tableData +=  `<tr>
//         <td> ${val.title} </td>
//         <td>${val.description}</td>
//         <td>${val.price}</td>
//         <td> <img src="${val.image}"/> </td>
//     </tr> `
//     });
//     document.getElementById("table-body").innerHTML = tableData;
// }).catch((err)=>{
//     console.log("error");
// });



// OR USING FETCH AND AWAIT 

const fakeApi = async () =>{
    const response = await fetch("store.json");

    if(response.status !== 200){
        throw new Error('unable to fetch data');
    }
    const data = await response.json();
    return data;
    // console.log(data)
}

fakeApi().then((data)=>{
        let tableData =  " ";
        data.forEach((val) =>{
        tableData +=  `<tr>
        <td> ${val.title} </td>
        <td>${val.description}</td>
        <td>${val.price}</td>
        <td> <img src="${val.image}"/> </td>
    </tr> `
    });
    document.querySelector("#table-body").innerHTML = tableData;
}).catch((error)=>{
    console.log(error.message);
});


