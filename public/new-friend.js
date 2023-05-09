const newFriendFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name_input").value.trim();
  const birthday = document.querySelector("#birthday_input").value.trim();
  const significant_other = document
    .querySelector("#signficant_other_input")
    .value.trim();
  const phone = document.querySelector("#phone_input").value.trim();
  const email = document.querySelector("#email_input").value.trim();
  const address = document.querySelector("#address_input").value.trim();

  if (name) {
    const response = await fetch(`/api/friend/`, {
      method: "POST",
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
      const friendData = await response.json();
      const friendId = friendData.id;
      document.location.replace(`/friend/${friendId}`);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".add-friend-form")
  .addEventListener("submit", newFriendFormHandler);
