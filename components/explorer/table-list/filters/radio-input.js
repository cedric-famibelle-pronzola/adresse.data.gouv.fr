import React from 'react'
import PropTypes from 'prop-types'

class RadioInput extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    toggleInput: PropTypes.func.isRequired,
    style: PropTypes.object,
    isChecked: PropTypes.bool
  }

  static defaultProps = {
    style: null,
    isChecked: false
  }

  handleChange = event => {
    const {toggleInput} = this.props

    toggleInput(event.target.value)
  }

  render() {
    const {value, isChecked, style} = this.props

    return (
      <div style={style} className='input'>
        <input type='radio' id={`radio-${value}`} value={value} checked={isChecked} onClick={this.handleChange} />
        <label className='label-inline'>{value}</label>
      </div>
    )
  }
}

export default RadioInput
