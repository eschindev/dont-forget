const editFriendFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name_input").value.trim();
  const birthday = document.querySelector("#birthday_input").value.trim();
  const significant_other = document
    .querySelector("#significant_other_input")
    .value.trim();
  const phone = document.querySelector("#phone_input").value.trim();
  const email = document.querySelector("#email_input").value.trim();
  const address = document.querySelector("#address_input").value.trim();
  const friendId = window.location.pathname.split("/")[2];

  if (Number.isInteger(friendId)) {
    const response = await fetch(`/api/friend/${friendId}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        birthday,
        significant_other,
        phone,
        email,
        address,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/friend/${friendId}`);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".edit-friend-form")
  .addEventListener("submit", editFriendFormHandler);
