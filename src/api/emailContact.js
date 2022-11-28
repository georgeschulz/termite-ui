async function emailContact({ name, email, phone, address, city, zip, state, targetType }) {
    console.table({ name, email, phone, address, city, zip, state, targetType });
    
    const response = await fetch('https://hook.us1.make.com/bskca2e87vliomjfska71c238cyu1f5q', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            address: address,
            city: city,
            zip: zip,
            state: state,
            targetType: targetType
        })
    });
    return response;
}

export default emailContact;