import React from 'react'
import shortid from 'shortid'
import { Stars } from './styles'

export default ({ data }) => {
  const [scoreMax, scoreMin] = data
    .toString()
    .split('.')
    .map(value => Number(value))
  const repeat = Array(scoreMax).fill(0)
  const difference = Array(5 - scoreMax).fill(0)

  return (
    <Stars id="Stars" className="stars" aria-label="Stars">
      {repeat.map((value, i) => (
        <i key={shortid.generate()} className="fas fa-star" />
      ))}
      {difference.map((value, i) => {
        const haveHalf =
          scoreMax === i + scoreMax &&
          scoreMin &&
          Number(scoreMin) >= 5 &&
          Number(scoreMin) <= 9

        if (haveHalf) {
          return <i key={shortid.generate()} className="fas fa-star-half-alt" />
        }

        return <i key={shortid.generate()} className="fal fa-star" />
      })}
    </Stars>
  )
}
