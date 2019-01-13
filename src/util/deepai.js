import { setApiKey, callStandardApi } from "../../node_modules/deepai/dist/deepai";

setApiKey('9c839e66-45d9-48f5-acb6-d0b26b987515');

async function deepAIResult(selfie) {
    return await callStandardApi("image-similarity", {
        image1: localStorage.getItem("userSnap"),
        image2: selfie,
    });
}

export default deepAIResult;
