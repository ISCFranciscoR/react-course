import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loader() {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div style={styles}>
      <FontAwesomeIcon icon={faSpinner} size="lg" spin />
    </div>
  );
}
