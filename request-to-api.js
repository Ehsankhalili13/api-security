function req() {
    try {
        const auth = 'Basic ' + btoa('admin' + ':' + '1234');
        const res = await fetch('http://localhost:5000/hi', {
            method: 'GET',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json'
            },
        });
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        return JSON.stringify(data);
    } catch (e) {
        console.log(e.message);
    
    }
}
