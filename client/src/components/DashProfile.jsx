import { Alert, Button, TextInput } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from "../firebase";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { updateStart, updateSuccess, updateFailue} from "../redux/user/userSlice";

function DashProfile() {
  const { currentUser } = useSelector(state => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(0);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [formData, setFormData] = useState({})
  const filePickerRef = useRef();
  const dispatch = useDispatch()

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    setImageFileUploadError(null)
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError('Could not Upload Image (file must be less than 2mb)',error)
        setImageFileUploadProgress(null);
        setImageFile(null)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({...formData,profilePicture:downloadURL})
        });
      }
    );
  };

  console.log(imageFileUploadProgress, imageFileUploadError);
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(Object.keys(formData).length === 0){
      return
    }
    try{
      dispatch(updateStart())
      const res = await fetch(`/api/user/update/${currentUser._id}`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json()
      if(!res.ok){
        dispatch(updateFailue(data.message))
      }else{
        dispatch(updateSuccess(data))
      }
    }catch(error){
        dispatch(updateFailue(error.message))
    }
  }
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input hidden type="file" accept="image/*" onChange={handleImageChange} ref={filePickerRef} />
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => { filePickerRef.current.click(); }}>
          {imageFileUploadProgress && (
            <CircularProgressbar 
              value={imageFileUploadProgress || 0} 
              text={`${imageFileUploadProgress}%`} // Comma was missing here
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0
                },
                path: {
                  stroke: `rgba(62,152,199,${imageFileUploadProgress / 100})`
                }
              }}
            />
          )}
          <img src={imageFileUrl || currentUser.profilePicture} alt="user" className="rounded-full w-full h-full border-8 border-[light-gray] object-cover" />
        </div>
        {imageFileUploadError && <Alert color='failure'>{imageFileUploadError}</Alert>}
        <TextInput onChange={handleChange} type="text" id="username" placeholder="username" defaultValue={currentUser.username} />
        <TextInput onChange={handleChange} type="email" id="email" placeholder="email" defaultValue={currentUser.email} />
        <TextInput onChange={handleChange} type="password" id="password" placeholder="password" />
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>
          Update
        </Button>
        <div className="text-red-500 flex justify-between mt-3" >
          <span className="cursor-pointer">Sign Out</span>
          <span className="cursor-pointer">Delete Account</span>
        </div>
      </form>
    </div>
  );
}

export default DashProfile;
