export const encodeProbability = (classification) => {
    const type = classification.label;
    const element = classification.confidences.find(name => name.label === type);
    const probability = Math.round(element.confidence * 10000) / 100
    const encode = encodeURIComponent(probability)
    return encode;
} 