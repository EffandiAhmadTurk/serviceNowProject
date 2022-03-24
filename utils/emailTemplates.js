exports.createEmailTemplate = ({
  email,
  phone,
  name,
  category,
  date,
  time,
  address,
  addressLink,
}) => {
  return `
    <h3>Info:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong><a href=${addressLink}> ${address}</a></p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p>Go get em!!!</p>
    `;
};
