import React, {Component} from "react";
import DekuImg from "../../images/Deku.png";
import BakugoImg from "../../images/Bakugo.png";
import ShotoImg from "../../images/Shoto.png";
import EndeavorImg from "../../images/Endeavor.png";
import AllMightImg from "../../images/AllMight.png";
import IidaImg from "../../images/Iida.png";
import UrahakaImg from "../../images/Urahaka.png";
import JiroImg from "../../images/Jiro.png";
import MomoImg from "../../images/Momo.png";
import ToruImg from "../../images/Toru.png";
import AshidoImg from "../../images/Ashido.png";
import EraserImg from "../../images/Eraser.png";

class Cards extends Component {
//Generate images based on map function in apps.js
imageGen=()=>{
    if(this.props.name=== "Deku"){
    return DekuImg}else
    if(this.props.name=== "Bakugo"){
    return BakugoImg}else
    if(this.props.name=== "AllMight"){
    return AllMightImg}else
    if(this.props.name=== "Shoto"){
    return ShotoImg}else
    if(this.props.name=== "Endeavor"){
    return EndeavorImg}else
    if(this.props.name=== "Iida"){
    return IidaImg}else
    if(this.props.name=== "Eraser"){
    return EraserImg}else
    if(this.props.name=== "Urahaka"){
    return UrahakaImg}else
    if(this.props.name=== "Ashido"){
    return AshidoImg}else
    if(this.props.name=== "Momo"){
    return MomoImg}else
    if(this.props.name=== "Toru"){
    return ToruImg}else
    if(this.props.name=== "Jiro"){
    return JiroImg}
}
helloLog=()=>{
    console.log(this.props.name)
}
    //html
  render(){
    return(
        <div className="card" onClick={ () => this.props.handleClick(this.props.name)} >
                <img
                src={this.imageGen(this.props.name)}
                alt={this.props.name}
                />
    </div>

        )

  }}
export default Cards