const deleteFamilyMemberHandler = async (event) => {
  event.preventDefault();

  const familyMemberId = event.target.dataset.familyMemberId;
  const friendId = document.querySelector("#friend-name").dataset.friendId;

  if (friendId) {
    const response = await fetch(`/api/familyMember/${familyMemberId}`, {
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

const deleteButtons = document.querySelectorAll(".delete-button");
for (const button of deleteButtons) {
  button.addEventListener("click", deleteFamilyMemberHandler);
}
