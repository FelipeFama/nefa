import classNames from "classnames";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import starCircle from "../../assets/images/particles/circle1.svg";

export function StarParticle() {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={starCircle} />
    </span>
  );
}

StarParticle.Proptypes = {
  classNames: Proptypes.string,
};
