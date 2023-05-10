let photo;

document.addEventListener("DOMContentLoaded", () => {
  const myDropzone = Dropzone.forElement(".dropzone");
  myDropzone.url = "/api/upload";
  myDropzone.autoProcessQueue = false;
  myDropzone.paramName = "photo";
  myDropzone.acceptedFiles = "image/*";
  myDropzone.maxFiles = 1;
  myDropzone.createImageThumbnails = true;

  myDropzone.on("addedfile", (file) => {
    document.querySelector("#submit-button").disabled = true;

    const reader = new FileReader();
    reader.onload = (event) => {
      photo = event.target.result.split(",")[1];

      document.querySelector("#submit-button").disabled = false;
    };
    reader.readAsDataURL(file);
  });
});

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
  const friendId = parseInt(window.location.pathname.split("/")[2]);

  const data = {
    name,
    birthday,
    significant_other,
    phone,
    email,
    address,
  };

  if (photo) {
    data.photo = photo;
  }

  if (Number.isInteger(friendId)) {
    const response = await fetch(`/api/friend/${friendId}`, {
      method: "PUT",
      body: JSON.stringify(data),
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
