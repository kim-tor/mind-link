import React from "react";
import "./style.css";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function AddPosts(props) {
  return (
    <form className="posts">
      <div className="form-group">
        <label htmlFor="posts">Posts:</label>
        <input
          value={props.posts}
          onChange={props.handleInputChange}
          name="users"
          type="text"
          className="form-control"
          placeholder="What is your thoughts?"
          id="posts"
        />
        <datalist id="posts">
          {props.posts.map(breed => (
            <option value={posts} key={posts} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Posts
        </button>
      </div>
    </form>
  );
}

export default AddPosts;
