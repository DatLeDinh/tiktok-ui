import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  primary = false,
  outline = false,
  small,
  large,
  text,
  disabled,
  roaded,
  lefticon,
  onClick,
}) {
  let Comp = 'button';
  const props = {
    onClick,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', { primary, outline, small, large, text, disabled, roaded, lefticon });

  return (
    <Comp className={classes} {...props}>
      {lefticon && <span className={cx('icon')}>{lefticon}</span>}
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}
export default Button;
