import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const ColorRingLoading = () => {

    return (
        <div

       >
        <ColorRing
           className="m-0 p-0"
           visible={true}
           height="40"
           width="40"
           ariaLabel="color-ring-loading"
           wrapperStyle={{ padding: 0, margin: 0 }}
           style={{ padding: 0, margin: 0 }} // Applying styles directly here

        //    wrapperClass="color-ring-wrapper"
           colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
       </div>

    );
};

export default ColorRingLoading;