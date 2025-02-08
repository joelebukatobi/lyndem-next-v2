export const Select = ({ name, id, children, icon }) => {
  return (
    <div className="select">
      <select
        data-hs-select='{
        "placeholder": "Select Option...",
        "toggleTag": "<button type=\"button\"></button>",
        "toggleClasses": "",
        "dropdownClasses": "",
        "optionClasses": "hs-selected:"
      }'
      >
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
      </select>

      <div className="absolute top-1/2 end-2.5 -translate-y-1/2">{icon}</div>
    </div>
  );
};
