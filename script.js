function playBook(audioFile, title, author) {
  const player = document.getElementById("audio-player");
  player.src = audioFile;
  player.play();

  document.getElementById("current-title").textContent = title;
  document.getElementById("current-author").textContent = "By " + author;

  const downloadBtn = document.getElementById("download-btn");
  downloadBtn.disabled = false;
  downloadBtn.onclick = () => {
    const a = document.createElement("a");
    a.href = audioFile;
    a.download = audioFile;
    a.click();
  };
}

document.getElementById("speed-control").addEventListener("change", function() {
  document.getElementById("audio-player").playbackRate = parseFloat(this.value);
});
