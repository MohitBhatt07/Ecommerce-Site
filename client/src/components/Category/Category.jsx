import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
function Category() {
  return (
    <div className="category">
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80"
            alt=""
          />
            <Link to={"/products/1"} className="link">
          <button>
              WOMEN
          </button>
            </Link>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
            <Link to={"/products/1"} className="link">
          <button>
              MEN
          </button>
            </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1604272490759-7c465473958a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
            <Link to={"/products/1"} className="link">
          <button>
              sales
          </button>
            </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1544276695-78ee85a81e64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=413&q=80"
                alt=""
              />
              <Link to={"/products/1"} className="link">
              <button>
                  Accessories
              </button>
                </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1572969565371-acc5b2b3496a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <Link to={"/products/1"} className="link">
                <button>Shoes</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/group-beautiful-girls-boys-pastel-wall_155003-10578.jpg?w=740&t=st=1692626110~exp=1692626710~hmac=893fc98c39e4896240c15390dd9877d172ac0d976662b305e7a1ef4a5bfdfd5f"
            alt=""
          />

          <Link to={"/products/1"} className="link">
            <button>KIDS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
