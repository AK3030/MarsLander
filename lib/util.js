
export const checkRed = (pixelData) => {
  for (let i = 0; i < pixelData.length; i=i+3) {

    if (pixelData[i] === 255) {
      return true;
    }
  }
  return false;
};
