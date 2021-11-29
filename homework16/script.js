( () =>{
    const tableEL = document.getElementById('table');
    const trEl = document.createElement('tr');
    const tdEl = document.createElement('td');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users', false)
    xhr.send();

    let {data : users} = JSON.parse(xhr.response)
    tableEL.append(trEl);
    trEl.append(tdEl);
    
    function showUsers(el) {
        el.forEach(i => {
            for (let value in i) {
                tdEl.append(i[value]);
                // console.log(i[value])
            }
        });
    }
    showUsers(users);
})();