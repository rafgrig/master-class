// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { storage } from "./firestore";

// export default async function setImageUrl(file) {
//     if (!file) return;

//     const storageRef = ref(storage, `products/${file.name}`);
//     await uploadBytes(storageRef, file);
//     const url = await getDownloadURL(storageRef);

//     return url;
// }