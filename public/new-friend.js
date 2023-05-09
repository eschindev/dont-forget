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
  const photoInput = document.querySelector("#photo_input");

  let photo;

  if (photoInput.files[0]) {
    try {
      photo = await readFileAsBase64(photoInput.files[0]);
    } catch (err) {
      console.log(
        "Failed to upload photo. Please check file format and try again."
      );
      return;
    }
  }

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
        photo,
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

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result.split(",")[1]);
    };
    reader.onerror = (error) => reject(error);
  });
}

document
  .querySelector(".add-friend-form")
  .addEventListener("submit", newFriendFormHandler);
