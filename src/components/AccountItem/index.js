import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://i.pinimg.com/originals/82/33/47/823347377556e4b2eb3a852b5c02369a.png"
        alt=""
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Le Dinh Dat</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </p>
        <span className={cx('username')}>ledinhdat</span>
      </div>
    </div>
  );
}
export default AccountItem;
