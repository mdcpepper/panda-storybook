import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonFn = createRecipe('button', {
  "type": "primary",
  "size": "medium"
}, [])

const variantKeys = [
  "type",
  "size"
]

function splitVariantProps(props) {
  return splitProps(props, variantKeys)
}

export const button = Object.assign(buttonFn, {
  __recipe__: true,
  variantKeys,
  variantMap: {
  "type": [
    "primary",
    "secondary"
  ],
  "size": [
    "small",
    "medium",
    "large"
  ]
},
  splitVariantProps,
})