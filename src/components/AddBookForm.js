import React from 'react';

function AddBookForm() {
  return (
    <div className="add-book">
      <h2>Add new book</h2>
      <form>
        <input type="text" className="title-input" placeholder="Book title" />
        <input type="text" className="author-input" placeholder="Book author" />
        <input className="submit-btn" type="submit" value="Add book" />
      </form>
    </div>
  );
}

export default AddBookForm;
