import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: title,
        price: parseFloat(price),
        description: description,
        image: image,
      }),
    })
      .then((res) => res.json())
      .then(() => navigate(`/product/${id}`));
  };

  return (
    <div className="container pt-5 mt-5 mb-5">
      <h2 className="mb-5">Edit Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="price" className="col-sm-2 col-form-label">Price:</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="image" className="col-sm-2 col-form-label">Image:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
