import './StatusTag.scss';

const StatusTag = ({ status }) => {
const statusClass = `status-tag status-tag--${status === 'In Stock' ? 'in-stock' : 'out-of-stock'}`;
return (
    <span className={statusClass}>
      {status}
    </span>
  );
};

export default StatusTag;
