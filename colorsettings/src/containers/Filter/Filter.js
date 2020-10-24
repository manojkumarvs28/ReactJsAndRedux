import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }

     getFilterCSSStyles = (functions) => {
        let filterString = "";
        for (let filter in functions) {
          if( functions.hasOwnProperty(filter) ) {
            switch(filter){
              case 'hue': filterString+= 'hue-rotate(' + functions[filter] + 'deg) '; break;
              default: filterString += filter + '(' + functions[filter] + '%) '
            }
          } 
        }
        return filterString;
    }

    render () {
        let filterstring = this.getFilterCSSStyles(this.props.filterFunctions);
        return (
            <div 
                className="Filter" 
                style={{width:'100%',
                height:'100%',
                filter: filterstring}} 
                onClick={()=>{this.props.onClick(this.props.filterFunctions)}}>
                    <p className="name">{this.props.name}</p>
                    {this.props.children}
             </div>
        )
    }
}

Filter.propTypes = {
    filterFunctions: PropTypes.shape({
        hue:PropTypes.number,
        contrast:PropTypes.number,
        brightness:PropTypes.number,
        saturate:PropTypes.number,
        sepia:PropTypes.number
    }),
    onClick:PropTypes.func
}


export default Filter;