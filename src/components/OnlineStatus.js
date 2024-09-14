const OnlineStatus = ({ status }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
    }`}
  >
    {status ? "Online" : "Offline"}
  </span>
);

export default OnlineStatus;
