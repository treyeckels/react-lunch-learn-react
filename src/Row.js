import React from "react";

const Row = props => {
    const onClick = () => {
        props.onClick(props.id)
    }

    return (
        <tr style={props.isChecked ? { backgroundColor: 'yellowgreen' } : { backgroundColor: 'transparent' }}>
            <td>
                {props.isChecked && props.isDisabled &&
                    <input onChange={onClick} type="checkbox" checked disabled />
                }
                {props.isChecked && !props.isDisabled &&
                    <input onChange={onClick} type="checkbox" checked />
                }
                {!props.isChecked && !props.isDisabled &&
                    <input onChange={onClick} type="checkbox" />
                }

            </td>
            <td className="preview">
                <img src={props.source} />
            </td>
            <td>{props.title}</td>
        </tr>
    )
};

export default Row;
