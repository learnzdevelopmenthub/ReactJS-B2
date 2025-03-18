import { useForm } from "react-hook-form";

const PostForm = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div className="card mb-4">
            <div className="card-header">
                <h5>Create New Post</h5>
            </div>
            <div className="card-body">
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="title"
                            {...register('title', {required: 'Title is required'})}
                        />
                        {errors.title && <p>{errors.title.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Content</label>
                        <textarea 
                            className="form-control" 
                            id="body"
                            rows="5"
                            {...register('body',  {
                                required: 'Content is required',
                                minLength: {
                                    value: 10,
                                    message: 'Content must be atleast 10 character'
                                }
                            })}
                        ></textarea>
                       {errors.body && <p>{errors.body.message}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary">Create Post</button>
                </form>
            </div>
        </div>
    )
}

export default PostForm;