import React, { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletionMessage, setDeletionMessage] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      setDeletionMessage('Item deleted successfully.');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const Loading = () => {
    return (
      <>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <NavLink className="text-decoration-none text-dark" to={`/`}>
              <div className="d-flex align-items-center m-3">
                <Skeleton height={20} width={50} />
              </div>
            </NavLink>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      <Skeleton height={300} width={250} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border p-4">
                    <div className="mt-4 mb-3">
                      <span className="text-uppercase text-muted brand">
                        <Skeleton height={30} width={150} />
                      </span>
                      <h5 className="text-uppercase">
                        <Skeleton height={30} width={200} />
                      </h5>
                      <div className="price d-flex flex-row align-items-center">
                        <span className="act-price">
                          <Skeleton height={20} width={70} />
                          <Skeleton height={30} width={100} />
                        </span>
                      </div>
                    </div>
                    <p className="about">
                      <Skeleton height={10} width={300} />
                      <Skeleton height={10} width={300} />
                      <Skeleton height={10} width={300} />
                      <Skeleton height={10} width={300} />
                    </p>
                    <div className="cart mt-4 align-items-center">
                      <Skeleton height={40} width={150} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowDetails = () => {

    return (
      <>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <NavLink className="text-decoration-none text-dark" to={`/`}>
              <div className="d-flex align-items-center m-3">
                <i className="fa fa-long-arrow-left"></i>
                <span className="ml-1">&nbsp;Back</span>
              </div>
            </NavLink>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      <img id="main-image" alt="product" src={product.image} width="250" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border p-4">
                    <div className="mt-4 mb-3">
                      <span className="text-muted text-capitalize">in {product.category}</span>
                      <h5 className="text-uppercase">{product.title}</h5>
                      Rating {product.rating && product.rating.rate}
                      <i className="fa fa-star text-warning"></i>
                      <div className="price d-flex flex-row align-items-center">
                        <big className="display-6">
                          <b>${product.price}</b>
                        </big>
                      </div>
                    </div>
                    <p className="text-muted">{product.description}</p>
                    <div className="cart mt-4 align-items-center">
                      <NavLink to={`/edit/${id}`}>
                        <button className="btn btn-outline-dark text-uppercase mr-2 px-4">
                            Edit
                        </button>
                      </NavLink>  
                      
                      <button className="btn btn-outline-danger text-uppercase mx-2 px-4" onClick={handleDelete}>
                        Delete
                      </button>
                      <button className="btn btn-outline-dark text-uppercase ml-2 px-4">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container px-0 mb-5" style={{ marginTop: '66px' }}>
        {loading ? <Loading /> : <ShowDetails />}
        {deletionMessage && (
          <div className="alert alert-success mt-4" role="alert">
            {deletionMessage}
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
