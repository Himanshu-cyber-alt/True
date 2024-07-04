// let root = document.documentElement;

// Set the value of the --my-variable-name CSS variable
// root.style.setProperty('--dl-color-custom-secondary1', '#006d77');

// <script>
// var likeCount = 0;
// var isLiked = false;
// var likeButton = document.getElementById('like');

// likeButton.addEventListener('click', function () {
//   if (isLiked) {
//     likeCount--;
//     likeButton.classList.remove('liked');
//   } else {
//     likeCount++;
//     likeButton.classList.add('liked');
//   }
//   isLiked = !isLiked;
//   document.getElementById('likeCount').innerText = likeCount;
// });



var likeButtons = document.querySelectorAll('.like');
var likeCounts = document.querySelectorAll('.likeCount');

// Function to fetch and update like count
function updateLikeCount(postId, countElement) {
    fetch(`/like/count/${postId}`)
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            countElement.innerText = data.likeCount;
        } else {
            console.error('Failed to fetch like count:', data.error);
        }
    })
    .catch(error => {
        console.error('Error fetching like count:', error);
    });
}

// Function to toggle like status
function toggleLike(postId, button, countElement) {
    var isLiked = button.classList.contains('liked');

    // Send a POST request to server to toggle like status
    fetch(`/like/${postId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isLiked: !isLiked }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Update like count after toggling
            updateLikeCount(postId, countElement);

            // Toggle the visual state of the like button
            if (isLiked) {
                button.classList.remove('liked');
            } else {
                button.classList.add('liked');
            }
        } else {
            console.error('Failed to toggle like:', data.error);
        }
    })
    .catch(error => {
        console.error('Error toggling like:', error);
    });
}

// Attach event listeners to each like button
likeButtons.forEach(function(likeButton, index) {
  var postContainer = likeButton.closest('.social');
  if (postContainer) {
      var postId = postContainer.dataset.postId;
      likeButton.addEventListener('click', function() {
          toggleLike(postId, likeButton, likeCounts[index]);
      });
  } else {
      console.error('Post ID not found for like button:', likeButton);
  }
});



// Get all elements with the class 'postImages'
// var postImages = document.querySelectorAll('.postImages');

// Function to handle double-click on images
// function handleImageDoubleClick(event) {
//   var image = event.target; // The clicked image
//   var likeCount = parseInt(count, 10) || 0; // Get initial like count

//   // Toggle like status (similar to your existing toggleLike function)
//   if (image.classList.contains('liked')) {
//     likeCount--;
//     image.classList.remove('liked');
//   } else {
//     likeCount++;
//     image.classList.add('liked');
//   }

//   // Update the like count attribute and display
//   // image.setAttribute('data-like-count', likeCount);
//   // image.nextElementSibling.innerText = likeCount;
//   count.innerText = likeCount;

// }

// Attach double-click event listener to each image
// Attach event listeners to each like button
// postImages.forEach(function(likeButton, index) {
//   likeButton.addEventListener('dblclick', function() {
//     toggleLike(likeButton, likeCounts[index]);
//   });
// });



//!  share button
function shareOnFacebook(postId) {
  const postUrl = `${window.location.origin}/blog/${postId}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
  window.open(facebookUrl, '_blank');
}


function shareOnTwitter(postId) {
  const postUrl = `${window.location.origin}/blog/${postId}`;
  const shareText = `Check out this blog post: ${postUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  window.open(twitterUrl, '_blank');
}


// function shareOnLinkedIn() {
//   let url = window.location.href;
//   window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url), 'linkedin-share-dialog', 'width=800,height=600');
// }

// function shareOnWhatsApp() {
//   let url = window.location.href;
//   let text = 'Check out this blog post!';
//   window.open('https://wa.me/?text=' + encodeURIComponent(text + ' ' + url), 'whatsapp-share-dialog', 'width=800,height=600');
// }
function shareOnWhatsApp(postId) {
  const postUrl = `${window.location.origin}/blog/${postId}`;
  const shareText = `Check out this blog post: ${postUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  window.open(whatsappUrl, '_blank');
}

function shareOnTelegram(postId) {
  const postUrl = `${window.location.origin}/blog/${postId}`;
  const shareText = `Check out this blog post: ${postUrl}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(shareText)}`;
  window.open(telegramUrl, '_blank');
}


function shareByEmail(postId) {
  const postUrl = `${window.location.origin}/blog/${postId}`;
  const subject = "Check out this blog post";
  const body = `Check out this blog post from GGRT : ${postUrl}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailUrl, '_blank');
}


// function shareOnInstagram() {
//   alert('Instagram does not allow sharing URLs. You can only share photos or videos directly through the Instagram app or website.');
// }

// function shareViaSMS() {
//   let url = window.location.href;
//   let text = 'Check out this blog post!';
//   window.location.href = 'sms:?body=' + encodeURIComponent(text + ' ' + url);
// }

//!-------------------------------------------------------------------
