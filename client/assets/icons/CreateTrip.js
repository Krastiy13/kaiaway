import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CreateTrip = ({ focused }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={38}
        height={36}
        viewBox="0 0 38 36"
        fill="none"
    >
        <Path
            d="M18.019 17.2107V6.82373H15.9018V17.2107H5.31543V19.2881H15.9018V29.675H18.019V19.2881H28.6054V17.2107H18.019Z"
            fill={focused ? "#2D0CAF" : "black"} />
    </Svg>
);
export default CreateTrip;
