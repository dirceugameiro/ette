 
 /*Tema claro/escuro*/
 (function () {
    try {
      const savedTheme = localStorage.getItem("lacada-theme");
      document.documentElement.dataset.theme = savedTheme === "light" ? "light" : "dark";
    } catch (_) {
      document.documentElement.dataset.theme = "dark";
    }
  })();

