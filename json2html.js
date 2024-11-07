export default function json2html(data) {
  const headers = ["Name", "Age", "Gender"];

  // Begin the HTML table
  let html = `<table data-user="kanishka.sriramoju@gmail.com">
    <thead>
      <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
    </thead>
    <tbody>`;

  // Populate table rows
  data.forEach(row => {
    html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
  });

  // End the table
  html += `</tbody></table>`;
  return html;
}
