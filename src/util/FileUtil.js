/**
 * Gets Base64 content of a Javascript `File` object.
 *
 * @param {File} file
 * @return {Promise} a promise that is resolved when the reader loads the file data successfully.
 *    The result contains "data:*/ /*;base64" part.
 *    See https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
 */
export const getBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * https://stackoverflow.com/questions/16968945/convert-base64-png-data-to-javascript-file-objects/16972036
 *
 * @param {*} dataurl
 * @param {*} filename
 */
export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
