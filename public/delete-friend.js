const editFriendFormHandler = async (event) => {
  event.preventDefault();

  const friendId = event.target.dataset.friendId;

  if (Number.isInteger(friendId)) {
    const response = await fetch(`/api/friend/${friendId}`, {
      method: "DELETE",
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
  .querySelector(".delete-button")
  .addEventListener("click", editFriendFormHandler);
