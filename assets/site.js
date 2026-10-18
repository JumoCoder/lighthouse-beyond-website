// Optional enhancement. Navigation and video controls work without JavaScript.
for (const video of document.querySelectorAll('video')) {
  const showError = () => {
    const message = video.parentElement.querySelector('.media-error');
    if (message) message.hidden = false;
  };
  video.addEventListener('error', showError);
  for (const source of video.querySelectorAll('source')) source.addEventListener('error', showError);
}
