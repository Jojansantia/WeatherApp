import React from 'react';

const Message = ({ msg }) => {

  return (
   <>
      {msg &&
        <div className='alert alert-warning alert-dismissible fade show mt-2' role='alert'>
          <strong className="mr-2">
            ¡Error!
            </strong>
          {msg}
        </div>
      }
    </>
  );

};

export default Message;