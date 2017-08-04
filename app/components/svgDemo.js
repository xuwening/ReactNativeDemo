
import React, {Component} from 'react'
import {
    Dimensions,
    Button,
    View,
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


export default class SvgExample extends Component {

    constructor(props) {
        super(props)
        this.state = {
            circleBg: [150, 150, 60],
            startDegree: 145,
            endDegree: 35,
            animateDegree: 35,
            bigDegree: 1,

            remain: 100.0,
        }

        this.positionOfCircle = this.positionOfCircle.bind(this)
    }


    positionOfCircle(degree, func) {

        return this.state.circleBg[0] + this.state.circleBg[2] * func(degree * 3.14 / 180)
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

        //字体大小
        const fonts = [8,12,8]

        const flowValue = this.state.remain +  "GB"

        return (
                <Svg
                    height={svgHeight}
                    width={svgWidth}
                >

                    <Circle cx={circleBg[0]} cy={circleBg[1]} r={circleBg[2]-18} fill="lightgray"/>
                    <Path d={pathBg}
                        stroke="lightgray" strokeLinecap="round" fill="transparent" strokeWidth="6"  onPress={()=>alert('详情页.')}/>

                    <Text x={circleBg[0]} y={circleBg[1]-circleBg[2]/2} fill="royalblue"  font-family="SimSun" fontSize={fonts[0]} textAnchor="middle">剩余</Text>
                    <Text x={circleBg[0]} y={circleBg[1]-circleBg[2]/10} fill="royalblue"  fontSize={fonts[1]} textAnchor="middle" >{flowValue}</Text>
                    <Text x={circleBg[0]} y={circleBg[1]+circleBg[2]/2-fonts[2]} fill="royalblue"  fontSize={fonts[2]} textAnchor="middle">查看详情</Text>

                    <Text x={posxs[0]+7} y={posys[0]-3} fill="royalblue"  font-family="SimSun" fontSize="6" textAnchor="start">0%</Text>
                    <Text x={posxs[1]+4} y={posys[1]} fill="royalblue"  fontSize="6" textAnchor="start" >10%</Text>
                    <Text x={posxs[2]+3} y={posys[2]} fill="royalblue"  fontSize="6" textAnchor="start">20%</Text>      
                    <Text x={posxs[3]} y={posys[3]+6} fill="royalblue"  font-family="SimSun" fontSize="6" textAnchor="middle">50%</Text>
                    <Text x={posxs[4]-6} y={posys[4]-6} fill="royalblue"  fontSize="6" textAnchor="end" >100%</Text>
                                            
                </Svg>

        );
    }
}
