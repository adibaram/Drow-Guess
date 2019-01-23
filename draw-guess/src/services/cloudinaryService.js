const CLOUD_NAME = 'cheers-mate';

import store from '../store'

var UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
const UPLOAD_PRESET = 'cheers-mate-guest';

// on submit call to this function
async function uploadImg(elForm) {
   
    // A function to be called if request succeeds
    function onSuccess(res) {
        console.log('uploadedImg', res);
        console.log('uploadedImg', res.secure_url);
        return res.secure_url;
    } 
    // doUploadImg(elForm, onSuccess);
    const res = await doUploadImg(elForm, onSuccess);
    return res;

}

function doUploadImg(elForm, onSuccess) {
    // var UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    var formData = new FormData();
    formData.append('file', elForm)
    formData.append('upload_preset', UPLOAD_PRESET);

    fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
    .then(function (response) {
        return response.json()
    })
    .then(onSuccess)
    .catch(function (error) {
        console.error(error)
    })
    .then((res) => {
        store.dispatch({ type: 'setDrawUrl', drawUrl: res});
    })
}

export default {
    uploadImg
}
