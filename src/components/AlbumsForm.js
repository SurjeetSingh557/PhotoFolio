import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AlbumsForm({ addAlbum, showAlbumForm, setShowAlbumForm }) {
    const inputRef = useRef();
    const clearInput = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    }
    const handleAdd = () => {
        if(inputRef.current.value.trim()){
            addAlbum(inputRef.current.value.trim());
            setShowAlbumForm(!showAlbumForm);
            inputRef.current.value = "";
        }
        else{
            toast.error("The input field can't be empty!")
        }
        inputRef.current.focus();
    }
    
    return (
        <form className="albums-form" onSubmit={(e) => {e.preventDefault();}}>
            <h2>Create Album</h2>
            <div>
                <input type="text" name="album" className="albums-name" placeholder="Enter Album Name .." maxLength={30} ref={inputRef} required />
                <button type="button" className="create-btn" onClick={handleAdd}>Create</button>
                <button type="button" className="clear-btn" onClick={clearInput}>Clear</button>
            </div>
        </form>
    );
}

export default AlbumsForm;
