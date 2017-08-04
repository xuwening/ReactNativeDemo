
import React, {Component} from 'react'
import {
    Dimensions,
    Button,
    View,
    Animated,
} from 'react-native'

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';


export default class SvgExampleSrc extends Component {

    constructor(props) {
        super(props)
        this.state = {
            circleBg: [150, 150, 60],
            startDegree: 145,
            endDegree: 35,
            animateDegree: 35 + 360,
            bigDegree: 1,

            remain: 100.0,
        }

        this.positionOfCircle = this.positionOfCircle.bind(this)
    }

    componentDidMount() {
        this._interval = setInterval(this.onTick.bind(this), 42)
    }

    componentWillUnmount() {
        clearInterval(this._interval)
    }

    onTick() {
        degree = this.state.animateDegree
        big = this.state.bigDegree
        flowValue = this.state.remain

        degree = degree - 3
        flowValue = flowValue - 1.0

        big = degree - 145 >= 180 ? 1 : 0

        if (degree < 145) {

            degree = this.state.startDegree
            this.setState({animateDegree: degree, bigDegree: big})
            clearInterval(this._interval)
            return
        }

        this.setState({animateDegree: degree, bigDegree: big, remain: flowValue, animateValue: new Animated.Value(35+360)})
    }

    positionOfCircle(degree, func) {

        return this.state.circleBg[0] + this.state.circleBg[2] * func(degree * 3.14 / 180)
    }

    refreshSrc() {
        this.componentWillUnmount();
        this.componentDidMount(); 
        this.setState({animateDegree: 35+360,bigDegree: 1, remain: 100})
    }

    render() {

        const svgHeight = svgWidth = this.props.svgSize
        const circleBg = this.state.circleBg

        const endDegreeFore = this.state.animateDegree
        
        const posxStart = this.positionOfCircle(this.state.startDegree, Math.cos)
        const posyStart = this.positionOfCircle(this.state.startDegree, Math.sin)

        const posxEnd = this.positionOfCircle(this.state.endDegree, Math.cos)
        const posyEnd = this.positionOfCircle(this.state.endDegree, Math.sin)

        const posxEndFore = this.positionOfCircle(endDegreeFore, Math.cos)
        const posyEndFore = this.positionOfCircle(endDegreeFore, Math.sin)

        const pathBg = "M"+posxStart+' '+posyStart + 'A ' + this.state.circleBg[2] + ' ' + this.state.circleBg[2] + ' 0 1 1 ' + posxEnd + ' ' + posyEnd
        const pathFore = "M"+posxStart+' '+posyStart + 'A ' + this.state.circleBg[2] + ' ' + this.state.circleBg[2] + ' 0 ' + this.state.bigDegree + ' 1 ' + posxEndFore + ' ' + posyEndFore


        circleDegreeX = [circleBg[0], circleBg[0]+20, circleBg[0]+40, 270, this.state.endDegree]
        circleDegreeY = [circleBg[1], circleBg[1]+20, circleBg[1]+40, 270, this.state.endDegree]
        const posxs = circleDegreeX.map((degree) => this.positionOfCircle(degree, Math.cos))
        const posys = circleDegreeY.map((degree) => this.positionOfCircle(degree, Math.sin))

        return (
                <Svg
                    height={svgHeight}
                    width={svgWidth}
                >

                    <Path d={pathFore}
                        stroke="orange" strokeLinecap="round" fill="transparent" strokeWidth="6" />
                                            
                </Svg>
        );
    }
}
