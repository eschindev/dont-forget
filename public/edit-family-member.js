const editFamilyMemberFormHandler = async (event) => {
  event.preventDefault();

  const fam_name = document.querySelector("#name_input").value.trim();
  const birthday = document.querySelector("#birthday_input").value.trim();
  const fam_rel = document.querySelector("#relationship_input").value.trim();
  const familyMemberId = window.location.pathname.split("/")[2];
  const friend_id = parseInt(
    document.querySelector("#edit-family-member-form").dataset.friendId
  );

  if (fam_name) {
    const response = await fetch(`/api/familyMember/${familyMemberId}`, {
      method: "PUT",
      body: JSON.stringify({
        fam_name,
        birthday,
        fam_rel,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/friend/${friend_id}`);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".edit-family-member-form")
  .addEventListener("submit", editFamilyMemberFormHandler);
