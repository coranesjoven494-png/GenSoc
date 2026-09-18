// Chart.js labor participation
const ctx = document.getElementById('laborChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Male', 'Female'],
    datasets: [{
      label: 'Labor Force Participation (%)',
      data: [72.5, 50.5],
      backgroundColor: ['#004080', '#ff4080']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Timeline details
function showDetail(year) {
  const detail = document.getElementById("timeline-detail");
  if (year === "1888") detail.textContent = "Women of Malolos demanded education rights, challenging colonial restrictions.";
  if (year === "1893") detail.textContent = "Katipunan women organized logistics, communication, and intelligence for the revolution.";
  if (year === "1937") detail.textContent = "Women won the right to vote through a national plebiscite.";
  if (year === "2009") detail.textContent = "The Magna Carta of Women (RA 9710) was enacted, ensuring equality and protection.";
}

// Quiz function
function checkAnswer(question, answer) {
  const result = document.getElementById("quiz-result");
  if (question === 1) {
    if (answer === "pre") result.textContent = "✅ Correct! Pre-colonial Philippines gave women more equality in leadership.";
    else result.textContent = "❌ Not quite. Colonial influences restricted women’s roles.";
  }
  if (question === 2) {
    if (answer === "1937") result.textContent = "✅ Correct! Women gained suffrage in 1937.";
    else result.textContent = "❌ Incorrect. It was 1937, not 1946.";
  }
  if (question === 3) {
    if (answer === "9262") result.textContent = "✅ Correct! RA 9262 protects women from domestic violence.";
    else result.textContent = "❌ Wrong. RA 7192 is about nation-building, not domestic violence.";
  }
}
