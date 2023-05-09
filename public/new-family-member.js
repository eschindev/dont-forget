const newFamilyMemberFormHandler = async (event) => {
  event.preventDefault();

  const fam_name = document.querySelector("#name_input").value.trim();
  const birthday = document.querySelector("#birthday_input").value.trim();
  const fam_rel = document.querySelector("#relationship_input").value.trim();
  const friend_id = parseInt(
    document.querySelector("#add-family-member-form").dataset.friendId
  );

  if (fam_name) {
    const response = await fetch(`/api/familyMember/`, {
      method: "POST",
      body: JSON.stringify({
        fam_name,
        birthday,
        fam_rel,
        friend_id,
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
  .querySelector(".add-family-member-form")
  .addEventListener("submit", newFamilyMemberFormHandler);
