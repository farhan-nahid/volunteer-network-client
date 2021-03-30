import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null)

     const onSubmit = data => {
         const eventData = {
             name: data.name,
             imageURL: imageURL
         };
         const url = `https://volunteer-network-farhan.herokuapp.com/addEvent`
         console.log(eventData);
         fetch(url, {
             method:'POST',
             headers: {
                 'Content-Type' : 'application/json'
                },
            body : JSON.stringify(eventData)
         })
            .then(res => console.log("server res" , res))
        };
        
     const handelImageUpload = event =>{
         const imgData = new FormData();
         imgData.set('key', '552564e82a854d1810681034208035c0')
         imgData.append('image', event.target.files[0])

         axios.post('https://api.imgbb.com/1/upload', imgData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
     }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="New Exciting Event" ref={register} /><br/>
            <input name="example" type='file' onChange={handelImageUpload} /><br/>
            <input type="submit" />
        </form>
    );
};

export default AddEvents;