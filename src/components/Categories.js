import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <h1>{categories}</h1>
      <button className="checkstatus-btn" type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
}

export default Categories;
