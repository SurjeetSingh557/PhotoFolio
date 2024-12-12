import { useEffect, useRef } from "react";
import { db } from "../firebaseInit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, updateDoc } from "firebase/firestore";


function ImagesForm({ addImage, newimageDetails, showImagesForm, setShowImagesForm, setNewimageDetails }) {
    const titleRef = useRef();
    const urlRef = useRef();
 
    useEffect(() => {
        titleRef.current.focus();
    })
    useEffect(() => {
        if (newimageDetails) {
            titleRef.current.value = newimageDetails.imgData.imgTitle;
            urlRef.current.value = newimageDetails.imgData.imgUrl;
        }
    }, [newimageDetails])

    function clearInputs() {
        titleRef.current.value = "";
        urlRef.current.value = "";
        titleRef.current.focus();
    }

    function checkURL(url) {
        const img = new Image();
        img.src = url;
        return new Promise((resolve, reject) => {
            img.onload = () => resolve(true);
            img.onerror = () => reject(false);
        })
    }

    function submit() {
        let title = titleRef.current.value;
        let url = urlRef.current.value;
        if(title.trim()){
            checkURL(url).then(() => {
                // if url is active edit it or add it based on what user intents
                if(newimageDetails){
                    const { id, data, index } = newimageDetails;
                    let temp = [...data];
                    temp.splice(index, 1);
                    for(let i of temp){
                        if(title === i.imgTitle){
                            toast.error("Image Already Exists");
                            return;
                        }
                    }
                    data.splice(index, 1, {imgTitle: title, imgUrl: url});
                    const update = async () => {
                        await updateDoc(doc(db,"albums",id), {
                            imagesInfo: data
                        })
                    }
                    update();
                    clearInputs();
                    setNewimageDetails(null);
                    toast.success("Image Edited Successfully");
                    setShowImagesForm(!showImagesForm);
                }
                else{
                    addImage({imgTitle: title, imgUrl: url});
                    clearInputs();
                }
            }).catch(() => {
                toast.error("Invalid URl")
            });
        }
        else{
            toast.error("Input Fields can't be Empty")
        }
    }

    return (
        <form className="images-form">
            <h2>Add an Image</h2>
            <input type="text" ref={titleRef} className="images-title" maxLength={30} placeholder="Enter Image Title..." required/>
            <input type="text" ref={urlRef} className="images-url" placeholder="Enter Image URL..." required/>
            <button type="button" className="create-btn" onClick={submit}>
                {newimageDetails ? "Edit" : "Add"}
            </button>
            <button type="button" className="clear-btn" onClick={clearInputs}>Clear</button>
        </form>
    );
}

export default ImagesForm;
