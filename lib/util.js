
export const checkRed = (pixelData) => {
  // for (let i = 0; i < pixelData.length; i=i+3) {
  //
  //   if (pixelData[i] === 255) {
  //     console.log(pixelData);
  //     return true;
  //   }
  // }
  if ((pixelData[0] === 255) && (pixelData[3] === 255) && (pixelData[1] === 0) && (pixelData[2] === 0)){
    console.log(pixelData);
    return true;
  }
  return false;
};

export const checkWhite = (pixelData) => {
  if ((pixelData[0] === 255) && (pixelData[3] === 255) && (pixelData[1] === 255) && (pixelData[2] === 255)){
    console.log(pixelData);
    return true;
  }
  return false;
};
