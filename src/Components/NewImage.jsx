import { Component } from "react"

class NewImage extends Component {
    render() {
        return (
        <img src={this.props.imageProps}  alt={this.props.alt} />

        )
    }

}

export default NewImage