import { clsx } from 'clsx';
function Container({children,className}) {
  return (
    <div className={(clsx(`${className} mx-14`))}>{children}</div>
  )
}

export default Container