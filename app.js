document.getElementById('build').addEventListener('click', function() {
  const goal = document.getElementById('goal').value;
  const context = document.getElementById('context').value;
  const format = document.getElementById('format').value;
  
  const prompt = `Goal: ${goal}\nContext: ${context}\nFormat: ${format}\n\nPlease provide the output based on the above details.`;
  
  document.getElementById('result').textContent = prompt;
});

document.getElementById('copy').addEventListener('click', function() {
  const text = document.getElementById('result').textContent;
  navigator.clipboard.writeText(text).then(function() {
    alert('Prompt copied to clipboard!');
  });
});
