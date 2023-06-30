import { button, type ButtonVariant } from '../../../styled-system/recipes'

type ButtonProps = ButtonVariant & {
  children: React.ReactNode
}

export const Button = ({ children, size, type, label, ...props }: ButtonProps) => {
  return (
    <button className={button({ size, type })} {...props}>
      {children}
    </button>
  )
}