import React from 'react';

const Content = ({content, title}) => {
    return (
      <section className="bg-white py-3">
        <h4 class="text-center font-weight-bold text-warning underline ">
          {title}
        </h4>
        <div className="d-flex justify-content-between flex-wrap container-fluid">
          {content}
        </div>
      </section>
    );
}
 
export default Content;