const deleteFriendHandler = async (event) => {
  event.preventDefault();

  const friendId = event.target.dataset.friendId;

  if (friendId) {
    const response = await fetch(`/api/friend/${friendId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const deleteButtons = document.querySelectorAll(".delete-button");
for (const button of deleteButtons) {
  button.addEventListener("click", deleteFriendHandler);
}
