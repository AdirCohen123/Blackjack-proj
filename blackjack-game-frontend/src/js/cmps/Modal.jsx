import React from 'react'

const Modal = ({score}) => {
    const getColor = () => {
        if(score === 'win') return 'green'
        if(score === 'lose') return 'red'
        else return 'orange'
    }
    const getText = () => {
        if (score === 'win') return 'You WIN!!'
        if (score === 'lose') return 'You lost, better luck next time.'
        else return 'I`ts a TIE!'
    }
  return (
    <div className='modal' style={{backgroundColor: getColor()}}>
          {getText()}
    </div>
  )
}

export default Modal