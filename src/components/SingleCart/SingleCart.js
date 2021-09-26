import React from "react";
import "./SingleCart.css";

const SingleCart = ({ data, handleCartData }) => {
  const {
    name,
    picture,
    gender,
    age,
    email,
    language,
    _id,
    expectedSalary,
  } = data;
  return (
    <>
      <div className="single-cart">
        <div className="img-div">
          <img src={picture} alt="" />
        </div>
        <div className="dev-details">
          <h2 title={name} className="name"> {name}</h2>
          <h3>Details -</h3>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
          <p>Expected Salary: ${expectedSalary}</p>
          <div className="lang">
            <ul>
              {language.map((lang, ind) => (
                <li key={_id + ind}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className="btn-div">
            <button onClick={()=>handleCartData(data)} className="choice-btn">
              <i className="fas fa-plus-circle"></i>Add choice list
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCart;
