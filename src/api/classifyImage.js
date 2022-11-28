async function classifyImage(img) {
    const response = await fetch('https://gschulz-termite-vs-ants.hf.space/run/predict', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "data": [img] }) })
    
    const result = await response.json();
    return result.data[0]
}

export default classifyImage;
