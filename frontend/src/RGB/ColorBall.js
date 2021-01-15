import React from 'react'

import './ColorBall.css'

class ColorBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            id: props.id,
            visibility: props.visibility,
            target: null,
            gameOn: false,
            validTarget: true,

            delay: props.delay,
            correctGuess: props.correctGuess,
            removeCoin: props.removeCoin
        }
    }

    componentDidMount() {
        console.log('mounted')
    }

    // componentWillUnmount() {
    //     console.log('unmounted')
    //     clearTimeout(this.timeout)
    // }

    componentDidUpdate(prevProps) {
        if (prevProps.color !== this.props.color) {
            this.timeout = setTimeout(() => {
                this.setState({
                    id: this.props.id,
                    target: this.props.target,
                    visibility: this.props.visibility,
                    color: this.props.color,
                    validTarget: true,
                })
            }, this.state.delay)
        }
        if (prevProps.gameOn !== this.props.gameOn) {
            this.setState({
                gameOn: this.props.gameOn
            })
        }
        // this.componentWillUnmount();
    }

    checkGuess = (id) => {
        if (!this.state.gameOn) return
        if (this.state.target === id) {
            this.setState({color: {}})
            this.state.correctGuess();
        } else {
            this.setState({
                color: {},
                visibility: 'hidden',
                validTarget: false,
            })
        }
        if (this.state.validTarget) {
            this.state.removeCoin()
        }
    }


    render() {
        return (
        <div
            className={`colorBall ${this.state.visibility}`}
            id={this.state.id}
            onClick={() => this.checkGuess(this.state.id)}
            style={this.state.color}
        >
        </div>
        )
    }
}

export default ColorBall;
