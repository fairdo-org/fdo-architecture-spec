async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  for (const el of elements) {
    const file = el.getAttribute("data-include");

    try {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error(`Failed to load ${file}`);
      }
      el.innerHTML = await response.text();
    } catch (error) {
      el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
      console.error(error);
    }
  }
}

includeHTML();
