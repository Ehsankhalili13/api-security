async function req(isReload=Boolean) {
    try {
        const auth = 'Basic ' + btoa('admin:1234');
        const res = await fetch('http://localhost:5000/', {
            method: 'GET',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (e) {
        if (e.name == "TypeError" && e.message == "Failed to fetch") {
            let Ir = null
            if (isReload == true) {Ir=true} else if (isReload == false) {Ir=false}
            return re_req(Ir)
        }
        console.log(e.message)
        throw 'خطا در درخواست:', e;
    }
}

function re_req(isReload) {
    setTimeout(async () => {
        if(isReload) {window.location.reload();}
    }, 1000)
}
