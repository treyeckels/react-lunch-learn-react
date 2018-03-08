import React from "react";

const FilterItem = props => {

    return (
        <option value={props.type}>{props.typeLabel}</option>
    )
};

export default FilterItem;
