

import React, { Component } from 'react';



class CampsiteInfo extends Component {
    constructor(props) {
        super(props);

        this.campsite = { campsite: this.campsite };
        // this.campsite = { campsite: null };

    };



    // Inside its render method, check if an object with the name "campsite" 
    // (passed in via props) can be evaluated as truthy 
    // (e.g. is not null, is not undefined)
    render() {
        if (this.props.campsite) { // passing in campsite via props from parent component
            return (
                // If so, then return an empty div that has the Bootstrap row class as an attribute.
                <div className="row">
                </div>
            )

        }
        return < div > </div >
    }
}



export default CampsiteInfo;