import classNames from "classnames";
import { createElement } from "react";



export default function Button({size,children}){
    return(
        createElement('button',
        {className=classNames(
          {""}
        )}
        ))
}

Button.propTypes={
    size:PropTypes.oneOfType
}