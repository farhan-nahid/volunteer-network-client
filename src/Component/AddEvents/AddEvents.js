import React from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="example" defaultValue="test" ref={register} />
            <input name="example" ref={register({ required: true })} />
            <input type="submit" />
        </form>
    );
};

export default AddEvents;