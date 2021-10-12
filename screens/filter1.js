import React from "react"
import {Image, View} from "react-native"

const filter1 = ({
    face: {
        bounds: {
            size: {
                width: faceWidth,
                height: faceheight
            }
        },
        leftEyePosition, rightEyePosition
    }
}) =>{
    const glassWidth = faceWidth
    const glassHeigth = faceHeight/3

    transformAngle= (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x)) ) => angleRad * 180 / Math.PI
        return(
            <View style = {{
                position: "absolute",
                left: leftEyePosition.x - glassWidth * 0.675,
                top: leftEyePosition - 5 - glassHeigth * 0.5
            }}>
                <Image
                   source={require('../assets/glasses-round.png')}
                   style = {{
                       width: glassWidth, 
                       height: glassHeigth,
                       resizeMode: "contain",
                       transform: [{ rotate: `${transformAngle()}deg` }]
                   }}
                />
            </View>
        )
}

export default filter1